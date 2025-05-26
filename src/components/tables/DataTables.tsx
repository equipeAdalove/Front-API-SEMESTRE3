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

interface DataTablesProps {
  rankingProdutos: any[];
  paisesOrigem: any[];
  municipios: any[];
  loading: boolean;
}

export default function DataTables({
  rankingProdutos,
  paisesOrigem,
  municipios,
  loading,
}: DataTablesProps) {
  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="border rounded-lg">
            <CardHeader>
              <Skeleton className="h-6 w-48" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Produtos */}
      <Card className="border rounded-lg">
        <CardHeader className="bg-primary/5 px-6 py-4 border-b">
          <CardTitle className="text-lg font-semibold">
            Top Produtos Importados
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/10">
              <TableRow className="hover:bg-muted/10">
                <TableHead className="font-medium w-1/2">Código NCM</TableHead>
                <TableHead className="text-right font-medium w-1/2">
                  Valor FOB (US$)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rankingProdutos.map((item, index) => (
                <TableRow
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-muted/5 hover:bg-muted/10"
                      : "hover:bg-muted/5"
                  }
                >
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell className="text-right font-medium text-primary">
                    {item.value.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Países */}
      <Card className="border rounded-lg">
        <CardHeader className="bg-primary/5 px-6 py-4 border-b">
          <CardTitle className="text-lg font-semibold">
            Principais Países de Origem
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/10">
              <TableRow className="hover:bg-muted/10">
                <TableHead className="font-medium w-1/2">País</TableHead>
                <TableHead className="text-right font-medium w-1/2">
                  Valor FOB (US$)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paisesOrigem.map((item, index) => (
                <TableRow
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-muted/5 hover:bg-muted/10"
                      : "hover:bg-muted/5"
                  }
                >
                  <TableCell className="font-medium">{item.pais}</TableCell>
                  <TableCell className="text-right font-medium text-primary">
                    {item.valor_fob.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Municípios */}
      <Card className="border rounded-lg">
        <CardHeader className="bg-primary/5 px-6 py-4 border-b">
          <CardTitle className="text-lg font-semibold">
            Municípios que Mais Importam
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-muted/10">
              <TableRow className="hover:bg-muted/10">
                <TableHead className="font-medium w-1/2">
                  Município (Código IBGE)
                </TableHead>
                <TableHead className="text-right font-medium w-1/2">
                  Valor FOB (US$)
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {municipios.map((item, index) => (
                <TableRow
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-muted/5 hover:bg-muted/10"
                      : "hover:bg-muted/5"
                  }
                >
                  <TableCell className="font-medium">
                    {item.municipio}
                  </TableCell>
                  <TableCell className="text-right font-medium text-primary">
                    {item.valor_fob.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "USD",
                    })}
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
