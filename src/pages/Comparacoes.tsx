import { useState, useEffect } from "react";
import LineChartComponent from "@/components/charts/LineChartComponent";
import InfoCard from "@/components/cards/InfoCard";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const ufMap: Record<string, string> = {
  Acre: "AC",
  Alagoas: "AL",
  Amapá: "AP",
  Amazonas: "AM",
  Bahia: "BA",
  Ceará: "CE",
  "Distrito Federal": "DF",
  "Espírito Santo": "ES",
  Goiás: "GO",
  Maranhão: "MA",
  "Mato Grosso": "MT",
  "Mato Grosso do Sul": "MS",
  "Minas Gerais": "MG",
  Pará: "PA",
  Paraíba: "PB",
  Paraná: "PR",
  Pernambuco: "PE",
  Piauí: "PI",
  "Rio de Janeiro": "RJ",
  "Rio Grande do Norte": "RN",
  "Rio Grande do Sul": "RS",
  Rondônia: "RO",
  Roraima: "RR",
  "Santa Catarina": "SC",
  "São Paulo": "SP",
  Sergipe: "SE",
  Tocantins: "TO",
};

const ComparacoesPage = () => {
  const [estadoA, setEstadoA] = useState("São Paulo");
  const [estadoB, setEstadoB] = useState("Rio de Janeiro");
  const [anoSelecionado, setAnoSelecionado] = useState(2024);
  const [tipoComercio, setTipoComercio] = useState<"exportacao" | "importacao">(
    "exportacao",
  );
  const [tipoValor, setTipoValor] = useState<"vl_fob" | "kg_liquido">("vl_fob");
  const [dadosGrafico, setDadosGrafico] = useState<any[]>([]);
  const [cards, setCards] = useState({ A: 0, B: 0 });

  const anos = Array.from({ length: 2024 - 2014 + 1 }, (_, i) => 2014 + i);

  useEffect(() => {
    const fetchData = async () => {
      const promises = anos.map(async (ano) => {
        const resA = await fetch(
          `http://localhost:3000/estado/${ufMap[estadoA]}/ano/${ano}`,
        ).then((res) => res.json());
        const resB = await fetch(
          `http://localhost:3000/estado/${ufMap[estadoB]}/ano/${ano}`,
        ).then((res) => res.json());

        const valorA =
          tipoValor === "vl_fob"
            ? tipoComercio === "exportacao"
              ? Number(resA.vl_fob_exp)
              : Number(resA.vl_fob_imp)
            : tipoComercio === "exportacao"
              ? Number(resA.kg_liquido_exp)
              : Number(resA.kg_liquido_imp);

        const valorB =
          tipoValor === "vl_fob"
            ? tipoComercio === "exportacao"
              ? Number(resB.vl_fob_exp)
              : Number(resB.vl_fob_imp)
            : tipoComercio === "exportacao"
              ? Number(resB.kg_liquido_exp)
              : Number(resB.kg_liquido_imp);

        return {
          year: ano.toString(),
          A: valorA,
          B: valorB,
        };
      });

      const result = await Promise.all(promises);
      setDadosGrafico(result);
    };

    fetchData();
  }, [estadoA, estadoB, tipoComercio, tipoValor]);

  useEffect(() => {
    const fetchCards = async () => {
      const resA = await fetch(
        `http://localhost:3000/estado/${ufMap[estadoA]}/ano/${anoSelecionado}`,
      ).then((res) => res.json());
      const resB = await fetch(
        `http://localhost:3000/estado/${ufMap[estadoB]}/ano/${anoSelecionado}`,
      ).then((res) => res.json());

      const valorA =
        tipoValor === "vl_fob"
          ? tipoComercio === "exportacao"
            ? Number(resA.vl_fob_exp)
            : Number(resA.vl_fob_imp)
          : tipoComercio === "exportacao"
            ? Number(resA.kg_liquido_exp)
            : Number(resA.kg_liquido_imp);

      const valorB =
        tipoValor === "vl_fob"
          ? tipoComercio === "exportacao"
            ? Number(resB.vl_fob_exp)
            : Number(resB.vl_fob_imp)
          : tipoComercio === "exportacao"
            ? Number(resB.kg_liquido_exp)
            : Number(resB.kg_liquido_imp);

      setCards({ A: valorA, B: valorB });
    };

    fetchCards();
  }, [estadoA, estadoB, tipoComercio, tipoValor, anoSelecionado]);

  const unidade = tipoValor === "vl_fob" ? "US$" : "kg";

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center mt-12 mb-12 flex-wrap gap-4">
        <div className="-mt-2">
          <p className="text-sm text-muted-foreground">Pages / Comparações</p>
          <h1 className="text-4xl font-bold">Comparações</h1>
        </div>
      </div>

      {/* Seção de Filtros - Reorganizada */}
      <div className="bg-card rounded-2xl p-6 shadow-lg mb-6">
        <div className="flex flex-col gap-6">
          {/* Primeira linha - Tipo de Comércio e Valor */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="space-y-2 w-full md:w-auto">
              <Label className="font-medium">Tipo de Comércio</Label>
              <div className="flex bg-muted/20 p-1 rounded-lg">
                {["exportacao", "importacao"].map((tipo) => (
                  <button
                    key={tipo}
                    onClick={() => setTipoComercio(tipo as any)}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      tipoComercio === tipo
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:bg-muted/30"
                    }`}
                  >
                    {tipo === "exportacao" ? "Exportação" : "Importação"}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 w-full md:w-auto">
              <Label className="font-medium">Tipo de Valor</Label>
              <div className="flex bg-muted/20 p-1 rounded-lg">
                {["vl_fob", "kg_liquido"].map((tipo) => (
                  <button
                    key={tipo}
                    onClick={() => setTipoValor(tipo as any)}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                      tipoValor === tipo
                        ? "bg-primary text-primary-foreground shadow"
                        : "text-muted-foreground hover:bg-muted/30"
                    }`}
                  >
                    {tipo === "vl_fob" ? "Valor FOB" : "KG Líquido"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Segunda linha - Estados e Ano */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex flex-col md:flex-row gap-4 items-center w-full">
              <div className="space-y-2 w-full md:w-[240px] my-8">
                <Label className="font-medium">Estado A</Label>
                <Select value={estadoA} onValueChange={setEstadoA}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {estados.map((e) => (
                      <SelectItem key={e} value={e}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <span className="text-muted-foreground font-semibold mt-6 md:mt-0">
                vs
              </span>

              <div className="space-y-2 w-full md:w-[240px]">
                <Label className="font-medium">Estado B</Label>
                <Select value={estadoB} onValueChange={setEstadoB}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um estado" />
                  </SelectTrigger>
                  <SelectContent>
                    {estados.map((e) => (
                      <SelectItem key={e} value={e}>
                        {e}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 w-full md:w-[120px]">
                <Label className="font-medium">Ano</Label>
                <Select
                  value={anoSelecionado.toString()}
                  onValueChange={(value) => setAnoSelecionado(Number(value))}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    {anos.map((a) => (
                      <SelectItem key={a} value={a.toString()}>
                        {a}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="md:ml-auto mt-4 md:mt-0">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>

      {/* Resto do código permanece igual */}
      <section className="bg-card p-6 rounded-2xl shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">
          {tipoComercio === "exportacao" ? "Exportações" : "Importações"} de{" "}
          {estadoA} vs {estadoB} (2014–2024)
        </h3>
        <LineChartComponent
          data={dadosGrafico}
          xAxisKey="year"
          lines={[
            { dataKey: "A", stroke: "#8b5cf6", label: estadoA },
            { dataKey: "B", stroke: "#7c3aed", label: estadoB },
          ]}
        />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <InfoCard
          title={`${tipoComercio === "exportacao" ? "Exportações" : "Importações"} – ${estadoA} (${anoSelecionado})`}
          value={`${unidade} ${cards.A.toLocaleString()}`}
          icon="📦"
          className="bg-primary/5"
        />
        <InfoCard
          title={`${tipoComercio === "exportacao" ? "Exportações" : "Importações"} – ${estadoB} (${anoSelecionado})`}
          value={`${unidade} ${cards.B.toLocaleString()}`}
          icon="📦"
          className="bg-primary/5"
        />
      </section>
    </div>
  );
};

export default ComparacoesPage;
