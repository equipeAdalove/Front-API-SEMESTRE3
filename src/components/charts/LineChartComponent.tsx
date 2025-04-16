import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

interface LineChartComponentProps {
  data: any[]; // Dados flexíveis
  lines: {
    dataKey: string;
    stroke: string;
    label: string;
  }[]; // Para criar múltiplas linhas com cores e nomes
  xAxisKey: string; // Para definir o eixo X (ex: 'name', 'year')
  height?: number; // Altura customizável do gráfico
}

export default function LineChartComponent({
  data,
  lines,
  xAxisKey,
  height = 250,
}: LineChartComponentProps) {
  return (
    <div className="w-full" style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey={xAxisKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              name={line.label}
              stroke={line.stroke}
              strokeWidth={2}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
