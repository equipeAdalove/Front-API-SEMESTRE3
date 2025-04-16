const dadosRanking = [
  { estado: "SP", exportacoes: 120000000 },
  { estado: "MG", exportacoes: 89000000 },
  { estado: "RJ", exportacoes: 76000000 },
  { estado: "RS", exportacoes: 54000000 },
  { estado: "PR", exportacoes: 47000000 },
];

export default function RankingTable() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Ranking por Estado (Exportações)</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[var(--color-card)] text-[var(--color-foreground)] rounded-xl overflow-hidden">
          <thead>
            <tr className="text-left bg-[var(--color-background)] border-b">
              <th className="py-2 px-4">UF</th>
              <th className="py-2 px-4">Exportações (US$)</th>
            </tr>
          </thead>
          <tbody>
            {dadosRanking.map((item, index) => (
              <tr key={index} className="border-b hover:bg-[var(--color-background)] transition">
                <td className="py-2 px-4 font-semibold">{item.estado}</td>
                <td className="py-2 px-4">${item.exportacoes.toLocaleString("pt-BR")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
