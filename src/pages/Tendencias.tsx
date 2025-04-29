import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import Adakin from "@/components/images/Adakin.png";

const NupPage = () => {

  return (
    <div>
      {/* Topo com título e barra de busca */}
      <div className="flex justify-between items-center mt-10 mb-10 flex-wrap gap-4 px-10">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">
            Pages / Tendências
          </p>
          <h1 className="text-4xl font-bold">Projeções Futuras</h1>
        </div>

        {/* Apenas o ThemeSwitcher permanece aqui */}
        <div className="flex items-center space-x-6 bg-[var(--color-card)] rounded-3xl px-6 py-3 shadow-lg">
          <ThemeSwitcher />
        </div>
      </div>

      {/* Container com os dois cards */}
      <div className="flex gap-6 px-10">
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="text-left h-[150px] w-[1150px] bg-[var(--color-card)] rounded-xl p-4 mb-6">
            <h1 className="text-lg font-semibold text-[var(--color-primary)] mb-1 group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
              Previsão do VLFOB de Exportações e Importações
            </h1>
            <p className="text-wrap text-lg text-justify"> A análise de VLFOB (Valor Livre a Bordo) de exportações e importações não se resume apenas ao presente; Ao integrar previsões de séries temporais, nossa ferramenta oferece a capacidade de <strong> antecipar o futuro do comércio internacional</strong>, ajudando a traçar estratégias de longo prazo e identificar tendências emergentes com uma visão mais clara.</p>
          </div>
        </div>
      </div>

      {/* Container para o Card 2 */}
      <div className="flex gap-6 px-10">
        <div className="flex-1 grid grid-cols-2 gap-6">
          {/* Card 2 */}
          <div className="text-left h-[250px] w-[1150px] bg-[var(--color-card)] rounded-xl p-4 mb-6">
            <h1 className="text-lg font-semibold text-[var(--color-primary)] mb-1 group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
              O poder da previsão de séries temporais
            </h1>
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <p className="text-wrap text-lg text-justify"> - Aumento ou queda nas importações, o que pode refletir mudanças na demanda interna ou nas condições econômicas de um país</p>
                <p className="text-wrap text-lg text-justify">  - Riscos e oportunidades no mercado local, já que as flutuações no valor das importações podem estar associadas a mudanças nas políticas comerciais ou ao poder de compra do consumidor.</p>
                <p className="text-wrap text-lg text-justify">  - Forças do consumo interno e o nível de dependência de produtos estrangeiros.</p>
              </div>
              <img
                src={Adakin} className="w-[230px] h-[340px] object-contain rounded-md mt-[-90px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Container para os Card 3 e Card 4 */}
      <div className="flex gap-6 px-10">
        <div className="grid grid-cols-2 gap-6">
          {/* Card 3 */}
          <a href="https://colab.research.google.com/drive/1M0cWzzrpwnZbRXJI4HYNrpJnZlwg9gQK?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="text-center h-[110px] w-[550px] bg-[var(--color-card)] rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out group  mb-6">
              <h1 className="font-semibold text-[var(--color-primary)] mb-1 mt-7 group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
                Acesse as previsões de Importação
              </h1>
            </div>
          </a>

          {/* Card 4 */}
          <a href="https://colab.research.google.com/drive/1Pn47XHfCfix6KPFnPlyk3Cb0Aj9SaY3C?usp=sharing" target="_blank" rel="noopener noreferrer">
            <div className="ml-5 text-center h-[110px] w-[550px] bg-[var(--color-card)] rounded-xl p-4 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out group mb-6">
              <h1 className="font-semibold text-[var(--color-primary)] mb-1 mt-7 group-hover:text-purple-500 dark:group-hover:text-white transition-colors duration-300">
                Acesse as previsões de Exportação
              </h1>
            </div>
          </a>

        </div>
      </div>



    </div>




  );
};
export default NupPage;
