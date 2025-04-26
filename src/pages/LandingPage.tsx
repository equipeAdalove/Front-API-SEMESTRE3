// src/pages/LandingPage.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom"; // Se estiver usando Next.js, troca para "next/link"
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher"; // Botão de tema

export default function LandingPage() {
  return (
    <main
      className="min-h-screen flex flex-col text-center"
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-foreground)",
      }}
    >
      {/* 
        Header 
        (Menu com: Início, Funcionalidades, FAQ, Sobre nós, Acessar + ThemeSwitcher)
      */}
      <header className="w-full flex justify-between items-center p-6">
        <div className="text-2xl font-bold">
          Ada<span className="text-purple-600">Trade</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#inicio" className="hover:underline">Início</a>
          <a href="#funcionalidades" className="hover:underline">Funcionalidades</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#sobre" className="hover:underline">Sobre nós</a>
          <Link to="/dashboard">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
              Acessar
            </button>
          </Link>
          <ThemeSwitcher />
        </nav>
      </header>

      {/* 
        Hero Section 
        (Grande chamada com texto e imagem do polvo)
      */}
      <section id="inicio" className="flex flex-col-reverse md:flex-row items-center justify-center p-10 gap-10">
        <Link to="/dashboard">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-xl text-lg shadow-lg hover:bg-purple-700">
            Acesse a plataforma
          </button>
        </Link>
      </section>

      {/* 
        Funcionalidades 
        (Cards com miniaturas: Dashboard Interativo, Mapa de Calor, Busca por NCM)
      */}
      <section id="funcionalidades" className="w-full py-20 bg-purple-100">

      </section>

      {/* 
        FAQ 
        (Accordion simples de perguntas)
      */}
      <section id="faq" className="w-full py-20">

      </section>

      {/* 
        Sobre nós 
        (Texto falando da equipe AdaLove + logo)
      */}
      <section className="w-full py-20">
        {/* Título alinhado à esquerda e mais próximo */}
        <div className="max-w-5xl mx-auto mb-6 text-left">
          <h2 className="text-[var(--color-primary)] text-3xl font-bold mb-0">Sobre nós</h2>
          <h3 className="text-[var(--color-foreground)] text-6xl font-extrabold -mt-2">AdaLove</h3>
        </div>

        {/* Wrapper flex para texto + imagem */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 text-[var(--color-foreground)]">
          {/* Texto à esquerda */}
          <div className="md:w-2/3 space-y-4 text-left text-lg">
            <p>
              Somos a <strong>AdaLove</strong>, uma equipe movida pela inovação e pela paixão pela tecnologia. Nossa abordagem ágil nos permite ir além da simples resolução de problemas, buscamos inspirar mudanças positivas e criar soluções impactantes.
              <br></br>
              A equipe foi formada por estudantes da Faculdade de Tecnologia Prof. Jessen Vidal, do curso de Análise e Desenvolvimento de Sistemas.
              <br></br>
              AdaTrade é um projeto pedagógico desenvolvido dentro da Metodologia API, que promove o ensino baseado em desafios reais (RPBL), que prepara os alunos para enfrentar problemas do mercado com soluções inovadoras e eficientes.
            </p>
          </div>

          {/* Imagem à direita */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="src/components/images/ada-logo.png"
              alt="AdaLove Logo"
              className="w-[280px] md:w-[320px]"
            />
          </div>
        </div>
      </section>

      {/* 
        Nossa Equipe 
        (Fotos dos membros com link pro LinkedIn)
      */}
      <section className="w-full py-20">
        <div className="max-w-5xl mx-auto mb-6 text-right">
          <h3 className="text-[var(--color-primary)] text-6xl font-extrabold -mt-2" >Nossa Equipe:</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center">
            <img src="src/components/images/adateam/angelina.jpg" className="w-50 h-50 rounded-full object-cover mb-2" alt="Angelina Borroni" />
            <p className="font-semibold">Angelina Borroni</p>
            <div className="flex gap-3 mt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="src/components/images/adateam/maria.jpg" className="w-50 h-50 rounded-full object-cover mb-2" alt="Maria Fernanda" />
            <p className="font-semibold">Maria Fernanda</p>
            <div className="flex gap-3 mt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="src/components/images/adateam/matheus.jpg" className="w-50 h-50 rounded-full object-cover mb-2" alt="Matheus Germano" />
            <p className="font-semibold">Matheus Germano</p>
            <div className="flex gap-3 mt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img src="src/components/images/adateam/ramon.jpg" className="w-50 h-50 rounded-full object-cover mb-2" alt="Ramon Amorim" />
            <p className="font-semibold">Ramon Amorim</p>
            <div className="flex gap-3 mt-1">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                <FontAwesomeIcon icon={faGithub} size="xl" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center">
              <img src="src/components/images/adateam/raphaela.jpeg" className="w-50 h-50 rounded-full object-cover mb-2" alt="Raphaela Monteiro" />
              <p className="font-semibold">Raphaela Monteiro</p>
              <div className="flex gap-3 mt-1">
                <a href="https://www.linkedin.com/in/raphaelamonteiro/" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src="src/components/images/adateam/renan.jpg" className="w-50 h-50 rounded-full object-cover mb-2" alt="Renan Tomasi" />
              <p className="font-semibold">Renan Tomasi</p>
              <div className="flex gap-3 mt-1">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <img src="src/components/images/adateam/vitor.jpg" className="w-50 h-50 rounded-full object-cover mb-2" alt="Vitor Ribeiro" />
              <p className="font-semibold">Vitor Ribeiro</p>
              <div className="flex gap-3 mt-1">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                  <FontAwesomeIcon icon={faLinkedin} size="xl" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-600 hover:text-800">
                  <FontAwesomeIcon icon={faGithub} size="xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 
        Rodapé 
        (Logos + créditos)
      */}
      <footer className="w-full bg-purple-600 text-white text-sm py-6 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} AdaLove - Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <img src="/images/logo-cps.png" alt="CPS" className="h-6" />
            <img src="/images/adalove-mini.svg" alt="AdaLove Mini" className="h-6" />
          </div>
        </div>
      </footer>
    </main >
  );
}
