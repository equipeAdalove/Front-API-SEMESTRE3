import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import PieChartComponent from "@/components/charts/PieChartComponent";
import RankingTableMunicipios from "@/components/tables/RankingTableMunicipios";
import RankingTableProdutos from "@/components/tables/RankingTableProdutos";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

import {
  exportacaoService,
  Produto,
  MunicipioData,
} from "@/services/exportacaoService";

export default function ExportacaoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("São Paulo");

  const [anoSelecionado, setAnoSelecionado] = useState("2024");
  // TIPAGEM explícita para os estados:
  const [municipiosData, setMunicipiosData] = useState<MunicipioData[]>([]);
  const [pieData, setPieData] = useState<Produto[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const dataExportacao = exportacaoService.getDataDashboardProdutos();
  const dadosProdutos =
    exportacaoService.getDadosExportacaoEstados(anoSelecionado);

  const COLORS = ["#FF6347", "#6A5ACD", "#20B2AA"];

  useEffect(() => {
    // Atualiza dados conforme o ano muda
    setMunicipiosData(
      exportacaoService.getDadosImportacaoEstados(anoSelecionado)
    );
    setPieData(exportacaoService.getDadosExportacaoEstados(anoSelecionado));
  }, [anoSelecionado]);

  // Transformação para PieChartComponent: {name: string; value: number}[]
  const pieChartData = pieData.map((produto) => ({
    name: produto.name, // ajuste aqui para o campo correto que representa o nome
    value: Number(produto.valor) || 0, // ajuste aqui para o campo que representa o valor numérico
  }));

  return (
    <div className="flex min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <main className="flex-1 p-10 space-y-8">
        {/* Topo */}
        <div className="flex justify-between items-center mb-6">
          <div className="-mt-2">
            <p className="text-sm text-[var(--muted-foreground)]">
              Pages / DashBoard
            </p>
            <h2 className="text-4xl font-bold">Exportação</h2>
          </div>

          <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
            <input
              type="text"
              placeholder="São Paulo"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 bg-transparent rounded-full w-72 text-[var(--color-foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <select
              value={anoSelecionado}
              onChange={(e) => setAnoSelecionado(e.target.value)}
              className="rounded-full border border-gray-300 bg-transparent px-4 py-2 text-[var(--color-foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              {Array.from({ length: 11 }, (_, i) => 2014 + i).map((ano) => (
                <option
                  key={ano}
                  value={ano.toString()}
                  className="text-black dark:text-black"
                >
                  {ano}
                </option>
              ))}
            </select>

            <button
              onClick={() => navigate("/importacao")}
              className={`font-semibold ${
                location.pathname === "/importacao"
                  ? "text-[var(--color-primary)] underline underline-offset-4"
                  : "text-[var(--color-muted-foreground)]"
              }`}
            >
              Importação
            </button>
            <button
              onClick={() => navigate("/exportacao")}
              className={`font-semibold ${
                location.pathname === "/exportacao"
                  ? "text-[var(--color-primary)] underline underline-offset-4"
                  : "text-[var(--color-muted-foreground)]"
              }`}
            >
              Exportação
            </button>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Gráficos */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              Valor Agregado / Quilograma Líquido
            </h3>
            <LineChartComponent
              data={dataExportacao}
              xAxisKey="year"
              lines={[
                { dataKey: "soja_export", stroke: "#a855f7", label: "Soja" },
                {
                  dataKey: "ferro_export",
                  stroke: "#7c3aed",
                  label: "Minério de Ferro",
                },
              ]}
            />
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">
              Exportação por Estado ({anoSelecionado})
            </h3>
            <PieChartComponent data={pieChartData} colors={COLORS} />
          </div>
        </section>

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard
            title={`Top Destinos das Exportações – ${anoSelecionado}`}
            value="Argentina, China, EUA"
            icon="🌎"
          />
          <InfoCard
            title={`Top Produtos Exportados – ${anoSelecionado}`}
            value="Soja, Minério de Ferro, Carne Bovina"
            icon="📦"
          />
          <InfoCard
            title={`Empresas Exportadoras – ${anoSelecionado}`}
            value="+9.800"
            icon="🏭"
          />
        </section>

        {/* Tabelas */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RankingTableMunicipios
            titulo={`Ranking – Municípios (${anoSelecionado})`}
            data={municipiosData}
          />
          <RankingTableProdutos
            estado="Minas Gerais"
            ncm="Todos"
            titulo={`Ranking – Produtos (${anoSelecionado})`}
            data={dadosProdutos}
          />
        </section>
      </main>
    </div>
  );
}
