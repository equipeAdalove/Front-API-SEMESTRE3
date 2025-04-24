interface MunicipioData {
  municipio: string;
  valor: string;
}

interface RankingTableMunicipiosProps {
  data: MunicipioData[];
}

export default function RankingTableMunicipios({ data }: RankingTableMunicipiosProps) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="text-[var(--muted-foreground)]">
          <th className="pb-2">MUNICÍPIO</th>
          <th className="pb-2">VALOR – US$ FOB</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <tr key={idx} className="border-t border-gray-200">
            <td className="py-2">{row.municipio}</td>
            <td className="py-2">{row.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
