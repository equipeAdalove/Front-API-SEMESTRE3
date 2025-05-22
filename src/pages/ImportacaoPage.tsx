import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import PieChartComponent from "@/components/charts/PieChartComponent";
import RankingTableMunicipios from "@/components/tables/RankingTableMunicipios";
import RankingTableProdutos from "@/components/tables/RankingTableProdutos";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

import { importacaoService } from "@/services/importacaoService";

export default function ImportacaoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("São Paulo");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Dados vindo do service
  const dataImportacao = importacaoService.getDataImportacao();
  const pieData = importacaoService.getPieData();
  const municipiosData = importacaoService.getMunicipiosData();
  const dadosProdutos = importacaoService.getDadosProdutos();

  const COLORS = ["#FF6347", "#6A5ACD", "#20B2AA", "#FFD700", "#8A2BE2"];

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
            <h2 className="text-4xl font-bold">Importação</h2>
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
              data={dataImportacao}
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
            <div className="flex items-center gap-6">
              <PieChartComponent data={pieData} colors={COLORS} />
              <div className="text-sm space-y-2">
                <div>
                  <span className="font-bold text-[var(--color-foreground)]">
                    Marítima:
                  </span>{" "}
                  52%
                </div>
                <div>
                  <span className="font-bold text-[var(--color-foreground)]">
                    Rodoviária:
                  </span>{" "}
                  33%
                </div>
                <div>
                  <span className="font-bold text-[var(--color-foreground)]">
                    Aérea:
                  </span>{" "}
                  9%
                </div>
                <div>
                  <span className="font-bold text-[var(--color-foreground)]">
                    Fluvial:
                  </span>{" "}
                  4%
                </div>
                <div>
                  <span className="font-bold text-[var(--color-foreground)]">
                    Ferroviária:
                  </span>{" "}
                  2%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards de Info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard
            title="Top Países de Origem – 2024"
            value="China, EUA, Alemanha"
            icon="🌐"
          />
          <InfoCard
            title="Top Produtos Importados – 2024"
            value="Eletrônicos, Fertilizantes, Máquinas"
            icon="📦"
          />
          <InfoCard
            title="Empresas Importadoras – 2024"
            value="+12.350"
            icon="🏢"
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
