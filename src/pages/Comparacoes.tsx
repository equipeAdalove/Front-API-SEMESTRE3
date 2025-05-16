import { useNavigate } from "react-router-dom";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

const ComparacoesPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-between items-center mt-10 mb-10 flex-wrap gap-4 px-10">
        <div className="-mt-2">
          <p className="text-sm text-[var(--muted-foreground)]">Pages / Comparações</p>
          <h1 className="text-4xl font-bold">Comparações</h1>
        </div>

        {/* Botão de tema */}
        <div className="ml-auto">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Aqui você pode adicionar os componentes de comparações, botões ou gráficos */}
    </div>
  );
};

export default ComparacoesPage;
