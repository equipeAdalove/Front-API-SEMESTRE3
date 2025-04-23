interface RankingTableProps {
  title: string;
  data: { label: string; value: number }[];
  unit?: string;
}

const estadoMap: Record<string, string> = {
  SP: "São Paulo",
  MG: "Minas Gerais",
  RJ: "Rio de Janeiro",
  RS: "Rio Grande do Sul",
  PR: "Paraná",
};

export default function RankingTable({ title, data, unit = "US$" }: RankingTableProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const getMedal = (index: number) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return "";
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[var(--color-card)] text-[var(--color-foreground)] rounded-xl overflow-hidden">
          <thead>
            <tr className="text-left bg-[var(--color-background)] border-b">
              <th className="py-2 px-4">🏅</th>
              <th className="py-2 px-4">Estado</th>
              <th className="py-2 px-4">Valor ({unit})</th>
              <th className="py-2 px-4">Participação</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              const share = (item.value / total) * 100;

              return (
                <tr key={index} className="border-b hover:bg-[var(--color-background)] transition">
                  <td className="py-2 px-4">{getMedal(index)}</td>
                  <td className="py-2 px-4 font-semibold">
                    {estadoMap[item.label] || item.label} ({item.label})
                  </td>
                  <td className="py-2 px-4">
                    {unit} {item.value.toLocaleString("pt-BR")}
                  </td>
                  <td className="py-2 px-4 w-40">
                    <div className="flex items-center gap-2">
                      <div className="w-full bg-gray-700 h-2 rounded">
                        <div
                          className="bg-purple-500 h-2 rounded"
                          style={{ width: `${share}%` }}
                        />
                      </div>
                      <span className="text-sm">{share.toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
