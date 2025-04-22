// src/pages/LandingPage.tsx

import { Link } from "react-router-dom"; // ou use "next/link" se for Next.js
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";

export default function LandingPage() {
  return (
    <main
      className="min-h-screen flex flex-col justify-between items-center text-center p-10"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      {/* Header com botão de tema */}
      <header className="w-full flex justify-end">
        <ThemeSwitcher />
      </header>

      {/* Conteúdo principal da landing */}
      <div className="flex-1 flex flex-col justify-center items-center max-w-2xl">
        <h1 className="text-5xl font-bold mb-6">
          Dados Precisos, Decisões Inteligentes: Acompanhe o Comércio Exterior
          com Facilidade
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] mb-10">
          Acompanhe os dados do comércio exterior e as tendências de importação
          e exportação dos estados brasileiros para otimizar suas estratégias
          econômicas com AdaTrade{" "}
        </p>

        {/* Botão que leva à busca */}
        <Link to="/dashboard">
          <button
            className="px-8 py-3 rounded-xl text-lg font-medium shadow-lg transition-all"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-primary-foreground)",
            }}
          >
            Acesse a plataforma
          </button>
        </Link>
      </div>

      {/* Rodapé simples */}
      <footer className="text-sm text-[var(--muted-foreground)] mt-10">
        © {new Date().getFullYear()} Equipe AdaLove - Todos os direitos
        reservados.
      </footer>
    </main>
  );
}
