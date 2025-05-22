import React from "react";

type Produto = {
  name: string;
  valor: string; 
  variacao: string; 
  participacao: string; 
};

interface RankingTableProdutosProps {
  estado: string;
  ncm: string;
  titulo: string;
  data: Produto[];
}

const RankingTableProdutos: React.FC<RankingTableProdutosProps> = ({
  estado,
  ncm,
  titulo,
  data,
}) => {
  return (
    <div className="bg-[var(--color-card)] p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-6">{titulo}</h3>

      <table className="w-full text-left text-sm md:text-base">
        <thead className="text-[var(--muted-foreground)] border-b border-gray-300">
          <tr>
            <th scope="col" className="pb-3 px-2">
              NOME
            </th>
            <th scope="col" className="pb-3 px-2">
              VALOR FOB (US$ Milhões)
            </th>
            <th scope="col" className="pb-3 px-2">
              VARIAÇÃO
            </th>
            <th scope="col" className="pb-3 px-2">
              PARTICIPAÇÃO
            </th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={4} className="py-6 text-center italic text-gray-500">
                Nenhum dado disponível para {estado} - NCM {ncm}.
              </td>
            </tr>
          ) : (
            data.map((produto, idx) => (
              <tr
                key={produto.name + idx}
                className="border-b last:border-b-0 hover:bg-[var(--color-muted-background)] transition-colors"
              >
                <td className="py-3 px-2 font-medium">{produto.name}</td>
                <td className="py-3 px-2">{produto.valor}</td>
                <td
                  className={`py-3 px-2 font-semibold ${
                    produto.variacao.startsWith("-")
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {produto.variacao}
                </td>
                <td className="py-3 px-2">{produto.participacao}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default RankingTableProdutos;
