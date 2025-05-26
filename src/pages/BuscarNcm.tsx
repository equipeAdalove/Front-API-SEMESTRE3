import { useState, useEffect } from "react";
import axios from "axios";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { NCMInfo, NCMTotal, Transacao } from "@/types/ncm";
import { carregarPaises } from "@/services/paises";
import { TransacoesTable } from "@/components/tables/TransacoesTable";

export default function BuscarNcm() {
  const [ncm, setNcm] = useState("");
  const [sugestoes, setSugestoes] = useState<
    { co_ncm: string; no_ncm_por: string }[]
  >([]);
  const [info, setInfo] = useState<NCMInfo | null>(null);
  const [total, setTotal] = useState<NCMTotal | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTransacao, setSelectedTransacao] = useState<Transacao | null>(
    null,
  );
  const [tipoTransacao, setTipoTransacao] = useState<
    "exportacao" | "importacao"
  >("exportacao");

  const [filtros, setFiltros] = useState({
    co_ano: "",
    co_mes: "",
    sg_uf_ncm: "",
    co_pais: "",
    vl_fob_min: "",
    vl_fob_max: "",
  });

  useEffect(() => {
    carregarPaises().catch(console.error);
    buscarTransacoes(1);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (ncm.length >= 3 && !ncm.match(/^\d{8}$/)) {
        axios
          .get("http://localhost:3000/ncm/search", { params: { q: ncm } })
          .then((res) => setSugestoes(res.data))
          .catch(() => setSugestoes([]));
      } else {
        setSugestoes([]);
      }
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [ncm]);

  const handleFiltroChange = (name: string, value: string) => {
    setFiltros((prev) => ({ ...prev, [name]: value }));
  };

  const buscarTransacoes = async (page = 1) => {
    setLoading(true);
    try {
      const filtrosLimpos = Object.fromEntries(
        Object.entries(filtros).filter(([_, v]) => v !== ""),
      );

      const params: any = {
        page,
        limit: 15,
        ...filtrosLimpos,
      };

      if (info?.co_ncm) {
        params.co_ncm = info.co_ncm;
      }

      const { data } = await axios.get(
        `http://localhost:3000/${tipoTransacao}/filter`,
        { params },
      );

      const transacoesFormatadas: Transacao[] = data.data.map((t: any) => ({
        ...t,
        qt_estat: Number(t.qt_estat),
        kg_liquido: Number(t.kg_liquido),
        vl_fob: Number(t.vl_fob),
        vl_frete: t.vl_frete ? Number(t.vl_frete) : undefined,
        vl_seguro: t.vl_seguro ? Number(t.vl_seguro) : undefined,
      }));

      setTransacoes(transacoesFormatadas);
      setTotalPages(data.totalPages || 1);
      setCurrentPage(data.currentPage || 1);
    } catch (err) {
      console.error("Erro ao carregar transações", err);
      setTransacoes([]);
    } finally {
      setLoading(false);
    }
  };

  const buscarNCM = async () => {
    if (!ncm.match(/^\d{8}$/)) {
      setError("Digite um código NCM válido (8 dígitos)");
      setInfo(null);
      setTotal(null);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const [infoRes, totalRes] = await Promise.all([
        axios.get(`http://localhost:3000/ncm/${ncm}/info`),
        axios.get(`http://localhost:3000/ncm/${ncm}/total`),
      ]);
      setInfo(infoRes.data);
      setTotal(totalRes.data);
      setCurrentPage(1);
      buscarTransacoes(1);
    } catch {
      setError("NCM não encontrado ou erro na conexão");
      setInfo(null);
      setTotal(null);
      setTransacoes([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full p-6 bg-background text-foreground">
      <div className="flex justify-between items-center mt-4 mb-10 flex-wrap gap-4 px-5">
        <div>
          <p className="text-sm text-muted-foreground">Pages / Buscar NCM</p>
          <h1 className="text-4xl font-bold">Buscar NCM</h1>
        </div>
        <div className="relative flex items-center space-x-6 bg-card rounded-3xl px-6 py-3 shadow-lg">
          <Search className="text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Digite nome ou código NCM"
            className="w-72"
            value={ncm}
            onChange={(e) => setNcm(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && buscarNCM()}
          />
          <Button onClick={buscarNCM}>Buscar NCM</Button>
          <ThemeSwitcher />
          {sugestoes.length > 0 && (
            <div className="absolute top-full left-12 z-10 w-[350px] mt-2 bg-popover border rounded shadow max-h-60 overflow-auto">
              {sugestoes.map((s) => (
                <div
                  key={s.co_ncm}
                  onClick={() => {
                    setNcm(s.co_ncm);
                    setSugestoes([]);
                    buscarNCM();
                  }}
                  className="px-4 py-2 hover:bg-accent cursor-pointer"
                >
                  <strong>{s.co_ncm}</strong> – {s.no_ncm_por}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="text-destructive mb-4 p-3 rounded-lg bg-destructive/10">
          {error}
        </div>
      )}
      {loading && <Skeleton className="h-[500px] w-full rounded-xl" />}

      <div className="space-y-6">
        {info && (
          <Card>
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground">Código NCM</p>
                <p className="text-lg font-semibold">{info.co_ncm}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Descrição</p>
                <p className="text-lg font-semibold">{info.descricao}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {total && (
          <Card>
            <CardHeader>
              <CardTitle>Valores Totais</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-muted-foreground">FOB Exportação</p>
                <p className="text-2xl font-bold">
                  ${parseFloat(total.vl_fob_exp || "0").toLocaleString("pt-BR")}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">FOB Importação</p>
                <p className="text-2xl font-bold">
                  ${parseFloat(total.vl_fob_imp || "0").toLocaleString("pt-BR")}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Valor Agregado</p>
                <p className="text-2xl font-bold">
                  $
                  {parseFloat(total.valor_agregado || "0").toLocaleString(
                    "pt-BR",
                  )}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs
          defaultValue="exportacao"
          onValueChange={(v) => {
            setTipoTransacao(v as any);
            setCurrentPage(1);
            buscarTransacoes(1);
          }}
        >
          <TabsList className="grid grid-cols-2 w-[400px]">
            <TabsTrigger value="exportacao">Exportação</TabsTrigger>
            <TabsTrigger value="importacao">Importação</TabsTrigger>
          </TabsList>
          <TabsContent value="exportacao" />
          <TabsContent value="importacao" />
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Filtros</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-6 gap-4">
            <Select onValueChange={(val) => handleFiltroChange("co_ano", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(11)].map((_, i) => (
                  <SelectItem key={i} value={(2014 + i).toString()}>
                    {2014 + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={(val) => handleFiltroChange("co_mes", val)}>
              <SelectTrigger>
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(12)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              onValueChange={(val) => handleFiltroChange("sg_uf_ncm", val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="UF" />
              </SelectTrigger>
              <SelectContent>
                {[
                  "AC",
                  "AL",
                  "AP",
                  "AM",
                  "BA",
                  "CE",
                  "DF",
                  "ES",
                  "GO",
                  "MA",
                  "MT",
                  "MS",
                  "MG",
                  "PA",
                  "PB",
                  "PR",
                  "PE",
                  "PI",
                  "RJ",
                  "RN",
                  "RS",
                  "RO",
                  "RR",
                  "SC",
                  "SP",
                  "SE",
                  "TO",
                ].map((uf) => (
                  <SelectItem key={uf} value={uf}>
                    {uf}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              type="text"
              name="co_pais"
              placeholder="Código País"
              onChange={(e) => handleFiltroChange("co_pais", e.target.value)}
            />
            <Input
              type="number"
              name="vl_fob_min"
              placeholder="FOB Mín"
              onChange={(e) => handleFiltroChange("vl_fob_min", e.target.value)}
            />
            <Input
              type="number"
              name="vl_fob_max"
              placeholder="FOB Máx"
              onChange={(e) => handleFiltroChange("vl_fob_max", e.target.value)}
            />
          </CardContent>
          <div className="px-6 pb-4">
            <Button onClick={() => buscarTransacoes(1)}>Aplicar Filtros</Button>
          </div>
        </Card>

        <TransacoesTable
          transacoes={transacoes}
          tipo={tipoTransacao}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => buscarTransacoes(page)}
          onSelect={setSelectedTransacao}
          selectedTransacao={selectedTransacao}
        />
      </div>
    </main>
  );
}
