import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import MapaImg from "@/components/images/MapaImportacao.jpeg";
import MapImg from "@/components/images/MapaExportacao.png";

const NupPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Topo com título e barra de busca */}
      <div className="flex justify-between items-center mt-10 mb-10 flex-wrap gap-4 px-10">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">
            Pages / Visualizar Mapas
          </p>
          <h1 className="text-4xl font-bold">Visualizar Mapas</h1>
        </div>

        {/* Apenas o ThemeSwitcher permanece aqui */}
        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Container com os dois cards que agora são botões */}
      <div className="flex gap-6 px-10">
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Card 1 - Importação */}
          <button
            onClick={() => navigate("/importacao_mapa")}
            className="text-left w-[500px] h-[540px] bg-[var(--color-card)] rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out group"
          >
            <img
              src={MapaImg}
              alt="Imagem 1"
              className="w-[500px] h-[440px] object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-1 group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
              Importação
            </h3>
            <p className="text-sm text-[var(--color-foreground)] group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
              Mapa com descrição de importação de estados.
            </p>
          </button>

          {/* Card 2 - Exportação */}
          <button
            onClick={() => navigate("/exportacao_mapa")}
            className="text-left w-[500px] h-[540px] bg-[var(--color-card)] rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out group ml-15"
          >
            <img
              src={MapImg}
              alt="Imagem 2"
              className="w-[500px] h-[430px] object-cover rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-1 group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
              Exportação
            </h3>
            <p className="text-sm text-[var(--color-foreground)] group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
              Mapa com descrição de rotas de exportações.
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default NupPage;
