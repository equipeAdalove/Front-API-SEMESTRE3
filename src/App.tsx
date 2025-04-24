import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Sidebar from "./components/ui/sidebar";
import DashboardInit from "./pages/DashboardInit";
import BuscarNcm from "./pages/BuscarNcm";
import VisualizarMapa from "./pages/VisualizarMapa";
import ImportacaoPage from "./pages/ImportacaoPage";
import DashboardEstado from "./pages/ImportacaoPage";
import ImportacaoMap from "./pages/ImportacaoMap";
import LandingPage from "./pages/LandingPage";
import Tendencias from "./pages/Tendencias";
import Comparacoes from "./pages/Comparacoes";
import ExportacaoPage from "./pages/ExportacaoPage";


// Este componente precisa estar DENTRO do Router
function AppContent() {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <div className="flex h-screen">
      {!isLanding && <Sidebar />}

      <div className="flex-1 overflow-y-auto p-6">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashboardInit />} />
          <Route path="/dashboard/:uf" element={<DashboardEstado />} />
          <Route path="/importacao" element={<ImportacaoPage />} />
          <Route path="/exportacao" element={<ExportacaoPage />} />
          <Route path="/importacao_mapa" element={<ImportacaoMap />} />
          <Route path="/visualizar-mapa" element={<VisualizarMapa />} />
          <Route path="/mapa" element={<VisualizarMapa />} />
          <Route path="/buscar-ncm" element={<BuscarNcm />} />
          <Route path="/tendencias" element={<Tendencias />} /> 
          <Route path="/comparacoes" element={<Comparacoes />} /> 

        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
