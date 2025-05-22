import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import PieChartComponent from "@/components/charts/PieChartComponent";
import RankingTableMunicipios from "@/components/tables/RankingTableMunicipios";
import RankingTableProdutos from "@/components/tables/RankingTableProdutos";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

import { exportacaoService } from "@/services/exportacaoService";

export default function ExportacaoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("São Paulo");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const dataExportacao = exportacaoService.getDataExportacao();
  const pieData = exportacaoService.getPieData();
  const municipiosData = exportacaoService.getMunicipiosData();
  const dadosProdutos = exportacaoService.getDadosProdutos();

  const COLORS = ["#FF6347", "#6A5ACD", "#20B2AA"];

  useEffect(() => {
    setSearchQuery("");
  }, []);

  return (
    <div className="flex min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <main className="flex-1 p-10 space-y-8">
        {/* Topo com Título e Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="-mt-2">
            <p className="text-sm text-[var(--muted-foreground)]">
              Pages / DashBoard{" "}
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

        {/* Gráfico de Linha e Pizza */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              Valor Agregado / Quilograma Líquido
            </h3>
            <LineChartComponent
              data={dataExportacao}
              xAxisKey="year"
              lines={[
                {
                  dataKey: "valorAgregado",
                  stroke: "#a855f7",
                  label: "Valor Agregado",
                },
                {
                  dataKey: "quilograma",
                  stroke: "#7c3aed",
                  label: "Quilograma Líquido",
                },
              ]}
            />
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Vias de Transporte</h3>
            <PieChartComponent data={pieData} colors={COLORS} />
            <div className="flex justify-around text-sm mt-4">
              <div className="text-center">
                <div className="font-bold text-[var(--color-foreground)]">
                  Marítima
                </div>
                <div>63%</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[var(--color-foreground)]">
                  Aérea
                </div>
                <div>25%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards de Info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard
            title="Top Destinos das Exportações – 2024"
            value="Argentina, China, EUA"
            icon="🌎"
          />
          <InfoCard
            title="Top Produtos Exportados – 2024"
            value="Soja, Minério de Ferro, Carne Bovina"
            icon="📦"
          />
          <InfoCard
            title="Empresas Exportadoras – 2024"
            value="+9.800"
            icon="🏭"
          />
        </section>
        {/* Tabelas de Ranking */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Ranking – Municípios</h3>
              <span className="bg-[var(--color-muted)] text-sm px-2 py-1 rounded-md">
                2024
              </span>
            </div>
            <RankingTableMunicipios data={municipiosData} />
          </div>
          <RankingTableProdutos
            estado="Minas Gerais"
            ncm="Todos"
            titulo="Ranking – Produtos (2024)"
            data={dadosProdutos}
          />
        </section>
      </main>
    </div>
  );
}
