// src/pages/LandingPage.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { useState } from 'react';

import { Link } from "react-router-dom"; // Se estiver usando Next.js, troca para "next/link"
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher"; // Botão de tema

import { ChevronDown, LayoutDashboard, Map, Search} from 'lucide-react';


export default function LandingPage() {
  const [activeIndex, setActiveIndex] = useState(null);   // Estado para o FAQ
    const toggleAnswer = (index) => {     // Função para abrir e fechar as perguntas do FAQ

      setActiveIndex(activeIndex === index ? null : index); // Se a resposta já está aberta, fecha; senão, abre
    };
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
          <section id="funcionalidades" className="w-full py-20">
          <div className="max-w-6xl mx-auto px-6">
              <h2 className="text-6xl font-bold text-center mb-16 text-purple-600 dark:text-purple-400">
             Funcionalidades do Produto
              </h2>
              {/* Card Dashboard Interativo */}
              <div className="dark:bg-gray-800 rounded-xl shadow-md p-6 mb-2">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg mr-4">
                    <LayoutDashboard className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Dashboard Interativo</h3>
                </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Acesse gráficos e visualizações dinâmicas que facilitam a interpretação dos dados de importação e exportação dos estados brasileiros. Identifique tendências e tome decisões estratégicas com base em informações precisas.
                  </p>
                </div>
                {/* Imagem do dashboard*/}
                <div className="md:w-1/1 mb-8">
                  <img 
                    src="src/components/images/funcionalidades/DashImg.png" 
                    alt="Dashboard Interface" 
                    className="w-full h-auto object-cover rounded-xl shadow-lg" 
                  />
                </div>
              {/* Card Busca por NCM */}
              <div className=" dark:bg-gray-800 rounded-xl shadow-md p-6 mb-2">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg mr-4">
                    <Search className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Busca por NCM</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Busca de carga por meio do código NCM (Nomenclatura Comum do Mercosul).
                </p>
              </div>

            {/* Imagem do dashboard*/}
            <div className="md:w-1/1 mb-8">
              <img 
                src="src/components/images/funcionalidades/NCMImg.png" 
                alt="Dashboard Interface" 
                className="w-full h-auto object-cover rounded-xl shadow-lg" 
              />
            </div>

                {/* Card Mapa de Calor */}
          <div className=" dark:bg-gray-800 rounded-xl shadow-md p-6 mb-2">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg mr-4 ">
                  <Map className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">Mapa de Calor</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Visualize o desempenho do comércio exterior de cada estado brasileiro em um mapa de calor dinâmico, onde as cores representam variações nos volumes de importação e exportação.
                </p>
              </div>
          <div className="md:w-1/1">
              <img 
                src="src/components/images/funcionalidades/MapImg.png" 
                alt="Dashboard Interface" 
                className="w-full h-auto object-cover rounded-xl shadow-lg" 
              />
            </div>
        </div>
        </section>

      {/* 
        FAQ 
        (Accordion simples de perguntas)
      */}
    <section id="faq" className="w-full py-20">
      <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-6xl font-bold text-center mb-12 text-purple-600">
            Dúvidas Frequentes (FAQ)
          </h2>
          
          <div className="space-y-4">
            {/* Pergunta 1 */}
  <div className="border border-gray-300 rounded-lg overflow-hidden">
    <div className="flex justify-between p-4 cursor-pointer bg-white" onClick={() => toggleAnswer(0)}>
      <h3 className="text-lg font-medium text-gray-700">Quais dados estão disponíveis na plataforma?</h3>
      <button className="text-gray-500">
      <ChevronDown className="h-6 w-6" />
      </button>
    </div>
    <div className={`p-4 bg-white border-t border-gray-200 ${activeIndex === 0 ? 'block' : 'hidden'}`}>
      <p className="text-gray-600">
        A plataforma AdaTrade disponibiliza dados de comércio exterior do Brasil, incluindo estatísticas de balança comercial de todos os estados brasileiros, dados históricos de 2014 a 2024, classificação por meio de transporte, pesquisa por código NCM, e tendências de crescimento ou declínio.
      </p>
    </div>
  </div>
  
  {/* Pergunta 2 */}
  <div className="border border-gray-300 rounded-lg overflow-hidden">
    <div className="flex justify-between p-4 cursor-pointer bg-white" onClick={() => toggleAnswer(1)}>
      <h3 className="text-lg font-medium text-gray-700">Posso acessar o AdaTrade gratuitamente?</h3>
      <button className="text-gray-500">
      <ChevronDown className="h-6 w-6" />
      </button>
    </div>
    <div className={`p-4 bg-white border-t border-gray-200 ${activeIndex === 1 ? 'block' : 'hidden'}`}>
      <p className="text-gray-600">
        Sim! O AdaTrade é uma plataforma gratuita desenvolvida como projeto acadêmico pela equipe AdaLove da FATEC - Prof. Jessen Vidal. Nosso objetivo é democratizar o acesso aos dados de comércio exterior brasileiro.
      </p>
    </div>
  </div>
  
  {/* Pergunta 3 */}
  <div className="border border-gray-300 rounded-lg overflow-hidden">
    <div className="flex justify-between p-4 cursor-pointer bg-white" onClick={() => toggleAnswer(2)}>
      <h3 className="text-lg font-medium text-gray-700">Como posso utilizar os dados do AdaTrade para meu negócio?</h3>
      <button className="text-gray-500">
      <ChevronDown className="h-6 w-6" />

      </button>
    </div>
    <div className={`p-4 bg-white border-t border-gray-200 ${activeIndex === 2 ? 'block' : 'hidden'}`}>
      <p className="text-gray-600">
      Os dados do AdaTrade permitem identificar tendências de mercado, comparar o desempenho comercial entre estados e realizar análises detalhadas por meio de visualizações interativas e exportação para ferramentas como PowerBI. Pesquise por NCM para acessar informações específicas sobre produtos e utilize nosso mapa interativo para compreender fluxos comerciais estratégicos.
      </p>
              </div>
            </div>
          </div>
        </div>
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
