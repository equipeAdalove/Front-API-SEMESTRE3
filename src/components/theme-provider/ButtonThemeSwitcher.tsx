import { useTheme } from "@/components/theme-provider/theme-provider";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-14 h-8 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer p-1"
    >
      <motion.div
        className="w-6 h-6 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-md"
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isDark ? (
          <Sun size={16} className="text-yellow-500" />
        ) : (
          <Moon size={16} className="text-gray-700" />
        )}
      </motion.div>
    </div>
  );
};

export default ThemeSwitcher;
