import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

const TendenciasPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center mt-10 mb-10 flex-wrap gap-4 px-10">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">Pages / Tendências</p>
          <h1 className="text-4xl font-bold">Tendências</h1>
        </div>
  
        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
          <ThemeSwitcher />
        </div>
      </div>
  
      
    </div>
  );
};

export default TendenciasPage;