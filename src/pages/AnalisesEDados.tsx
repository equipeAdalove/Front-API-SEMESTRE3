import { SquareArrowOutUpRight } from "lucide-react";
import ThemeSwitcher from "@/components/theme-provider/ButtonThemeSwitcher";
import { Button } from "@/components/ui/button";

export default function AnalisesEDados() {
    return (
        <main className="min-h-screen w-full p-6"
            style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-foreground)",
            }}>
            {/* Título e Breadcrumb */}
            <div className="flex justify-between items-center mb-10 flex-wrap gap-2">
                <div className="-mt-2">
                    <p className="text-sm text-[var(--muted-foreground)]">
                        Pages / Análises e Dados
                    </p>
                    <h1 className="text-4xl font-bold">Análises e Dados</h1>
                </div>
                <div className="ml-auto">
                    <ThemeSwitcher />
                </div>
            </div>

            {/* Dashboard do Power BI */}
            <section className="mb-10">
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    Visualize tendências, comparações e insights do comércio exterior brasileiro.
                </p>

                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg border"
                    style={{ borderColor: "var(--color-border)" }}>
                    <iframe
                        src="https://app.powerbi.com/view?r=eyJrIjoiY2UxNmY2NmMtZTc2My00ZDA1LTlhODYtNDk2MTY2Y2E2MWZmIiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9"
                        width="100%"
                        height="100%"
                        frameBorder="2"
                        allowFullScreen
                        title="Dashboard AdaTrade"
                    ></iframe>
                </div>
                <div className="left-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Button variant="ghost" className="w-full flex items-center gap-3 justify-start">
                        <SquareArrowOutUpRight style={{ transform: "scale(1.3)" }} />

                        <span className="text-sm:text-base">Acessar em outra guia</span>
                    </Button>
                </div>
            </section>

            {/* Seção de downloads */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Baixar Dados CSV</h2>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">
                    Acesse os dados em formato CSV organizados por categoria.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                        { label: "Exportações", href: "/downloads/exportacoes.csv" },
                        { label: "Importações", href: "/downloads/importacoes.csv" },
                    ].map((item, index) => (
                        <a key={index} href={item.href}
                            download className="p-4 bg-[var(--color-card)] border rounded-xl shadow-sm hover:shadow-md transition duration-200"
                            style={{ borderColor: "var(--color-border)" }}>
                            <span className="font-medium text-[var(--color-foreground)]">{item.label}</span>
                            <p className="text-xs text-[var(--muted-foreground)] mt-1"> Clique para baixar </p>
                        </a>
                    ))}
                </div>
            </section>
        </main>
    );
}
