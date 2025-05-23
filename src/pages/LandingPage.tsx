import { useState } from "react";
import Kraken from "@/components/images/Kraken.png";
import KrakenDark from "@/components/images/KrakenDark.png";

import { Link } from "react-router-dom";
import Navbar from "@/components/ui/navbar";

import { LayoutDashboard, Map, ChartLine } from "lucide-react";
import FAQ from "@/components/ui/FAQ";

export default function LandingPage() {
  const [imageSrc, setImageSrc] = useState("src/components/images/funcionalidades/Dash.jpeg");

  return (
    <>
      <Navbar />
      <main
        className="w-full"
        style={{
          backgroundColor: "var(--color-background)",
          color: "var(--color-foreground)",
        }}
      >
        <section id="inicio" className="flex flex-col-reverse md:flex-row items-center justify-between px-10 py-5 gap-10 mt-24">
          <div className="flex flex-col items-start gap-6 max-w-5xl w-full md:w-1/2">
            <style>{`
              .headline { color: #9B7EBD; }
              .dark .headline { color: white; }
            `}</style>
            <h1 className="headline md:text-5xl font-bold leading-tight text-left m-0">
              Dados Precisos, Decisões Inteligentes:
            </h1>
            <h1 className="text-[var(--color-primary)] md:text-4xl font-bold leading-tight text-left m-0 mt-[-20px]">
              Acompanhe o Comércio Exterior com Facilidade
            </h1>
            <p className="text-[var(--color-foreground)] text-base md:text-md text-left">
              Acompanhe os dados do comércio exterior e as tendências de importação e exportação dos estados brasileiros para otimizar suas estratégias econômicas com <span className="font-semibold">AdaTrade</span>.
            </p>
            <Link to="/dashboard">
              <button className="bg-[var(--color-primary)] px-8 py-3 rounded-full text-white md:text-lg shadow-lg hover:bg-[var(--color-secondary)] transition ml-0">
                Acesse a plataforma
              </button>
            </Link>
          </div>

          <div className="flex-1 flex justify-center md:w-1/2">
            <img src={Kraken} alt="Kraken" className="w-[1010px] h-[673px] object-contain -mt-21 ml-4 block dark:hidden" />
            <img src={KrakenDark} alt="Kraken Dark" className="w-[1000px] h-[667px] object-contain -mt-21 ml-4 block hidden dark:block" />
          </div>
        </section>

        <section id="funcionalidades" className="w-full py-5">
          <div className="max-w-6xl mx-auto px-6 mt-12">
            <style>{`
              .func-title { color: #6C4D8D; }
              .dark .func-title { color: white; }
            `}</style>
            <h2 className="text-6xl font-bold text-center func-title">Funcionalidades do Produto</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:items-stretch">
            
            {/* Imagem com mesma largura da coluna dos botões */}
            <div className="w-[2100px] py-8 md:h-auto">
              <img
                src={imageSrc}
                alt="Dashboard Interface"
                className="w-full h-[550px] object-cover rounded-xl shadow-lg border border-gray-500"
              />
            </div>

            {/* Botões interativos */}
            <div className="md:w-1/2 flex flex-col justify-between gap-4 py-8">
              <button
                onClick={() => setImageSrc("src/components/images/funcionalidades/Dash.jpeg")}
                className="border border-gray-500 bg-[var(--color-popover)] dark:bg-[var(--color-popover)] rounded-xl shadow-md p-4 mb-2 w-[400px] ml-auto text-left"
              >
                <div className="flex items-center mb-5.5">
                  <div className="bg-purple-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                    <LayoutDashboard className="w-6 h-6 text-purple-600 dark:text-blue-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-white">Dashboard Interativo</h3>
                </div>
                <p className="text-white dark:text-white">
                  Veja gráficos interativos que facilitam a análise dos dados de importação e exportação dos estados.
                </p>
              </button>

              <button
                onClick={() => setImageSrc("src/components/images/funcionalidades/Futuro.jpeg")}
                className="border border-gray-500 bg-[var(--color-primary)] dark:bg-[var(--color-popover)] rounded-xl shadow-md p-4 mb-2 w-[400px] ml-auto text-left"
              >
                <div className="flex items-center mb-5">
                  <div className="bg-purple-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                    <ChartLine className="w-6 h-6 text-purple-600 dark:text-blue-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-white">Tendências Futuras</h3>
                </div>
                <p className="text-white dark:text-white">
                  Explore projeções e insights para antecipar o futuro do comércio exterior brasileiro.
                </p>
              </button>

              <button
                onClick={() => setImageSrc("src/components/images/funcionalidades/Mapa.jpeg")}
                className="border border-gray-500 bg-[var(--color-popover)] dark:bg-[var(--color-popover)] rounded-xl shadow-md p-4 mb-2 w-[400px] ml-auto text-left"
              >
                <div className="flex items-center mb-5">
                  <div className="bg-purple-100 dark:bg-blue-900 p-3 rounded-lg mr-4">
                    <Map className="w-6 h-6 text-purple-600 dark:text-blue-200" />
                  </div>
                  <h3 className="text-xl font-bold text-white dark:text-gray-100">Mapa de Calor</h3>
                </div>
                <p className="text-white dark:text-white">
                  Visualize o desempenho do comércio exterior de cada estado brasileiro em um mapa de calor dinâmico.
                </p>
              </button>
            </div>
          </div>
        </section>




        {/* 
          FAQ 
          (Accordion simples de perguntas)
        */}
        <section id="faq" className="w-full py-20">
          <FAQ />
        </section>

        {/* 
          Sobre nós 
          (Texto falando da equipe AdaLove + logo)
        */}
        <section id="sobre" className="w-full py-20">
          {/* Título alinhado à esquerda e mais próximo */}
          <div className="max-w-5xl mx-auto mb-6 text-left">
          <div>
            <style>
              {`
                .about-title {
                  color: #9B7EBD;
                }
                .dark .about-title {
                  color: #8471FF;
                }
              `}
            </style>

            <h2 className="about-title text-3xl font-bold mb-0">
              Sobre nós
            </h2>
          </div>
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
              <div>
                <div className="flex items-center space-x-2 text-base">
                  <h4 className="text-[var(--color-primary)] text-3xl font-bold mb-0 mt-2">Nossa Equipe:</h4>
                </div>
                <div className="mt-3 flex -space-x-2 relative">
                  {[
                    { src: "src/components/images/adateam/angelina.jpg", alt: "Angelina Borroni", link: "https://github.com/borroniff" },
                    { src: "src/components/images/adateam/maria.jpg", alt: "Maria Fernanda", link: "https://github.com/Madhs31" },
                    { src: "src/components/images/adateam/matheus.jpg", alt: "Matheus Germano", link: "https://github.com/m-germano" },
                    { src: "src/components/images/adateam/ramon.jpg", alt: "Ramon Amorim", link: "https://github.com/ramonads42" },
                    { src: "src/components/images/adateam/raphaela.jpeg", alt: "Raphaela Monteiro", link: "https://github.com/raphaelamonteiro" },
                    { src: "src/components/images/adateam/renan.jpg", alt: "Renan Tomasi", link: "https://github.com/renan21-tg" },
                    { src: "src/components/images/adateam/vitor.jpg", alt: "Vitor Ribeiro", link: "https://github.com/ribeirovitor04" },
                  ].map((member, index) => (
                    <a
                      key={index}
                      href={member.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <img
                        className="h-14 w-14 rounded-full object-cover mb-2 ring-2 ring-white transition-transform duration-300 ease-in-out hover:scale-150 hover:z-20 hover:shadow-lg"
                        src={member.src}
                        alt={member.alt}
                      />
                    </a>
                  ))}
                </div>
              </div>
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
      </main>

      {/* 
        Rodapé - Posicionado no final da página ocupando toda a largura
      */}
      <footer className="w-full text-sm py-6 mt-10 text-white bg-[#6C4D8D] dark:bg-[#8471FF]">
        <div className="flex flex-col md:flex-row justify-between items-center w-full mx-auto px-4">
          <p>© {new Date().getFullYear()} AdaLove - Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <img src="/src/components/images/logo-cps.png" alt="CPS" className="h-12" />
            <img src="/src/components/images/bannerAdaLove.png" alt="AdaLove Mini" className="h-12" />
          </div>
        </div>
      </footer>
    </>
  );
}
