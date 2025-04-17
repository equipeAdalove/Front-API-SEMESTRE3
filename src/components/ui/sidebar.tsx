import { Home, BarChart, Map, FileBarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="h-screen w-64 shadow-md flex flex-col p-4"
      style={{
        backgroundColor: "var(--color-sidebar)", // Usando a variável da cor de fundo da sidebar
        color: "var(--color-sidebar-foreground)", // Cor do texto
      }}
    >
      {/* Header */}
      <div className="w-full border-b border-gray-300 pb-4">
        <h1 className="mt-11 text-4xl font-bold text-purple-700 text-center">
          Ada<span className="text-gray-900 dark:text-white">Trade</span>
        </h1>
      </div>

      {/* Navigation - Centralizado Verticalmente */}
      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-5">
          <li>
            <Link to="/dashboard">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <Home style={{ transform: "scale(1.5)" }} /> 
                <span style={{fontSize: "1.2rem" }}>Dashboard</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/buscar-ncm">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <BarChart style={{ transform: "scale(1.6)" }} /> 
                <span style={{fontSize: "1.2rem" }}>Buscar NCM</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/mapa">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <Map style={{ transform: "scale(1.5)" }} /> 
                <span style={{fontSize: "1.2rem" }}>Visualizar Mapa</span>
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/exportar">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <FileBarChart2 style={{ transform: "scale(1.5)" }} /> 
                <span style={{fontSize: "1.2rem" }}>Exportar - Power BI</span>
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <Card
        className="p-4 text-center"
        style={{
          backgroundColor: "var(--color-popover)",
          color: "var(--color-popover-foreground)",
        }}
      >
        <img src="/adalove.jpeg" alt="Adalove" className="mx-auto w-16 h-16 rounded-full" />        <p className="text-base mt-2">Equipe AdaLove®</p>
        <p className="text-sm text-white-500">
          Acesse nosso{" "}
          <a
            href="https://github.com/equipeAdalove/API-SEMESTRE3"
            target="_blank"
          >
            {" "}
            <u> GitHub</u>
          </a>{" "}
          para saber mais sobre o projeto
        </p>
      </Card>
    </aside>
  );
}
