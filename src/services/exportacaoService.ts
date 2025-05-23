// Tipos e interfaces
export interface Produto {
  name: string;
  valor: number | string;
  variacao: string;
  participacao: string;
}

export interface MunicipioData {
  municipio: string;
  valor: string;
}

export interface DashboardProdutoData {
  year: number;
  soja_export: number;
  ferro_export: number;
  oleo_export: number;
}

// Dados históricos para gráfico de linha
export function getDataDashboardProdutos(): DashboardProdutoData[] {
  return [
    { year: 2014, soja_export: 500, ferro_export: 300, oleo_export: 200 },
    { year: 2015, soja_export: 520, ferro_export: 320, oleo_export: 210 },
    { year: 2016, soja_export: 540, ferro_export: 330, oleo_export: 220 },
    { year: 2017, soja_export: 560, ferro_export: 340, oleo_export: 230 },
    { year: 2018, soja_export: 580, ferro_export: 350, oleo_export: 240 },
    { year: 2019, soja_export: 600, ferro_export: 360, oleo_export: 250 },
    { year: 2020, soja_export: 620, ferro_export: 370, oleo_export: 260 },
    { year: 2021, soja_export: 640, ferro_export: 380, oleo_export: 270 },
    { year: 2022, soja_export: 660, ferro_export: 390, oleo_export: 280 },
    { year: 2023, soja_export: 680, ferro_export: 400, oleo_export: 290 },
    { year: 2024, soja_export: 700, ferro_export: 410, oleo_export: 300 },
  ];
}

// Dados para gráfico de pizza - exportação por estado
export function getDadosExportacaoEstados(year: string): Produto[] {
  const dadosPorAno: Record<string, Produto[]> = {
    "2014": [
      { name: "SP", valor: "2500000", variacao: "2.5", participacao: "40" },
      { name: "MG", valor: "1800000", variacao: "1.8", participacao: "28" },
      { name: "RJ", valor: "900000", variacao: "1.2", participacao: "14" },
    ],
    "2015": [
      { name: "SP", valor: "2600000", variacao: "2.3", participacao: "41" },
      { name: "MG", valor: "1850000", variacao: "2.0", participacao: "29" },
      { name: "RJ", valor: "920000", variacao: "1.1", participacao: "13" },
    ],
    "2016": [
      { name: "SP", valor: "2700000", variacao: "2.2", participacao: "42" },
      { name: "MG", valor: "1900000", variacao: "2.1", participacao: "30" },
      { name: "RJ", valor: "940000", variacao: "1.3", participacao: "13" },
    ],
    "2017": [
      { name: "SP", valor: "2800000", variacao: "2.0", participacao: "43" },
      { name: "MG", valor: "1950000", variacao: "2.2", participacao: "31" },
      { name: "RJ", valor: "960000", variacao: "1.0", participacao: "12" },
    ],
    "2018": [
      { name: "SP", valor: "2900000", variacao: "2.1", participacao: "44" },
      { name: "MG", valor: "2000000", variacao: "2.4", participacao: "32" },
      { name: "RJ", valor: "980000", variacao: "1.5", participacao: "13" },
    ],
    "2019": [
      { name: "SP", valor: "3000000", variacao: "2.3", participacao: "45" },
      { name: "MG", valor: "2050000", variacao: "2.3", participacao: "32" },
      { name: "RJ", valor: "1000000", variacao: "1.6", participacao: "13" },
    ],
    "2020": [
      { name: "SP", valor: "3100000", variacao: "2.0", participacao: "45" },
      { name: "MG", valor: "2100000", variacao: "2.1", participacao: "33" },
      { name: "RJ", valor: "1020000", variacao: "1.8", participacao: "13" },
    ],
    "2021": [
      { name: "SP", valor: "3200000", variacao: "1.9", participacao: "45" },
      { name: "MG", valor: "2150000", variacao: "2.0", participacao: "33" },
      { name: "RJ", valor: "1040000", variacao: "1.9", participacao: "13" },
    ],
    "2022": [
      { name: "SP", valor: "3300000", variacao: "2.2", participacao: "46" },
      { name: "MG", valor: "2200000", variacao: "2.1", participacao: "33" },
      { name: "RJ", valor: "1060000", variacao: "1.7", participacao: "12" },
    ],
    "2023": [
      { name: "SP", valor: "3400000", variacao: "2.1", participacao: "46" },
      { name: "MG", valor: "2250000", variacao: "2.3", participacao: "33" },
      { name: "RJ", valor: "1080000", variacao: "1.6", participacao: "12" },
    ],
    "2024": [
      { name: "SP", valor: "3500000", variacao: "2.2", participacao: "45" },
      { name: "MG", valor: "2300000", variacao: "1.9", participacao: "33" },
      { name: "RJ", valor: "1100000", variacao: "1.5", participacao: "16" },
    ],
  };

  return dadosPorAno[year] || [];
}

