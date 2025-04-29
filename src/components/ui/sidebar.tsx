import { Home, BarChart, Map, FileBarChart2, TrendingUp, Sliders } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 shadow-md flex flex-col p-4 bg-[var(--color-sidebar)] text-[var(--color-sidebar-foreground)]"
    >
      {/* Header */}
      <div className="w-full pb-4">
        <Link to="/" className="block mt-5 text-4xl font-bold text-center hover:underline">
          <span className="text-[var(--ada)]">Ada</span>
          <span className="text-[var(--trade)]">Trade</span>
        </Link>
        {/* Navigation - Centralizado Verticalmente */}
        <nav className="flex-1 flex flex-col justify-center mt-10">
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard">
                <Button variant="ghost" className="w-full flex items-center gap-3 justify-start">
                  <Home style={{ transform: "scale(1.3)" }} />
                  <span className="text-sm:text-base">Dashboard</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/buscar-ncm">
                <Button variant="ghost" className="w-full flex items-center gap-3 justify-start">
                  <BarChart style={{ transform: "scale(1.3)" }} />
                  <span className="text-sm:text-base">Buscar NCM</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/mapa">
                <Button variant="ghost" className="w-full flex items-center gap-3 justify-start">
                  <Map style={{ transform: "scale(1.3)" }} />
                  <span className="text-sm:text-base">Visualizar Mapa</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/exportar">
                <Button variant="ghost" className="w-full flex items-center gap-3 justify-start">
                  <FileBarChart2 style={{ transform: "scale(1.3)" }} />
                  <span className="text-sm:text-base">Exportar - Power BI</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/tendencias">
                <Button variant="ghost" className="w-full flex items-center gap-3 justify-start">
                  <TrendingUp style={{ transform: "scale(1.3)" }} />
                  <span className="text-sm:text-base">Tendências</span>
                </Button>
              </Link>
            </li>
            <li>
              <Link to="/comparacoes">
                <Button variant="ghost" className="w-full flex items-center gap-3 justify-start">
                  <Sliders style={{ transform: "scale(1.3)" }} />
                  <span className="text-sm:text-base">Comparações</span>
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>



      {/* Footer */}
      <Card className="p-4 text-center mt-5"
        style={{
          backgroundColor: "var(--color-popover)",
          color: "var(--color-popover-foreground)",
        }}
      >
        <img
          src="/adalove.jpeg"
          alt="Adalove"
          className="mx-auto w-16 h-16 rounded-full"
        />
        <p className="text-base mt-2">Equipe AdaLove®</p>
        <p className="text-sm text-white-500">
          Acesse nosso{" "}
          <a
            href="https://github.com/equipeAdalove/API-SEMESTRE3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u> GitHub</u>
          </a>{" "}
          para saber mais sobre o projeto
        </p>
      </Card>
    </aside>
  );
}