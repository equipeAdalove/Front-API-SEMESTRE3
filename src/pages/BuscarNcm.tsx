import { Search } from "lucide-react";
import { useState } from "react";

// Interface do tipo de dado que será retornado na busca
interface ResultadoNCM {
  codigo: string;
  descricao: string;
}

export default function BuscarNcm() {
  // Estado para armazenar o texto digitado na busca
  const [busca, setBusca] = useState("");
  // Estado para guardar o resultado da busca
  const [resultado, setResultado] = useState<ResultadoNCM | null>(null);

  // Função chamada ao clicar no botão "Buscar"
  const handleBuscar = () => {
    // Simulação de resultado estático
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
    // Container principal da página com suporte a modo claro e escuro
    <main
      className="min-h-screen w-full p-6"
      style={{
        backgroundColor: "var(--color-background)", // Usando a variável de fundo do tema
        color: "var(--color-foreground)", // Usando a variável de texto
      }}
    >
      <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
        <div>
          <p className="text-sm text-gray-400">Pages / Buscar NCM</p>
          <h1 className="text-4xl font-bold"> Buscar NCM</h1>
        </div>

        {/* Container da barra de busca */}
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Digite o código NCM"
            className="w-full rounded-xl px-10 py-3"
            style={{
              backgroundColor: "var(--color-input)", // Cor de fundo do input
              color: "var(--color-foreground)", // Cor do texto
              borderColor: "var(--color-border)", // Cor da borda
            }}
            value={busca}
            onChange={(e) => setBusca(e.target.value)} // Atualiza o estado da busca
          />

          {/* Ícone da lupa posicionado no lado esquerdo do input */}
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2"
            style={{
              color: "var(--color-muted-foreground)", // Cor do ícone
            }}
            size={18}
          />

          {/* Botão "Buscar" posicionado à direita do input */}
          <button
            onClick={handleBuscar}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 rounded-lg text-sm"
            style={{
              backgroundColor: "var(--color-primary)", // Cor de fundo do botão
              color: "var(--color-primary-foreground)", // Cor do texto
            }}
          >
            Buscar
          </button>
        </div>
      </div>

      {/* Se houver resultado, exibe o card com as informações */}
      {resultado && (
        <div
          className="border rounded-xl p-6 shadow-md"
          style={{
            backgroundColor: "var(--color-card)", // Cor do card
            borderColor: "var(--color-border)", // Cor da borda do card
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

          {/* Linha com o resultado retornado */}
          <div className="flex justify-between text-lg font-medium">
            <span>{resultado.codigo}</span>
            <span>{resultado.descricao}</span>
          </div>
        </div>
      )}
    </main>
  );
}