// Dados para ranking de municípios - importação por estado
export function getDadosImportacaoEstados(year: string): MunicipioData[] {
  const dadosPorAno: Record<string, MunicipioData[]> = {
    "2014": [
      { municipio: "São Paulo", valor: "R$ 1.200.000" },
      { municipio: "Campinas", valor: "R$ 850.000" },
      { municipio: "Santos", valor: "R$ 700.000" },
    ],
    "2015": [
      { municipio: "São Paulo", valor: "R$ 1.250.000" },
      { municipio: "Campinas", valor: "R$ 870.000" },
      { municipio: "Santos", valor: "R$ 720.000" },
    ],
    "2016": [
      { municipio: "São Paulo", valor: "R$ 1.300.000" },
      { municipio: "Campinas", valor: "R$ 890.000" },
      { municipio: "Santos", valor: "R$ 740.000" },
    ],
    "2017": [
      { municipio: "São Paulo", valor: "R$ 1.350.000" },
      { municipio: "Campinas", valor: "R$ 910.000" },
      { municipio: "Santos", valor: "R$ 760.000" },
    ],
    "2018": [
      { municipio: "São Paulo", valor: "R$ 1.400.000" },
      { municipio: "Campinas", valor: "R$ 930.000" },
      { municipio: "Santos", valor: "R$ 780.000" },
    ],
    "2019": [
      { municipio: "São Paulo", valor: "R$ 1.450.000" },
      { municipio: "Campinas", valor: "R$ 950.000" },
      { municipio: "Santos", valor: "R$ 800.000" },
    ],
    "2020": [
      { municipio: "São Paulo", valor: "R$ 1.500.000" },
      { municipio: "Campinas", valor: "R$ 970.000" },
      { municipio: "Santos", valor: "R$ 820.000" },
    ],
    "2021": [
      { municipio: "São Paulo", valor: "R$ 1.550.000" },
      { municipio: "Campinas", valor: "R$ 990.000" },
      { municipio: "Santos", valor: "R$ 840.000" },
    ],
    "2022": [
      { municipio: "São Paulo", valor: "R$ 1.600.000" },
      { municipio: "Campinas", valor: "R$ 1.010.000" },
      { municipio: "Santos", valor: "R$ 860.000" },
    ],
    "2023": [
      { municipio: "São Paulo", valor: "R$ 1.650.000" },
      { municipio: "Campinas", valor: "R$ 1.030.000" },
      { municipio: "Santos", valor: "R$ 880.000" },
    ],
    "2024": [
      { municipio: "São Paulo", valor: "R$ 1.700.000" },
      { municipio: "Campinas", valor: "R$ 1.050.000" },
      { municipio: "Santos", valor: "R$ 900.000" },
    ],
  };

  return dadosPorAno[year] || [];
}

// Exportação principal
export const exportacaoService = {
  getDataDashboardProdutos,
  getDadosExportacaoEstados,
  getDadosImportacaoEstados,
};
