import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PieChartComponent from "@/components/charts/PieChartComponent";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

interface PieChartViasTransporteProps {
  tipo: "exportacao" | "importacao";
}

interface ViaData {
  name: string;
  value: number;
}

export default function PieChartViasTransporte({
  tipo,
}: PieChartViasTransporteProps) {
  const [searchParams] = useSearchParams();
  const estado = searchParams.get("estado") || "SP";
  const ano = searchParams.get("ano") || "2024";

  const [dados, setDados] = useState<ViaData[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/transporte/${tipo}/estado/${estado}/ano/${ano}`,
        );
        const json = await res.json();
        const formatado: ViaData[] = json.map((item: any) => ({
          name: item.no_via,
          value: Number(item.vl_fob),
        }));
        setDados(formatado);
      } catch (err) {
        console.error(err);
        setErro("Erro ao carregar os dados de transporte");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [estado, ano, tipo]);

  const cores = [
    "#8884d8",
    "#82ca9d",
    "#ffc658",
    "#ff7f50",
    "#00c49f",
    "#ffbb28",
    "#a29bfe",
    "#fab1a0",
    "#55efc4",
  ];

  const total = dados.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card className="border rounded-lg">
      <CardHeader className="bg-primary/5 px-6 py-4 border-b">
        <CardTitle className="text-lg font-semibold">
          Meios de Transporte –{" "}
          {tipo === "exportacao" ? "Exportação" : "Importação"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {loading ? (
          <Skeleton className="h-[240px] w-full rounded-lg" />
        ) : erro ? (
          <p className="text-destructive">{erro}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="w-full h-full">
              <PieChartComponent data={dados} colors={cores} height={240} />
            </div>
            <div className="space-y-3">
              {dados.map((item, index) => {
                const percentual = total ? (item.value / total) * 100 : 0;
                return (
                  <div
                    key={index}
                    className="flex justify-between items-center px-4 py-2 bg-muted/20 rounded-md"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {percentual.toFixed(1)}%
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      US$ {item.value.toLocaleString("pt-BR")}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
