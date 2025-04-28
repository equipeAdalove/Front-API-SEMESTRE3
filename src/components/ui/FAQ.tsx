import React, { JSX, useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string | JSX.Element; // Agora aceita tanto string quanto JSX.Element
}

const faqItems: FAQItem[] = [
    {
        question: "Quais dados estão disponíveis na plataforma?",
        answer: (
            <span>
                A plataforma AdaTrade disponibiliza dados de comércio exterior do
                Brasil, incluindo estatísticas de balança comercial de todos os estados
                brasileiros, dados históricos de 2014 a 2024, que também estão
                disponíveis nas &nbsp;
                <a
                    href="https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/estatisticas/base-de-dados-bruta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 underline hover:text-purple-800 dark:text-purple-400"
                >
                    bases públicas de comércio exterior
                </a>
                .
            </span>
        ),
    },
    {
        question: "Posso acessar o AdaTrade gratuitamente?",
        answer:
            "Sim! O AdaTrade é uma plataforma gratuita desenvolvida como projeto acadêmico pela equipe AdaLove da FATEC - Prof. Jessen Vidal. Nosso objetivo é democratizar o acesso aos dados de comércio exterior brasileiro.",
    },
    {
        question: "Como posso utilizar os dados do AdaTrade para meu negócio?",
        answer:
            "Os dados do AdaTrade permitem identificar tendências de mercado, comparar o desempenho comercial entre estados e realizar projeções futuras.",
    },
];

const FAQ: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section id="faq" className="w-full px-0">
            <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2
                    className="text-4xl sm:text-5xl font-bold text-center mb-12"
                    style={{ color: "var(--footer)" }}
                >
                    Dúvidas Frequentes (FAQ)
                </h2>


                <div className="w-full space-y-4">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className="w-full border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden transition-all duration-300"
                        >
                            <button
                                className="w-full flex justify-between items-center p-4 cursor-pointer bg-white dark:bg-gray-800 text-left"
                                onClick={() => toggleAnswer(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-100">
                                    {item.question}
                                </h3>
                                <ChevronDown
                                    className={`h-6 w-6 text-gray-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {activeIndex === index && (
                                <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-left">
                                    <p className="text-gray-600 dark:text-gray-300">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
