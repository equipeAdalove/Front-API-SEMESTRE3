import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/tables/table";

interface ExportacaoItem {
  id: number;
  co_ano: number;
  co_mes: number;
  co_ncm: string;
  sg_uf_ncm: string;
  kg_liquido: string;
  vl_fob: string;
}

interface ImportacaoItem extends ExportacaoItem {
  vl_frete?: string;
  vl_seguro?: string;
}

interface Props {
  data: (ExportacaoItem | ImportacaoItem)[];
  tipo: string;
}

const NCMTable = ({ data, tipo }: Props) => {
  return (
    <Table className="w-[90%] mx-auto rounded-lg shadow-lg border-collapse overflow-hidden dark:bg-gray-800">
      <TableHeader>
        <TableRow>
          <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
            ID
          </TableHead>
          <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
            Ano
          </TableHead>
          <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
            Mês
          </TableHead>
          <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
            NCM
          </TableHead>
          <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
            UF
          </TableHead>
          <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
            Peso Líquido
          </TableHead>
          <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
            Valor FOB
          </TableHead>
          {tipo === "importacao" && (
            <>
              <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
                Valor Frete
              </TableHead>
              <TableHead className="bg-black text-white font-bold text-center p-3 border-b border-gray-300 dark:bg-gray-900 dark:text-white">
                Valor Seguro
              </TableHead>
            </>
          )}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item, index) => (
          <TableRow
            key={item.id}
            className={`${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-200 dark:bg-gray-700 dark:text-white transition-all`}
          >
            <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
              {item.id}
            </TableCell>
            <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
              {item.co_ano}
            </TableCell>
            <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
              {item.co_mes}
            </TableCell>
            <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
              {item.co_ncm}
            </TableCell>
            <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
              {item.sg_uf_ncm}
            </TableCell>
            <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
              {item.kg_liquido}
            </TableCell>
            <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
              {item.vl_fob}
            </TableCell>
            {tipo === "importacao" && "vl_frete" in item && (
              <>
                <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
                  {item.vl_frete ?? "N/A"}
                </TableCell>
                <TableCell className="text-center p-3 border-b border-gray-300 dark:bg-gray-800 dark:text-white">
                  {item.vl_seguro ?? "N/A"}
                </TableCell>
              </>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default NCMTable;
