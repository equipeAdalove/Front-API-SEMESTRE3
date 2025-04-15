import { Search } from "lucide-react";
import { useState } from "react";

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
        descricao: "Impressos publicitários, catálogos comerciais e semelhantes",
      });
    } else {
      setResultado(null);
    }
  };

  return (
    <main className="min-h-screen w-full p-6 bg-inherit text-inherit">
   <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
 <div>
            <p className="text-sm text-gray-400">Pages / Buscar NCM</p>
            <h1 className="text-4xl font-bold">Buscar NCM</h1>
          </div>
 <div className="relative w-full max-w-lg">

    <input
      type="text"
      placeholder="Digite o código NCM"
      className="w-full rounded-xl px-10 py-3 bg-gray-100 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-[#1B1D36] dark:text-white dark:border-[#2A2D4E]"
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
    />
    <Search
      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      size={18}
    />
    <button
      onClick={handleBuscar}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-1 rounded-lg text-sm"
    >
      Buscar
    </button>
  </div>
</div>


      {resultado && (
        <div className="bg-gray-100 border border-gray-300 rounded-xl p-6 shadow-md dark:bg-[#1B1D36] dark:border-[#2A2D4E]">
          <h2 className="text-xl font-semibold mb-2">
            Nomenclatura Comum do Mercosul (NCM)
          </h2>
          <div className="flex justify-between text-sm text-gray-400 border-b border-gray-300 dark:border-gray-700 pb-2 mb-2">
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
