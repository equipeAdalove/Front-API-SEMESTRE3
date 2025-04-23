import { Search } from "lucide-react";
import { useState } from "react";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher"; // certifique-se de que o caminho está correto

// Interface do tipo de dado que será retornado na busca
interface ResultadoNCM {
  codigo: string;
  descricao: string;
}

export default function BuscarNcm() {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState<ResultadoNCM | null>(null);

  const handleBuscar = () => {
    if (busca === "491110") {
      setResultado({
        codigo: "491110",
        descricao:
          "Impressos publicitários, catálogos comerciais e semelhantes",
      });
    } else {
      setResultado(null);
    }
  };

  return (
    <main
      className="min-h-screen w-full p-6"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        {/* Título e breadcrumb */}
        <div className="mt-5 px-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            Pages / Buscar NCM
          </p>
          <h1 className="text-4xl font-bold">Buscar NCM</h1>
        </div>

        {/* Container da barra de busca + ThemeSwitcher */}
        <div className="flex items-center gap-2 bg-[var(--color-input)] px-4 py-2 rounded-xl shadow-md w-full max-w-lg">
          <Search className="text-[var(--color-muted-foreground)]" size={18} />

          <input
            type="text"
            placeholder="Digite o código NCM"
            className="flex-1 bg-transparent focus:outline-none text-[var(--color-foreground)] placeholder-[var(--color-muted-foreground)]"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <button
            onClick={handleBuscar}
            className="px-4 py-1 rounded-lg text-sm"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
            }}
          >
            Buscar
          </button>

          {/* Theme Switcher dentro do container */}
          <div className="ml-1">
            <ThemeSwitcher />
          </div>
        </div>
      </div>

      {/* Exibição de resultado */}
      {resultado && (
        <div
          className="border rounded-xl p-6 shadow-md"
          style={{
            backgroundColor: "var(--color-card)",
            borderColor: "var(--color-border)",
          }}
        >
          <h2
            className="text-xl font-semibold mb-2"
            style={{ color: "var(--color-foreground)" }}
          >
            Nomenclatura Comum do Mercosul (NCM)
          </h2>
          <div
            className="flex justify-between text-sm text-gray-400 border-b pb-2 mb-2"
            style={{ borderColor: "var(--color-border)" }}
          >
            <span>CÓDIGO</span>
            <span>MERCADORIA</span>
          </div>

          <div className="flex justify-between text-lg font-medium">
            <span>{resultado.codigo}</span>
            <span>{resultado.descricao}</span>
          </div>
        </div>
      )}
    </main>
  );
}
