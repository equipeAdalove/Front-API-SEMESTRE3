import { useState, useEffect } from "react";
import {
  Home,
  BarChart,
  Map,
  FileBarChart2,
  TrendingUp,
  Sliders,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import clsx from "clsx";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  // Verifica se a tela é pequena e recolhe a sidebar automaticamente
  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 768);
    };

    handleResize(); // Executa uma vez ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={clsx(
        "h-screen flex flex-col p-4 shadow-md transition-all duration-300 ease-in-out",
        collapsed ? "w-16" : "w-64",
        "bg-[var(--color-sidebar)] text-[var(--color-sidebar-foreground)]",
      )}
    >
      {/* Botão de Expandir/Recolher */}
      <div className="flex justify-end mb-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="hover:bg-[var(--color-sidebar-foreground)/10]"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      {/* Header */}
      {!collapsed && (
        <div className="w-full pb-4">
          <Link
            to="/"
            className="block mt-5 text-4xl font-bold text-center hover:underline"
          >
            <span className="text-[var(--ada)]">Ada</span>
            <span className="text-[var(--trade)]">Trade</span>
          </Link>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <Home className="scale-[1.3]" />
                {!collapsed && <span>Dashboard</span>}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/buscar-ncm">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <BarChart className="scale-[1.3]" />
                {!collapsed && <span>Buscar NCM</span>}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/mapa">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <Map className="scale-[1.3]" />
                {!collapsed && <span>Visualizar Mapa</span>}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/exportar">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <FileBarChart2 className="scale-[1.3]" />
                {!collapsed && <span>Exportar Dados</span>}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/tendencias">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <TrendingUp className="scale-[1.3]" />
                {!collapsed && <span>Tendências</span>}
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/comparacoes">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <Sliders className="scale-[1.3]" />
                {!collapsed && <span>Comparações</span>}
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      {!collapsed && (
        <Card
          className="p-5 text-center mt-auto transition-all duration-300 ease-in-out"
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
              <u>GitHub</u>
            </a>{" "}
            para saber mais sobre o projeto
          </p>
        </Card>
      )}
    </aside>
  );
}
