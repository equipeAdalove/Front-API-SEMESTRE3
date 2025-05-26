import axios from "axios";

const paisesMap: Record<string, string> = {};

export async function carregarPaises(): Promise<void> {
  try {
    const response = await axios.get("/csv/paises.csv", {
      baseURL: typeof window !== "undefined" ? window.location.origin : "",
      responseType: "arraybuffer",
    });

    const decoder = new TextDecoder("utf-8");
    const texto = decoder.decode(response.data);

    const linhas = texto.split("\n");
    linhas.forEach((linha: string) => {
      const [CO_PAIS, NO_PAIS] = linha.trim().split(";");
      if (CO_PAIS && NO_PAIS && !linha.startsWith("CO_PAIS")) {
        paisesMap[CO_PAIS] = NO_PAIS;
      }
    });
  } catch (error) {
    console.error("Erro ao carregar países:", error);
    throw new Error("Falha ao carregar dados dos países");
  }
}

export function getNomePais(codigo: string): string {
  return paisesMap[codigo] || `País (Código: ${codigo})`;
}
