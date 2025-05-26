import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LineChartComponent from "../components/charts/LineChartComponent";
import InfoCard from "../components/cards/InfoCard";
import ThemeSwitcher from "../components/theme-provider/ButtonThemeSwitcher";

import TabelasAuxiliaresExportacao from "@/components/tables/TabelasAuxiliaresExportacao";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import PieChartViasTransporte from "@/components/charts/PieChartViasTransporte";

export default function ExportacaoPage() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const estado = params.get("estado") || "SP";
  const anoURL = params.get("ano") || "2024";
  const [ano, setAno] = useState(anoURL);

  const [vaTipo, setVaTipo] = useState("va_kg_export");
  const [chartData, setChartData] = useState<any[]>([]);
  const [diferencaData, setDiferencaData] = useState<any[]>([]);
  const [resumoAno, setResumoAno] = useState<any>(null);
  const [resumoTotal, setResumoTotal] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/estado/${estado}/valor-agregado`,
        );
        const json = await res.json();

        const format = (obj: any) =>
          Object.entries(obj || {})
            .filter(([ano]) => ano !== "ALL")
            .map(([ano, valor]) => ({ year: ano, valorAgregado: valor }));

        setChartData(format(json[vaTipo]));
        setDiferencaData(format(json.va_diferenca_export_import));
      } catch (err) {
        setError("Erro ao carregar os dados da API.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [estado, vaTipo]);

  useEffect(() => {
    const fetchResumo = async () => {
      try {
        const resAno = await fetch(
          `http://localhost:3000/estado/${estado}/ano/${ano}`,
        );
        const resTotal = await fetch(
          `http://localhost:3000/estado/${estado}/total`,
        );
        const jsonAno = await resAno.json();
        const jsonTotal = await resTotal.json();
        setResumoAno(jsonAno);
        setResumoTotal(jsonTotal);
      } catch (err) {
        console.error("Erro ao buscar resumo", err);
      }
    };

    fetchResumo();
  }, [estado, ano]);

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 space-y-8 w-full max-w-none">
        {/* Header com botão de Importação */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              Pages / Exportação
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
              Exportação - <span className="text-primary">{estado}</span>
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() =>
                navigate(`/importacao?estado=${estado}&ano=${ano}`)
              }
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium flex items-center gap-2"
            >
              <span>Ir para Importação</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            </button>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Filtros */}
        <div className="bg-muted/10 p-4 rounded-lg border space-y-4">
          <div className="flex flex-col md:flex-row gap-4 md:items-center">
            {/* Seletor de Ano */}
            <div className="flex items-center gap-2">
              <Label
                htmlFor="year-select"
                className="whitespace-nowrap font-medium"
              >
                Ano
              </Label>
              <Select
                value={ano}
                onValueChange={(value) => {
                  setAno(value);
                  navigate(`/exportacao?estado=${estado}&ano=${value}`);
                }}
              >
                <SelectTrigger id="year-select" className="w-[120px]">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 11 }, (_, i) => 2014 + i).map((a) => (
                    <SelectItem key={a} value={a.toString()}>
                      {a}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Seletor de Tipo de Valor */}
          <div className="flex flex-col gap-6">
            <Label className="font-medium mt-6">Valor Agregado</Label>
            <div className="flex gap-4">
              <button
                onClick={() => setVaTipo("va_kg_export")}
                className={`px-4 py-2 rounded-md transition-colors font-medium ${
                  vaTipo === "va_kg_export"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                VA por KG
              </button>
              <button
                onClick={() => setVaTipo("va_unidade_export")}
                className={`px-4 py-2 rounded-md transition-colors font-medium ${
                  vaTipo === "va_unidade_export"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                VA por Unidade
              </button>
            </div>
          </div>
        </div>

        {/* Resto do código permanece igual */}
        {loading ? (
          <div className="space-y-6">
            <Skeleton className="h-64 w-full rounded-lg" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Skeleton className="h-32 rounded-lg" />
              <Skeleton className="h-32 rounded-lg" />
              <Skeleton className="h-32 rounded-lg" />
            </div>
          </div>
        ) : error ? (
          <Card className="border-destructive/50 bg-destructive/10">
            <CardHeader>
              <CardTitle className="text-destructive">Erro</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-destructive">{error}</p>
            </CardContent>
          </Card>
        ) : (
          <>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border rounded-lg">
                <CardHeader className="bg-primary/5 px-6 py-4 border-b">
                  <CardTitle className="text-lg font-semibold">
                    Valor Agregado – Exportação
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <LineChartComponent
                    data={chartData}
                    xAxisKey="year"
                    lines={[
                      {
                        dataKey: "valorAgregado",
                        stroke: "#8b5cf6", // Roxo
                        label: vaTipo.includes("kg") ? "VA/KG" : "VA/Unidade",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
              <Card className="border rounded-lg">
                <CardHeader className="bg-primary/5 px-6 py-4 border-b">
                  <CardTitle className="text-lg font-semibold">
                    Diferença VA Exportação - Importação
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <LineChartComponent
                    data={diferencaData}
                    xAxisKey="year"
                    lines={[
                      {
                        dataKey: "valorAgregado",
                        stroke: "#8b5cf6", // Roxo
                        label: "Diferença",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </section>

            <PieChartViasTransporte tipo="exportacao" />

            {resumoAno && resumoTotal && (
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <InfoCard
                  title={`FOB Exportação (${ano})`}
                  value={`US$ ${Number(resumoAno.vl_fob_exp).toLocaleString("pt-BR")}`}
                  icon="📤"
                  className="bg-primary/5"
                />
                <InfoCard
                  title={`FOB Importação (${ano})`}
                  value={`US$ ${Number(resumoAno.vl_fob_imp).toLocaleString("pt-BR")}`}
                  icon="📥"
                  className="bg-primary/5"
                />
                <InfoCard
                  title={`KG Líquido Exportado (${ano})`}
                  value={Number(resumoAno.kg_liquido_exp).toLocaleString(
                    "pt-BR",
                  )}
                  icon="⚖️"
                  className="bg-primary/5"
                />
              </section>
            )}

            <Card className="border rounded-lg">
              <CardHeader className="bg-primary/5 px-6 py-4 border-b">
                <CardTitle className="text-lg font-semibold">
                  Tabelas Auxiliares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TabelasAuxiliaresExportacao />
              </CardContent>
            </Card>
          </>
        )}
      </main>
    </div>
  );
}
