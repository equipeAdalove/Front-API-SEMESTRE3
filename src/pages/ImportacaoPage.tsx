import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import PieChartComponent from "@/components/charts/PieChartComponent";
import RankingTableMunicipios from "@/components/tables/RankingTableMunicipios";
import RankingTableProdutos from "@/components/tables/RankingTableProdutos";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

export default function ImportacaoPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("São Paulo");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const dataImportacao = [
    { year: "2014", valorAgregado: 32000, quilograma: 260 },
    { year: "2015", valorAgregado: 18000, quilograma: 220 },
    { year: "2016", valorAgregado: 47000, quilograma: 210 },
    { year: "2017", valorAgregado: 25000, quilograma: 310 },
    { year: "2018", valorAgregado: 60000, quilograma: 280 },
    { year: "2019", valorAgregado: 42000, quilograma: 430 },
    { year: "2020", valorAgregado: 70000, quilograma: 390 },
    { year: "2021", valorAgregado: 30000, quilograma: 500 },
    { year: "2022", valorAgregado: 65000, quilograma: 250 },
  ];

  const pieData = [
    { name: "Marítima", value: 52 },
    { name: "Rodoviária", value: 33 },
    { name: "Aérea", value: 9 },
    { name: "Fluvial", value: 4 },
    { name: "Ferroviária", value: 2 },
  ];

  const COLORS = ["#FF6347", "#6A5ACD", "#20B2AA", "#FFD700", "#8A2BE2"]; // Definindo cores para o gráfico de pizza

  const municipiosData = [
    { municipio: "Uberlândia – MG", valor: "4.789.456.123" },
    { municipio: "Belo Horizonte – MG", valor: "4.203.112.870" },
    { municipio: "Contagem – MG", valor: "3.865.900.543" },
    { municipio: "Betim – MG", valor: "3.441.777.210" },
    { municipio: "Juiz de Fora – MG", valor: "2.992.311.407" },
    { municipio: "Montes Claros – MG", valor: "2.478.908.152" },
  ];

  const dadosProdutos = [
    {
      name: "Soja em grãos",
      valor: "US$ 28.300",
      variacao: "12,5%",
      participacao: "22%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 21.500",
      variacao: "9,8%",
      participacao: "16,7%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.780",
      variacao: "-3,4%",
      participacao: "4,5%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.900",
      variacao: "6,1%",
      participacao: "6,1%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.200",
      variacao: "15,2%",
      participacao: "4,8%",
    },
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
              className={`font-semibold ${location.pathname === "/importacao"
                ? "text-[var(--color-primary)] underline underline-offset-4"
                : "text-[var(--color-muted-foreground)]"
                }`}
            >
              Importação
            </button>
            <button
              onClick={() => navigate("/exportacao")}
              className={`font-semibold ${location.pathname === "/exportacao"
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

          <div className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">
                Ranking – Produtos (2024)
              </h3>
              <button className="text-xl">⋯</button>
            </div>
            <RankingTableProdutos data={dadosProdutos} />
          </div>
        </section>
      </main>
    </div>
  );
}
