type Produto = {
  name: string;
  valor: string;
  variacao: string;
  participacao: string;
};

interface RankingTableProdutosProps {
  data: Produto[];
}

export default function RankingTableProdutos({ data }: RankingTableProdutosProps) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="text-[var(--muted-foreground)]">
          <th className="pb-2">NOME</th>
          <th className="pb-2">VALOR FOB (US$ Milhões)</th>
          <th className="pb-2">VARIAÇÃO</th>
          <th className="pb-2">PARTICIPAÇÃO</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-t border-gray-200">
            <td className="py-2">{row.name}</td>
            <td className="py-2">{row.valor}</td>
            <td className={`py-2 ${row.variacao.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
              {row.variacao}
            </td>
            <td className="py-2">{row.participacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
