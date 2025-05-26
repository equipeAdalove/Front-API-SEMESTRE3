import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { carregarPaises, getNomePais } from "@/services/paises";

export function TabelasAuxiliaresExportacao() {
  const [params] = useSearchParams();
  const estado = params.get("estado") || "SP";
  const ano = params.get("ano") || "2024";

  const [produtos, setProdutos] = useState<any[]>([]);
  const [destinos, setDestinos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDescricaoNCM = async (codigo: string) => {
      try {
        const response = await fetch(
          `http://localhost:3000/ncm/descricao-ncm/${codigo}`,
        );
        if (!response.ok) throw new Error("Erro ao buscar descrição do NCM");

        const data = await response.json();
        return data.descricao || codigo;
      } catch {
        return codigo; // fallback
      }
    };

    const fetchData = async () => {
      try {
        await carregarPaises();

        const [prodRes, destRes] = await Promise.all([
          fetch(
            `http://localhost:3000/exportacao/${estado}/ano/${ano}/ranking-produtos`,
          ),
          fetch(
            `http://localhost:3000/exportacao/${estado}/ano/${ano}/destinos`,
          ),
        ]);

        const prodJson = await prodRes.json();
        const destJson = await destRes.json();

        const top6Produtos = prodJson.slice(0, 6);

        const produtosComDescricao = await Promise.all(
          top6Produtos.map(async (item: any) => {
            const descricao = await fetchDescricaoNCM(item.name);
            return {
              descricao,
              valor: item.value,
            };
          }),
        );

        setProdutos(produtosComDescricao);

        const destinosComNome = destJson.map((item: any) => ({
          pais:
            item.pais === "Outros" ? "Outros" : getNomePais(String(item.pais)),
          valor_fob: item.valor_fob,
        }));

        setDestinos(destinosComNome);
      } catch (err) {
        setError("Erro ao carregar dados das tabelas auxiliares.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [estado, ano]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Skeleton className="h-[250px] rounded-lg" />
        <Skeleton className="h-[250px] rounded-lg" />
      </div>
    );
  }

  if (error) {
    return <p className="text-red-500 text-center p-4">{error}</p>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="border rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="bg-muted/50 px-6 py-4 border-b">
          <CardTitle className="text-lg font-semibold">
            Top 6 Produtos Exportados - {ano}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="hover:bg-muted/50">
                <TableHead className="w-[50px] font-medium">#</TableHead>
                <TableHead className="font-medium">
                  Descrição do Produto
                </TableHead>
                <TableHead className="text-right font-medium">
                  Valor FOB (US$)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {produtos.map((item, index) => {
                const descricao = item.descricao || "";
                const isLong = descricao.length > 50;
                const display = isLong
                  ? descricao.slice(0, 50) + "..."
                  : descricao;

                return (
                  <TableRow
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-muted/10 hover:bg-muted/20"
                        : "hover:bg-muted/10"
                    }
                  >
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell
                      className="max-w-[200px] truncate"
                      title={isLong ? descricao : undefined}
                    >
                      {display}
                    </TableCell>
                    <TableCell className="text-right font-medium text-primary">
                      {Number(item.valor).toLocaleString("pt-BR")}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="bg-muted/50 px-6 py-4 border-b">
          <CardTitle className="text-lg font-semibold">
            Top Países de Destino - {ano}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/50">
              <TableRow className="hover:bg-muted/50">
                <TableHead className="w-[50px] font-medium">#</TableHead>
                <TableHead className="font-medium">País</TableHead>
                <TableHead className="text-right font-medium">
                  Valor FOB (US$)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {destinos.map((item, index) => (
                <TableRow
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-muted/10 hover:bg-muted/20"
                      : "hover:bg-muted/10"
                  }
                >
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>{item.pais}</TableCell>
                  <TableCell className="text-right font-medium text-primary">
                    {Number(item.valor_fob).toLocaleString("pt-BR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default TabelasAuxiliaresExportacao;
