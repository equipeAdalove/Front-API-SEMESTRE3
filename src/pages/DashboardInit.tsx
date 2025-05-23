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
  getDadosImportacaoEstados,
} from "@/services/dashboardService";

export default function DashboardInit() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
  };

  const dataDashboard = getDataDashboardProdutos();
  const currentData = dataDashboard.find((d) => d.year === selectedYear);
  const dadosExportacaoEstados = getDadosExportacaoEstados(selectedYear);
  const dadosImportacaoEstados = getDadosImportacaoEstados(selectedYear);

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
            <select
              value={selectedYear}
              onChange={handleYearChange}
              className="px-4 py-2 bg-transparent rounded-full border border-gray-300 text-[var(--color-foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            >
              {Array.from({ length: 11 }, (_, i) => 2014 + i).map((year) => (
                <option
                  key={year}
                  value={year.toString()}
                  className="text-black dark:text-black"
                >
                  {year}
                </option>
              ))}
            </select>

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
                  stroke: '#d1b3ff',
                  label: "Soja Importação",
                },
                {
                  dataKey: "soja_export",
                  stroke: '#b380ff',
                  label: "Soja Exportação",
                },
                {
                  dataKey: "ferro_import",
                  stroke: '#944dff',
                  label: "Ferro Importação",
                },
                {
                  dataKey: "ferro_export",
                  stroke: '#6600cc',
                  label: "Ferro Exportação",
                },
                {
                  dataKey: "oleo_import",
                  stroke: '#4d0099',
                  label: "Óleo Importação",
                },
                {
                  dataKey: "oleo_export",
                  stroke: '#330066',
                  label: "Óleo Exportação",
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <InfoCard
              title={`Saldo US$ Milhões (${selectedYear})`}
              value={
                currentData
                  ? (
                      currentData.soja_export +
                      currentData.ferro_export +
                      currentData.oleo_export -
                      currentData.soja_import -
                      currentData.ferro_import -
                      currentData.oleo_import
                    ).toLocaleString("pt-BR")
                  : "-"
              }
              icon="$"
            />
            <InfoCard
              title={`Importações US$ Milhões (${selectedYear})`}
              value={
                currentData
                  ? (
                      currentData.soja_import +
                      currentData.ferro_import +
                      currentData.oleo_import
                    ).toLocaleString("pt-BR")
                  : "-"
              }
              icon="📥"
            />
            <InfoCard
              title={`Exportações US$ Milhões (${selectedYear})`}
              value={
                currentData
                  ? (
                      currentData.soja_export +
                      currentData.ferro_export +
                      currentData.oleo_export
                    ).toLocaleString("pt-BR")
                  : "-"
              }
              icon="📤"
            />
          </div>
        </section>
        {/* Ranking de Importação por Estado */}
        <section className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
          <RankingTable
            title={`Ranking por Estado – Importações (${selectedYear})`}
            data={dadosImportacaoEstados}
            unit="US$"
          />
        </section>
        {/* Ranking de Exportação por Estado */}
        <section className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
          <RankingTable
            title={`Ranking por Estado – Exportações (${selectedYear})`}
            data={dadosExportacaoEstados}
            unit="US$"
          />
        </section>
      </main>
    </div>
  );
}
