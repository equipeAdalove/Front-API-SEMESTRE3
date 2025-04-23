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

  const handleGoToDashboard = () => {
    if (selectedState) {
      navigate(`/dashboard/${selectedState}`);
    }
  };

  return (
    <div>
      {/* Topo com título e barra de busca */}
      <div className="flex justify-between items-center mt-10 mb-10 flex-wrap gap-4 px-10">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">
            Pages / Visualizar Mapas
          </p>
          <h1 className="text-4xl font-bold">Importação</h1>
        </div>

        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
          <button className="text-[var(--color-primary)] font-semibold">
            Importação
          </button>
          <button className="text-[var(--color-primary)] hover:text-[var(--color-primary-light)] focus:outline-none transition-all duration-200">
            Exportação
          </button>
          <ThemeSwitcher />
        </div>
      </div>

      {/* Container horizontal: Mapa + Card */}
      <div className="flex gap-6 justify-center">
        {/* Mapa */}
        <div className="h-[680px] ml-20 -mt-8">
          <BrazilMap onSelectState={handleSelectState} />
        </div>

        {/* Card lateral */}
        {selectedState && (
          <div className="w-[350px] bg-[var(--color-card)] shadow-md rounded-xl p-6 h-fit">
            <h2 className="text-xl font-semibold mb-2 text-[var(--color-primary)]">
              Estado selecionado: {selectedState}
            </h2>
            <p className="text-sm text-[var(--color-foreground)] mb-4">
              Aqui você pode visualizar mais informações sobre o estado de{" "}
              <strong>{selectedState}</strong>.
            </p>
            <button
              onClick={handleGoToDashboard}
              className="bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--color-primary-light)] transition-all"
            >
              Ver Dashboard do Estado
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NupPage;
