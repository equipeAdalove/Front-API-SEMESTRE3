import { useTheme } from "@/components/theme-provider/theme-provider";
import { Button } from "@/components/ui/buttons/button";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      {theme === "dark" ? "Modo Claro" : "Modo Escuro"}
    </Button>
  );
};

export default ThemeSwitcher;
