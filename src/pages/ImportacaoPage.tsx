import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import PieChartComponent from "@/components/charts/PieChartComponent";
import RankingTableMunicipios from "@/components/tables/RankingTableMunicipios";
import RankingTableProdutos from "@/components/tables/RankingTableProdutos";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

export default function ImportacaoPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("São Paulo");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const dataImportacao = [
    { year: "2014", valorAgregado: 300, quilograma: 260 },
    { year: "2015", valorAgregado: 200, quilograma: 180 },
    { year: "2016", valorAgregado: 47366.16, quilograma: 260 },
    { year: "2017", valorAgregado: 390, quilograma: 300 },
    { year: "2018", valorAgregado: 500, quilograma: 360 },
    { year: "2019", valorAgregado: 530, quilograma: 400 },
  ];

  // Resetando o valor de busca ao carregar a página
  useEffect(() => {
    setSearchQuery(""); // Limpa o campo de pesquisa ao montar o componente
  }, []);

  return (
    <div className="flex min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      <main className="flex-1 p-10 space-y-8">
        {/* Topo com Título e Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="text-sm text-[var(--muted-foreground)]">Pages / Importação</p>
            <h2 className="text-4xl font-bold">Importação</h2>
          </div>

          <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
            <input
              type="text"
              placeholder="Buscar por estado"
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 bg-transparent rounded-full w-72 text-[var(--color-foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <button
              onClick={() => navigate("/exportacao")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-all"
            >
              Exportação
            </button>
            <button
              onClick={() => navigate("/importacao")}
              className="text-[var(--color-primary)] font-semibold"
            >
              Importação
            </button>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Gráfico de Linha e Pizza */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2 bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-2">Valor Agregado / Quilograma Líquido</h3>
            <LineChartComponent
              data={dataImportacao}
              xAxisKey="year"
              lines={[
                { dataKey: "valorAgregado", stroke: "#a855f7", label: "Valor Agregado" },
                { dataKey: "quilograma", stroke: "#7c3aed", label: "Quilograma Líquido" },
              ]}
            />
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold mb-4">Vias de Transporte</h3>
            <PieChartComponent />
            <div className="flex justify-around text-sm mt-4">
              <div className="text-center">
                <div className="font-bold text-[var(--color-foreground)]">Marítima</div>
                <div>63%</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-[var(--color-foreground)]">Aérea</div>
                <div>25%</div>
              </div>
            </div>
          </div>
        </section>

        {/* Cards de Info */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard title="Exportações US$ Milhões – 2024" value="71.406,5" icon="📤" />
          <InfoCard title="Importações US$ Milhões – 2024" value="75.882,4" icon="📥" />
          <InfoCard title="Saldo US$ Milhões – 2024" value="-4.475,9" icon="$" />
        </section>

        {/* Tabelas de Ranking */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Ranking – Municípios</h3>
              <span className="bg-[var(--color-muted)] text-sm px-2 py-1 rounded-md">2024</span>
            </div>
            <RankingTableMunicipios />
          </div>

          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Ranking – Produtos (2024)</h3>
              <button className="text-xl">⋯</button>
            </div>
            <RankingTableProdutos />
          </div>
        </section>
      </main>
    </div>
  );
}
