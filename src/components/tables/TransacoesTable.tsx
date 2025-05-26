import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Transacao } from "@/types/ncm";
import { getNomePais } from "@/services/paises";

interface Props {
  transacoes: Transacao[];
  tipo: "exportacao" | "importacao";
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onSelect: (t: Transacao | null) => void;
  selectedTransacao: Transacao | null;
}

export function TransacoesTable({
  transacoes,
  tipo,
  currentPage,
  totalPages,
  onPageChange,
  onSelect,
  selectedTransacao,
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Transações de {tipo === "exportacao" ? "Exportação" : "Importação"}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Ano/Mês</TableHead>
              <TableHead>UF</TableHead>
              <TableHead>País</TableHead>
              <TableHead>URF</TableHead>
              <TableHead className="text-right">Valor FOB</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transacoes.map((transacao) => (
              <TableRow
                key={transacao.id}
                onClick={() => onSelect(transacao)}
                className="cursor-pointer hover:bg-accent"
              >
                <TableCell>
                  {transacao.co_ano}/
                  {transacao.co_mes.toString().padStart(2, "0")}
                </TableCell>
                <TableCell>{transacao.sg_uf_ncm}</TableCell>
                <TableCell>
                  {getNomePais(transacao.co_pais.toString())}
                </TableCell>
                <TableCell>{transacao.co_urf}</TableCell>
                <TableCell className="text-right">
                  $
                  {transacao.vl_fob.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex justify-between mt-4">
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="px-4 py-2 rounded bg-muted disabled:opacity-50"
          >
            Anterior
          </button>
          <button
            disabled={currentPage >= totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="px-4 py-2 rounded bg-muted disabled:opacity-50"
          >
            Próxima
          </button>
        </div>

        {selectedTransacao && (
          <div className="mt-4 p-4 border rounded-lg bg-card">
            <h3 className="font-semibold mb-2">Detalhes da Transação</h3>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-muted-foreground">ID</p>
                <p>{selectedTransacao.id}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Via</p>
                <p>{selectedTransacao.co_via}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Unidade</p>
                <p>{selectedTransacao.co_unid}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Quantidade</p>
                <p>{selectedTransacao.qt_estat.toLocaleString("pt-BR")}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Peso Líquido</p>
                <p>{selectedTransacao.kg_liquido.toLocaleString("pt-BR")} kg</p>
              </div>
              {tipo === "importacao" && (
                <>
                  <div>
                    <p className="text-muted-foreground">Frete</p>
                    <p>
                      {selectedTransacao.vl_frete?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Seguro</p>
                    <p>
                      {selectedTransacao.vl_seguro?.toLocaleString("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
