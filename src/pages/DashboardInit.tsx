import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { estados } from "@/utils/estados.ts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function DashboardInit() {
  const navigate = useNavigate();
  const [selectedUF, setSelectedUF] = useState("SP");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [tipo, setTipo] = useState("exportacao");

  const handleRedirect = () => {
    navigate(`/${tipo}?estado=${selectedUF}&ano=${selectedYear}`);
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <main className="flex-1 p-6 md:p-10 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
              Dashboard Comercial
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Selecione os parâmetros para visualizar os dados
            </p>
          </div>
          <ThemeSwitcher />
        </div>

        <Card className="border-0 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg">Filtros</CardTitle>
            <CardDescription>
              Personalize sua análise selecionando estado, ano e tipo de
              operação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-6">
              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium leading-none">
                  Estado
                </label>
                <Select value={selectedUF} onValueChange={setSelectedUF}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {estados.map((estado) => (
                      <SelectItem key={estado.sigla} value={estado.sigla}>
                        {estado.nome}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium leading-none">Ano</label>
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um ano" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 11 }, (_, i) => 2014 + i).map(
                      (ano) => (
                        <SelectItem key={ano} value={ano.toString()}>
                          {ano}
                        </SelectItem>
                      ),
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex-1 space-y-2">
                <label className="text-sm font-medium leading-none">
                  Tipo de Operação
                </label>
                <ToggleGroup
                  type="single"
                  value={tipo}
                  onValueChange={setTipo}
                  className="grid grid-cols-2 gap-1 p-1 bg-muted rounded-lg"
                >
                  <ToggleGroupItem
                    value="exportacao"
                    className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-md"
                  >
                    Exportação
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="importacao"
                    className="data-[state=on]:bg-primary data-[state=on]:text-primary-foreground rounded-md"
                  >
                    Importação
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>

              <Button onClick={handleRedirect} className="h-10 md:h-auto">
                Visualizar Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Exportações</CardTitle>
              <CardDescription>Dados de comércio exterior</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Visualize gráficos e estatísticas sobre exportações brasileiras.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Importações</CardTitle>
              <CardDescription>Dados de comércio exterior</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Analise os principais produtos importados pelo Brasil.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">Comparativo</CardTitle>
              <CardDescription>Análise comparativa</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Compare dados entre estados ou períodos diferentes.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
