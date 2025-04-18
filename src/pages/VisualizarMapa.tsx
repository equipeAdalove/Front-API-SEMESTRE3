import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BrazilMap from "../components/map/MapaBrasil";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

const NupPage = () => {
  const [selectedState, setSelectedState] = useState("");
  const navigate = useNavigate();

  const handleSelectState = (state: string) => {
    setSelectedState(state);
    console.log("Estado selecionado:", state);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-400">Pages / Visualizar Mapa</p>
          <h1 className="text-4xl font-bold">Visualizar Mapa</h1>
        </div>
        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
          <button
            onClick={() => navigate("/importacao_map")}
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] focus:outline-none transition-all duration-200"
          >
            Importação
          </button>
          <button>
            
          </button>
          <button
            onClick={() => navigate("/exportacao_map")}
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] focus:outline-none transition-all duration-200"
          >
            Exportação
          </button>
          <ThemeSwitcher />
        </div>
      </div>

      <BrazilMap onSelectState={handleSelectState} />

      {selectedState && (
        <p className="mt-4 text-md">
          Você clicou em: <strong>{selectedState}</strong>
        </p>
      )}
    </div>
  );
};

export default NupPage;


