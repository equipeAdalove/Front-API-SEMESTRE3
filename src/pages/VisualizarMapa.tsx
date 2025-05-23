import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import HeatMap from "../components/map/HeatMap"; // Importação do HeatMap

function NupPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-8">
      {/* Topo com título e barra de busca */}
      <div className="flex justify-between items-center mt-4 mb-10 flex-wrap gap-4 px-3">
        <div className="-mt-2">
          <p className="text-sm text-[var(--muted-foreground)]">
            Pages / Visualizar Mapas
          </p>
          <h1 className="text-4xl font-bold">Importação</h1>
        </div>

        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
            <button
              onClick={() => navigate("/importacao")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
            >
              Importação
            </button>
            <button
              onClick={() => navigate("/exportacao")}
              className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)]"
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
