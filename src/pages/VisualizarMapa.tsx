import { useState } from "react";
import BrazilMap from "../components/map/MapaBrasil";

const NupPage = () => {
  const [selectedState, setSelectedState] = useState(""); 

  const handleSelectState = (state: string) => {
    setSelectedState(state);
    console.log("Estado selecionado:", state);
  };

  return (
    <div>
      <div>
      <p className="text-sm text-gray-400">Pages / Visualizar Mapa</p>
      <h1 className="text-4xl font-bold"> Visualizar Mapa</h1>
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

