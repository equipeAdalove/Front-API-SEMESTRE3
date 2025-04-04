import { Home, BarChart, Map, FileBarChart2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../theme-provider/ButtonThemeSwitcher";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 bg-white dark:bg-gray-800 text-black dark:text-white shadow-md flex flex-col p-4">
      {/* Header */}
      <h1 className="text-2xl font-bold text-purple-700 text-center">
        Ada<span className="text-gray-900 dark:text-white">Trade</span>
      </h1>

      {/* Navigation - Centralizado Verticalmente */}
      <nav className="flex-1 flex flex-col justify-center">
        <ul className="space-y-2">
          <li>
            <Link to="/dashboard">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <Home size={20} /> Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/buscar-ncm">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <BarChart size={20} /> Buscar NCM
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/mapa">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <Map size={20} /> Visualizar Mapa
              </Button>
            </Link>
          </li>
          <li>
            <Link to="/exportar">
              <Button
                variant="ghost"
                className="w-full flex items-center gap-3 justify-start"
              >
                <FileBarChart2 size={20} /> Exportar - Power BI
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <Card className="p-4 text-center">
        <img src="/logo.png" alt="Adalove" className="mx-auto w-12 h-12" />
        <p className="text-sm mt-2">Equipe AdaLove®</p>
        <p className="text-xs text-gray-500">
          Acesse nosso GitHub para saber mais sobre o projeto
        </p>
      </Card>

      {/* Theme Switcher - Agora no rodapé */}
      <div className="mt-4 flex justify-center">
        <ThemeSwitcher />
      </div>
    </aside>
  );
}
