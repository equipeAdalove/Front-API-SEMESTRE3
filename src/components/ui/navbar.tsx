import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Função para rolar até a seção ao clicar no link
  const handleSmoothScroll = (event: React.MouseEvent<HTMLElement, MouseEvent>, target: string) => {
    event.preventDefault();
    const section = document.querySelector(target) as HTMLElement;
    section?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setIsMobileMenuOpen(false); // Fechar o menu no mobile após a rolagem
  };

  useEffect(() => {
    // Adiciona a rolagem suave globalmente
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      // Desativa a rolagem suave quando o componente for desmontado
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <header className="w-full px-6 py-4 flex justify-between items-center fixed top-0 left-0 z-50 bg-transparent">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <span className="text-[var(--ada)]">Ada</span>
        <span className="text-[var(--trade)]">Trade</span>
      </div>

      {/* Botão hamburguer */}
      <button
        className="md:hidden text-gray-700 dark:text-white"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Menu desktop */}
      <nav className="hidden md:flex gap-6 items-center text-sm">
        <a href="#inicio" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#inicio")}>Início</a>
        <a href="#funcionalidades" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#funcionalidades")}>Funcionalidades</a>
        <a href="#faq" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#faq")}>FAQ</a>
        <a href="#sobre" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#sobre")}>Sobre nós</a>

        <Link to="/dashboard">
          <button className="bg-[var(--color-primary)] px-8 py-3 rounded-full text-white md:text-md shadow-md hover:bg-[var(--color-secondary)] transition ml-0">
            Acessar
          </button>
        </Link>

        <ThemeSwitcher />
      </nav>

      {/* Menu mobile */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-gray-900 flex flex-col gap-4 p-6 border-t border-gray-200 dark:border-gray-700 md:hidden transition-all">
          <a href="#inicio" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#inicio")}>Início</a>
          <a href="#funcionalidades" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#funcionalidades")}>Funcionalidades</a>
          <a href="#faq" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#faq")}>FAQ</a>
          <a href="#sobre" className="hover:underline" onClick={(e) => handleSmoothScroll(e, "#sobre")}>Sobre nós</a>

          <Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition w-full">
              Acessar
            </button>
          </Link>

          <div className="self-start">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
