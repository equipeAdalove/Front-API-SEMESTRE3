import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import RankingTable from "@/components/tables/RankingTable";

export default function DashboardInit() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // Dados do gráfico
  const dataDashboard = [
    { year: "2019", ProdutoA: 5000, ProdutoB: 6000 },
    { year: "2020", ProdutoA: 5500, ProdutoB: 6500 },
    { year: "2021", ProdutoA: 6200, ProdutoB: 7000 },
    { year: "2022", ProdutoA: 5900, ProdutoB: 7400 },
    { year: "2023", ProdutoA: 6400, ProdutoB: 7500 },
    { year: "2024", ProdutoA: 7000, ProdutoB: 8000 },
  ];

  return (
    <div className="flex min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <main className="flex-1 p-10 space-y-8">
        {/* Topo com Título e Navbar */}
        <div className="flex justify-between items-center mb-6">
          {/* Título */}
          <div>
            <p className="text-sm text-[var(--muted-foreground)]">Pages / Dashboard</p>
            <h2 className="text-4xl font-bold">Dashboard</h2>
          </div>

          {/* Navbar com Busca e Botões */}
          <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
            <input
              type="text"
              placeholder="Buscar por estado"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 bg-transparent rounded-full w-72 text-[var(--color-foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <button
              onClick={() => navigate("/importacao")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] focus:outline-none transition-all duration-200"
            >
              Importação
            </button>
            <button
              onClick={() => navigate("/exportacao")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] focus:outline-none transition-all duration-200"
            >
              Exportação
            </button>
          </div>
        </div>

        {/* Gráfico de Linha e Cards */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Gráfico de Valor Agregado */}
          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-[var(--color-foreground)]">Comparação de Produtos</h3>
            <LineChartComponent
              data={dataDashboard}
              xAxisKey="year"
              lines={[
                { dataKey: "ProdutoA", stroke: "#7e22ce", label: "Produto A" },
                { dataKey: "ProdutoB", stroke: "#4c51bf", label: "Produto B" },
              ]}
            />
          </div>

          {/* Cards com Dados Principais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <InfoCard title="Saldo US$ Milhões (2024)" value="74.176,4" icon="$" />
            <InfoCard title="Importações US$ Milhões (2024)" value="262.869,6" icon="📥" />
            <InfoCard title="Exportações US$ Milhões (2024)" value="337.046" icon="📤" />
          </div>
        </section>

        {/* Tabela Ranking UF */}
        <section className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
          <RankingTable />
        </section>
      </main>
    </div>
  );
}
