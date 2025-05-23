import { useState, useMemo, useEffect } from 'react';
import { parse } from 'papaparse';
import type { ParseResult } from 'papaparse';
import { scaleQuantize } from 'd3-scale';
import {
  ComposableMap,
  Geographies,
  Geography,
} from 'react-simple-maps';
import iso3ToId from './iso3_to_id.json';
import paisCodigoToNome from './paises.json';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import * as RadioGroup from '@radix-ui/react-radio-group';

interface HeatMapData {
  NCM: string;
  CO_PAIS: string;
  vl_fob_total: number;
  kg_liq_total: number;
  ISO3: string;
}

type MetricType = 'VL_FOB' | 'KG_LIQUIDO';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

const HeatMap = () => {
  const [ncm, setNcm] = useState<string>('');
  const [metric, setMetric] = useState<MetricType>('VL_FOB');
  const [rawData, setRawData] = useState<HeatMapData[]>([]);
  const [dataById, setDataById] = useState<Record<string, HeatMapData>>({});

  useEffect(() => {
    parse<HeatMapData>('/csv/exportacao_heatmap_com_iso3.csv', {
      download: true,
      dynamicTyping: true,
      header: true,
      complete: (results: ParseResult<HeatMapData>) => {
        const parsedData = results.data
          .filter(row => row.ISO3)
          .map(row => ({
            ...row,
            NCM: String(row.NCM).padStart(8, '0'),
            ISO3: row.ISO3.toUpperCase(),
          }));
        setRawData(parsedData);
      },
      error: (err) => {
        console.error('Erro ao carregar CSV:', err);
      },
    });
  }, []);

  const handleSearch = () => {
    const formattedNCM = ncm.padStart(8, '0');
    const filtered = rawData.filter(item => item.NCM === formattedNCM);

    const byId: Record<string, HeatMapData> = {};
    for (const row of filtered) {
      const idNum = iso3ToId[row.ISO3 as keyof typeof iso3ToId];
      if (idNum) {
        byId[idNum] = row;
      }
    }

    setDataById(byId);
  };

  const maxValue = useMemo(() => {
    const values = Object.values(dataById).map(d =>
      metric === 'VL_FOB' ? d.vl_fob_total : d.kg_liq_total
    );
    return values.length ? Math.max(...values) : 1;
  }, [dataById, metric]);

  const colorScale = useMemo(() =>
    scaleQuantize<string>()
      .domain([0, maxValue])
      .range([
        '#f3e6ff',
        '#d1b3ff',
        '#b380ff',
        '#944dff',
        '#6600cc',
        '#4d0099',
        '#330066',
      ]),
    [maxValue]
  );

  const ranking = useMemo(() => {
    const total = Object.values(dataById).reduce(
      (sum, d) => sum + (metric === 'VL_FOB' ? d.vl_fob_total : d.kg_liq_total),
      0
    );

    return Object.values(dataById)
      .map(d => {
        const paisNome = paisCodigoToNome[d.CO_PAIS as keyof typeof paisCodigoToNome] || d.CO_PAIS;
        const valor = metric === 'VL_FOB' ? d.vl_fob_total : d.kg_liq_total;
        const participacao = total > 0 ? (valor / total) * 100 : 0;
        return { pais: paisNome, valor, participacao };
      })
      .sort((a, b) => b.valor - a.valor);
  }, [dataById, metric]);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
          <Input
            type="text"
            placeholder="Digite o NCM (ex: 10011100)"
            value={ncm}
            onChange={(e) => setNcm(e.target.value.replace(/\D/g, ''))}
            className="w-48"
          />

          <RadioGroup.Root
            value={metric}
            onValueChange={(value) => setMetric(value as MetricType)}
            className="flex gap-4"
          >
            <RadioGroup.Item value="VL_FOB" className="flex items-center gap-2 cursor-pointer">
              <span className={metric === 'VL_FOB' ? 'font-bold' : ''}>VL_FOB</span>
            </RadioGroup.Item>
            <RadioGroup.Item value="KG_LIQUIDO" className="flex items-center gap-2 cursor-pointer">
              <span className={metric === 'KG_LIQUIDO' ? 'font-bold' : ''}>KG_LIQUIDO</span>
            </RadioGroup.Item>
          </RadioGroup.Root>

          <Button className="text-[#fff]" onClick={handleSearch}>
            Pesquisar
          </Button>
        </div>
      </div>

      <div className="w-full h-auto bg-[var(--color-popover)] rounded-3xl">
        <ComposableMap projection="geoMercator" width={1000}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const id = String(geo.id);
                const data = dataById[id];
                const value = data ? (metric === 'VL_FOB' ? data.vl_fob_total : data.kg_liq_total) : 0;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={value > 0 ? colorScale(value) : '#f0f0f0'}
                    stroke="#ffffff"
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>

      {Object.keys(dataById).length > 0 && (
        <div className="mt-6 p-4 bg-[var(--color-card)] rounded-md shadow-md">
          <div className="flex items-center flex-wrap gap-2">
            <span className="font-semibold text-sm mr-2">
              Legenda ({metric === 'VL_FOB' ? 'US$' : 'KG'}):
            </span>
            {colorScale.range().map((color) => {
              const [min, max] = colorScale.invertExtent(color);
              return (
                <div
                  key={color}
                  className="text-[10px] w-[60px] h-[20px] border text-center flex items-center justify-center text-white"
                  style={{ backgroundColor: color, borderColor: '#ccc' }}
                >
                  {Math.round(min)} - {Math.round(max)}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {ranking.length > 0 && (
  <div className="mt-6 p-4 bg-[var(--color-card)] rounded-md shadow-md">
    <h2 className="text-lg font-bold mb-4">
      Ranking por País ({metric === 'VL_FOB' ? 'US$' : 'KG'})
    </h2>
    <table className="w-full text-left rounded-xl overflow-hidden">
      <thead className="bg-[var(--color-popover)] text-[#fff]">
        <tr>
          <th className="p-2">🏅</th>
          <th className="p-2">País</th>
          <th className="p-2">Valor</th>
          <th className="p-2">Participação</th>
        </tr>
      </thead>
      <tbody>
        {ranking.slice(0, 10).map((item, index) => (
          <tr key={item.pais} className="border-b border-gray-200">
            <td className="p-2">
              {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
            </td>
            <td className="p-2">{item.pais}</td>
            <td className="p-2">
              {metric === 'VL_FOB'
                ? `US$ ${item.valor.toLocaleString('pt-BR')}`
                : `${item.valor.toLocaleString('pt-BR')} kg`}
            </td>
            <td className="p-2 w-48">
              <div className="flex items-center">
                <div
                  className="h-2 bg-purple-500 rounded"
                  style={{ width: `${item.participacao}%` }}
                ></div>
                <span className="ml-2 text-sm">
                  {item.participacao.toFixed(1)}%
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

    </div>
  );
};

export default HeatMap;
