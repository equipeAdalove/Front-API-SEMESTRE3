import { ThemeProvider } from "@/components/theme-provider/theme-provider";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardInit from "./pages/DashboardInit"; // Página inicial do Dashboard
import Sidebar from "./components/ui/sidebar";
import BuscarNcm from "./pages/BuscarNcm";
import ImportacaoPage from "./pages/ImportacaoPage";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="flex h-screen">
          {/* Sidebar agora estará dentro do ThemeProvider */}
          <Sidebar />

          <div className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route path="/" element={<DashboardInit />} />
              <Route path="/dashboard" element={<DashboardInit />} />
              <Route path="/estado/:nome" element={<DashboardInit />} />
              <Route path="/importacao" element={<ImportacaoPage />} />

              <Route path="/buscar-ncm" element={<BuscarNcm />} />
              
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
