const data = [
  { name: 'Açúcares e Melaços', valor: 'US$ 11.600', variacao: '19,6%', participacao: '16%' },
  { name: 'Óleos combustíveis de petróleo ou...', valor: 'US$ 862', variacao: '18,6%', participacao: '8,9%' },
  { name: 'Sucos de Frutas ou de vegetais', valor: 'US$ 573', variacao: '40,6%', participacao: '5,9%' },
  { name: 'Demais produtos da indústria de...', valor: 'US$ 438', variacao: '-8,69%', participacao: '4,5%' },
  { name: 'Veículos automóveis de passageiros', valor: 'US$ 424', variacao: '28,4%', participacao: '4,4%' },
];

export default function RankingTableProdutos() {
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
            <td className="py-2">{row.variacao}</td>
            <td className="py-2">{row.participacao}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
