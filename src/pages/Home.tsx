import { useEffect, useState } from "react";
import api from "@/services/api";
import { Button } from "@/components/ui/buttons/button";
import { Input } from "@/components/ui/input";
import NCMTable from "@/components/ui/tables/NCMTable";
import { Trash } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { estados } from "@/utils/constants";
import "react-toastify/dist/ReactToastify.css";
import ThemeSwitcher from "@/components/ui/buttons/ButtonThemeSwitcher";

const Home = () => {
  const [ncm, setNcm] = useState("");
  const [tipo, setTipo] = useState("exportacao");
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [anoInicio, setAnoInicio] = useState(2014);
  const [anoFim, setAnoFim] = useState(2024);
  const [estado, setEstado] = useState("");

  useEffect(() => {
    if (ncm) {
      fetchData();
    }
  }, [tipo, page]);

  useEffect(() => {
    setPage(1);
  }, [tipo]);

  const fetchData = async () => {
    if (!ncm) return;
    setLoading(true);
    setError(null);
    try {
      const response = await api.get(`/${tipo}/filter`, {
        params: {
          co_ncm: ncm,
          co_ano: `${anoInicio}-${anoFim}`,
          sg_uf_ncm: estado || undefined,
          page,
          limit: 50,
        },
      });

      setData(response.data);
      setHasMore(response.data.length === 50);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!ncm) {
      toast.error("O campo NCM não pode estar vazio!");
      return;
    }
    if (ncm.length !== 8) {
      toast.error("O NCM deve ter 8 dígitos.");
      return;
    }
    if (anoInicio < 2014 || anoFim > 2024) {
      toast.error("Ano fora do intervalo permitido (2014-2024).");
      return;
    }
    setPage(1);
    fetchData();
  };

  const handleClear = () => {
    setNcm("");
    setAnoInicio(2014);
    setAnoFim(2024);
    setEstado("");
    setPage(1);
    setData([]);
  };

  const handleAnoInicioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnoInicio = Math.max(2014, Math.min(Number(e.target.value), 2024));
    if (newAnoInicio > anoFim) {
      setAnoFim(newAnoInicio); // Ajusta o ano de fim para o mesmo valor
    }
    setAnoInicio(newAnoInicio);
  };

  const handleAnoFimChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAnoFim = Math.max(2014, Math.min(Number(e.target.value), 2024));
    if (newAnoFim < anoInicio) {
      setAnoInicio(newAnoFim); // Ajusta o ano de início para o mesmo valor
    }
    setAnoFim(newAnoFim);
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
      <header className="flex items-center justify-between p-4 bg-background shadow-md">
        <div className="flex flex-1 justify-center items-center gap-2">
          <Input
            className="w-full max-w-md"
            placeholder="Digite o código NCM..."
            value={ncm}
            onChange={(e) => setNcm(e.target.value)}
          />
          <Button onClick={handleSearch} disabled={loading}>
            {loading ? "Buscando..." : "Buscar"}
          </Button>
        </div>
        <ThemeSwitcher />
      </header>

      <div className="p-4 flex flex-wrap gap-4 items-center justify-center border-b">
        <select
          className="border p-2 rounded"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="exportacao">Exportação</option>
          <option value="importacao">Importação</option>
        </select>
        <select
          className="border p-2 rounded"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        >
          <option value="">Todos os Estados</option>
          {estados.map((uf) => (
            <option key={uf} value={uf}>
              {uf}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="border p-2 rounded w-24"
          value={anoInicio}
          onChange={handleAnoInicioChange}
          min="2014"
          max="2024"
        />
        <span>-</span>
        <input
          type="number"
          className="border p-2 rounded w-24"
          value={anoFim}
          onChange={handleAnoFimChange}
          min="2014"
          max="2024"
        />
        <Button
          variant="outline"
          className="border-red-500 text-red-500 flex items-center gap-2"
          onClick={handleClear}
        >
          <Trash size={16} /> Limpar
        </Button>
      </div>

      <main className="p-4">
        {error && <p className="text-red-500">{error}</p>}
        {data.length > 0 && (
          <>
            <NCMTable data={data} tipo={tipo} />
            <div className="flex justify-between mt-4">
              <Button
                onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                disabled={page === 1 || loading}
              >
                Anterior
              </Button>
              <span>Página {page}</span>
              <Button
                onClick={() => hasMore && setPage((prev) => prev + 1)}
                disabled={!hasMore || loading}
              >
                Próxima
              </Button>
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default Home;
