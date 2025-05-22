import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import HeatMap from "../components/map/HeatMap"; // Importação do HeatMap

function NupPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Topo com título e barra de busca */}
      <div className="flex justify-between items-center mt-10 mb-10 flex-wrap gap-4 px-10">
        <div className="-mt-2">
          <p className="text-sm text-[var(--muted-foreground)]">
            Pages / Visualizar Mapas
          </p>
          <h1 className="text-4xl font-bold">Importação</h1>
        </div>

        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
          <button className="text-[var(--color-primary)] font-semibold">
            Importação
          </button>
          <button
            onClick={() => navigate("/exportacao_mapa")}
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] focus:outline-none transition-all duration-200"
          >
            Exportação
          </button>
          <ThemeSwitcher />
        </div>
      </div>

      {/* HeatMap renderizado */}
      <HeatMap />
    </div>
  );
}

export default NupPage;
