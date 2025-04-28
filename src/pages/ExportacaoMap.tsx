import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

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
            <h1 className="text-4xl font-bold">Exportação</h1>
          </div>
  
          <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
            <button 
            onClick={() => navigate("/importacao_mapa")}
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] focus:outline-none transition-all duration-200">
              Importação
            </button>

            <button className="text-[var(--color-primary)] font-semibold">
              Exportação
            </button>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    );
}

export default NupPage;