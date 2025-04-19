import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DashboardInit from "./pages/DashboardInit";
import Sidebar from "./components/ui/sidebar";
import BuscarNcm from "./pages/BuscarNcm";
import VisualizarMapa from "./pages/VisualizarMapa";
import ImportacaoPage from "./pages/ImportacaoPage";
import DashboardEstado from "./pages/ImportacaoPage"; // NOVO: import da nova página específica do estado
import ImportacaoMap from "./pages/ImportacaoMap";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex h-screen">
          <Sidebar />

          <div className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<DashboardInit />} />
              <Route path="/dashboard" element={<DashboardInit />} />
              <Route path="/dashboard/:uf" element={<DashboardEstado />} /> {/* NOVA ROTA */}
              <Route path="/importacao" element={<ImportacaoPage />} />
              <Route path="/importacao_mapa" element={<ImportacaoMap />} />
              <Route path="/visualizar-mapa" element={<VisualizarMapa />} />
              <Route path="/mapa" element={<VisualizarMapa />} />
              <Route path="/buscar-ncm" element={<BuscarNcm />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

