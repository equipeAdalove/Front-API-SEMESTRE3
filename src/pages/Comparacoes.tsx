import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import {
  buscarNcm,
  buscarDadosComparacao,
  buscarInfoCard,
} from "@/services/comparacoesService";
import { color } from "framer-motion";

const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const ComparacoesPage = () => {
  const navigate = useNavigate();

  const [estadoA, setEstadoA] = useState("São Paulo");
  const [estadoB, setEstadoB] = useState("Rio de Janeiro");
  const [ncmBusca, setNcmBusca] = useState("");
  const [ncmResultado, setNcmResultado] = useState<{
    codigo: string;
    descricao: string;
  } | null>(null);

  const [dadosComparacao, setDadosComparacao] = useState<
    { year: string; A: number; B: number }[]
  >([]);

  // Novo estado para tipo de comércio
  const [tipoComercio, setTipoComercio] = useState<"exportacao" | "importacao">(
    "exportacao"
  );

  // Quando clicar em buscar NCM
  const handleBuscarNCM = () => {
    const ncm = buscarNcm(ncmBusca);
    if (ncm) {
      setNcmResultado(ncm);
    } else {
      setNcmResultado(null);
      setDadosComparacao([]);
    }
  };

  // Atualiza dados do gráfico toda vez que muda estado, NCM selecionado ou tipo de comércio
  useEffect(() => {
    if (ncmResultado) {
      const dados = buscarDadosComparacao(
        ncmResultado.codigo,
        estadoA,
        estadoB,
        tipoComercio // Passa o filtro para a busca
      );
      setDadosComparacao(dados);
    } else {
      setDadosComparacao([]);
    }
  }, [estadoA, estadoB, ncmResultado, tipoComercio]);

  // Busca infoCard para estadoA e estadoB
  const infoCardA = ncmResultado
    ? buscarInfoCard(ncmResultado.codigo, estadoA)
    : null;
  const infoCardB = ncmResultado
    ? buscarInfoCard(ncmResultado.codigo, estadoB)
    : null;

  return (
    <div>
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mt-12 mb-12 flex-wrap gap-4 px-10">
        <div className="-mt-2">
          <p className="text-sm text-[var(--muted-foreground)]">
            Pages / Comparações
          </p>
          <h1 className="text-4xl font-bold">Comparações</h1>
        </div>
      </div>

      {/* Seletores, filtro de tipo e busca de NCM */}
      <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg mb-5 flex-wrap gap-4 justify-center">
        {/* Filtro Exportação / Importação */}
        <div className="flex items-center space-x-2 bg-[var(--color-card)] rounded-full px-3 py-1 shadow-inner select-none cursor-pointer">
          <label
            className={`px-4 py-1 rounded-full ${
              tipoComercio === "exportacao"
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--muted-foreground)]"
            }`}
          >
            <input
              type="radio"
              name="tipoComercio"
              value="exportacao"
              checked={tipoComercio === "exportacao"}
              onChange={() => setTipoComercio("exportacao")}
              className="hidden"
            />
            Exportação
          </label>
          <label
            className={`px-4 py-1 rounded-full ${
              tipoComercio === "importacao"
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--muted-foreground)]"
            }`}
          >
            <input
              type="radio"
              name="tipoComercio"
              value="importacao"
              checked={tipoComercio === "importacao"}
              onChange={() => setTipoComercio("importacao")}
              className="hidden"
            />
            Importação
          </label>
        </div>

        {/* Select Estado A */}
        <select
          className="bg-transparent rounded-lg px-4 py-2 text-[var(--color-foreground)] focus:outline-none"
          value={estadoA}
          onChange={(e) => setEstadoA(e.target.value)}
        >
          {estados.map((estado) => (
            <option
              key={estado}
              value={estado}
              className="text-[var(--color-foreground)]"
            >
              {estado}
            </option>
          ))}
        </select>

        <span className="text-[var(--muted-foreground)] font-semibold">vs</span>

        {/* Select Estado B */}
        <select
          className="bg-transparent rounded-lg px-4 py-2 text-[var(--color-foreground)] focus:outline-none"
          value={estadoB}
          onChange={(e) => setEstadoB(e.target.value)}
        >
          {estados.map((estado) => (
            <option
              key={estado}
              value={estado}
              className="text-[var(--color-foreground)]"
            >
              {estado}
            </option>
          ))}
        </select>

        {/* Busca NCM */}
        <div className="flex items-center space-x-2 ml-4">
          <Search className="text-[var(--color-muted-foreground)]" size={18} />
          <input
            type="text"
            placeholder="Código NCM"
            className="px-3 py-1 bg-transparent rounded-full w-40 text-[var(--color-foreground)] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            value={ncmBusca}
            onChange={(e) => setNcmBusca(e.target.value)}
          />
          <button
            onClick={handleBuscarNCM}
            className="text-sm px-3 py-1 rounded-lg"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "#fff",
            }}
          >
            Buscar
          </button>
        </div>
        <ThemeSwitcher />
      </div>

      {/* Resultado da busca */}
      {ncmResultado && (
        <div
          className="border rounded-xl p-6 shadow-md mx-10 mb-10"
          style={{
            backgroundColor: "var(--color-card)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2 className="text-xl font-semibold mb-2">NCM Encontrado</h2>
          <div className="flex justify-between text-sm text-gray-400 border-b pb-2 mb-2">
            <span>Código</span>
            <span>Descrição</span>
          </div>
          <div className="flex justify-between text-lg font-medium">
            <span>{ncmResultado.codigo}</span>
            <span>{ncmResultado.descricao}</span>
          </div>
        </div>
      )}

      {/* Gráfico comparativo */}
      <section className="bg-[var(--color-card)] p-6 rounded-2xl shadow-md mx-10 mb-10">
        <h3 className="text-xl font-semibold mb-4">
          {tipoComercio === "exportacao" ? "Exportações" : "Importações"} de{" "}
          {estadoA} vs {estadoB} ({ncmResultado?.codigo ?? ""}) (2014–2024)
        </h3>
        <LineChartComponent
          data={dadosComparacao}
          xAxisKey="year"
          lines={[
            { dataKey: "A", stroke: "#9B7EBD", label: estadoA },
            { dataKey: "B", stroke: "#8471FF", label: estadoB },
          ]}
        />
      </section>

      {/* Cards informativos */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 mb-10">
        <InfoCard
          title={`${
            tipoComercio === "exportacao" ? "Exportações" : "Importações"
          } totais – ${estadoA}`}
          value={`US$ ${
            infoCardA
              ? tipoComercio === "exportacao"
                ? infoCardA.exportacoesTotais.toLocaleString()
                : infoCardA.importacoesTotais?.toLocaleString() ?? "0"
              : "0"
          },00`}
          icon="📦"
        />
        <InfoCard
          title={`${
            tipoComercio === "exportacao" ? "Exportações" : "Importações"
          } totais – ${estadoB}`}
          value={`US$ ${
            infoCardB
              ? tipoComercio === "exportacao"
                ? infoCardB.exportacoesTotais.toLocaleString()
                : infoCardB.importacoesTotais?.toLocaleString() ?? "0"
              : "0"
          },00`}
          icon="📦"
        />
        <InfoCard
          title="Produto em destaque"
          value={infoCardA?.produtoDestaque ?? "-"}
          icon="🌾"
        />
      </section>
    </div>
  );
};

export default ComparacoesPage;
