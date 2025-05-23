interface MunicipioData {
  municipio: string;
  valor: string;
}

interface RankingTableMunicipiosProps {
  titulo: string;
  data: MunicipioData[];
}

export default function RankingTableMunicipios({
  titulo,
  data,
}: RankingTableMunicipiosProps) {
  return (
    <div className="bg-[var(--color-card)] p-6 rounded-xl shadow-md">
      <h3 className="text-xl font-semibold mb-6">{titulo}</h3>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="text-[var(--muted-foreground)]">
            <th className="pb-2">MUNICÍPIO</th>
            <th className="pb-2">VALOR – US$ FOB</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={2} className="py-6 text-center italic text-gray-500">
                Nenhum dado disponível.
              </td>
            </tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="py-2">{row.municipio}</td>
                <td className="py-2">{row.valor}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
