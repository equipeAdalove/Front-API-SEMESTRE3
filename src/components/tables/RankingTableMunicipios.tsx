const data = [
  { municipio: 'Santos – SP', valor: '6.681.393.984' },
  { municipio: 'São Paulo – SP', valor: '5.213.719.447' },
  { municipio: 'São Bernardo do Campo – SP', valor: '3.738.399.961' },
  { municipio: 'São José dos Campos – SP', valor: '3.680.199.856' },
  { municipio: 'Piracicaba – SP', valor: '3.159.969.189' },
  { municipio: 'Ilhabela – SP', valor: '2.618.590.901' },
];

export default function RankingTableMunicipios() {
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
