import { useState } from "react";
import BrazilMap from "../components/MapaBrasil";
import ListaEstados from "../components/ListaEstados";
import ToggleMapaLista from "../components/ToggleMapaLista";
import { useNavigate } from "react-router-dom";

export default function DashboardInit() {
  const [modoMapa, setModoMapa] = useState(true);
  const navigate = useNavigate();

  const handleSelectState = (estado: string) => {
    console.log("Selecionado:", estado);
    navigate(`/estado/${encodeURIComponent(estado)}`);
  };

  return (
    <div
      className="flex"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      <main className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <p style={{ color: "var(--muted-foreground)" }} className="text-sm">
              Pages / Dashboard
            </p>
            <h1 className="text-4xl font-bold">Dashboard</h1>
          </div>
          <ToggleMapaLista modoMapa={modoMapa} setModoMapa={setModoMapa} />
        </div>

        {modoMapa ? (
          <div className="w-full h-full">
            <BrazilMap onSelectState={handleSelectState} />
          </div>
        ) : (
          <ListaEstados onSelectState={handleSelectState} />
        )}
      </main>
    </div>
  );
}
