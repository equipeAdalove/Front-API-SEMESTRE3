import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import RankingTable from "@/components/tables/RankingTable";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import { Search } from "lucide-react";

import {
  getDataDashboardProdutos,
  getDadosExportacaoEstados,
} from "@/services/dashboardService";

export default function DashboardInit() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const dataDashboard = getDataDashboardProdutos();
  const dadosExportacaoEstados = getDadosExportacaoEstados();

  return (
    <div className="flex min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <main className="flex-1 p-10 space-y-8">
        {/* Título e Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="-mt-2">
            <p className="text-sm text-[var(--muted-foreground)]">
              Pages / Dashboard
            </p>
            <h2 className="text-4xl font-bold">Dashboard</h2>
          </div>

          <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
            <Search
              className="text-[var(--color-muted-foreground)]"
              size={18}
            />
            <input
              type="text"
              placeholder="Buscar por estado"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 bg-transparent rounded-full w-72 text-[var(--color-foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <button
              onClick={() => navigate("/importacao")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
            >
              Importação
            </button>
            <button
              onClick={() => navigate("/exportacao")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
            >
              Exportação
            </button>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Gráfico e Cards principais */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">
              Comparação de Produtos - Importação e Exportação
            </h3>
            <LineChartComponent
              data={dataDashboard}
              xAxisKey="year"
              lines={[
                {
                  dataKey: "soja_import",
                  stroke: "#f59e0b",
                  label: "Soja Importação",
                },
                {
                  dataKey: "ferro_import",
                  stroke: "#ef4444",
                  label: "Ferro Importação",
                },
                {
                  dataKey: "oleo_import",
                  stroke: "#3b82f6",
                  label: "Óleo Importação",
                },
                {
                  dataKey: "soja_export",
                  stroke: "#d97706",
                  label: "Soja Exportação",
                },
                {
                  dataKey: "ferro_export",
                  stroke: "#b91c1c",
                  label: "Ferro Exportação",
                },
                {
                  dataKey: "oleo_export",
                  stroke: "#2563eb",
                  label: "Óleo Exportação",
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <InfoCard
              title="Saldo US$ Milhões (2024)"
              value="74.176,4"
              icon="$"
            />
            <InfoCard
              title="Importações US$ Milhões (2024)"
              value="262.869,6"
              icon="📥"
            />
            <InfoCard
              title="Exportações US$ Milhões (2024)"
              value="337.046"
              icon="📤"
            />
          </div>
        </section>

        {/* Ranking de Exportação por Estado */}
        <section className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
          <RankingTable
            title="Ranking por Estado – Exportações"
            data={dadosExportacaoEstados}
            unit="US$"
          />
        </section>
      </main>
    </div>
  );
}