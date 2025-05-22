type NcmKeys = "491110" | "100610" | "271000";

const estados = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const gerarValorSimulado = (min: number, max: number) =>
  Math.round(min + Math.random() * (max - min));

const dadosExportacaoPorNcm: Record<
  NcmKeys,
  Record<string, { exportacoesTotais: number; produtoDestaque: string }>
> = {
  "491110": estados.reduce((acc, estado) => {
    acc[estado] = {
      exportacoesTotais: gerarValorSimulado(100, 5500),
      produtoDestaque: "Impressos Publicitários",
    };
    return acc;
  }, {} as Record<string, { exportacoesTotais: number; produtoDestaque: string }>),

  "100610": estados.reduce((acc, estado) => {
    acc[estado] = {
      exportacoesTotais: gerarValorSimulado(50, 4000),
      produtoDestaque: "Arroz",
    };
    return acc;
  }, {} as Record<string, { exportacoesTotais: number; produtoDestaque: string }>),

  "271000": estados.reduce((acc, estado) => {
    acc[estado] = {
      exportacoesTotais: gerarValorSimulado(200, 5300),
      produtoDestaque: "Petróleo",
    };
    return acc;
  }, {} as Record<string, { exportacoesTotais: number; produtoDestaque: string }>),
};

export function buscarNcm(codigoNcm: string) {
  const descricoesNcm: Record<NcmKeys, string> = {
    "491110": "Impressos publicitários, catálogos comerciais e semelhantes",
    "100610": "Arroz",
    "271000": "Óleos de petróleo ou de minerais betuminosos",
  };

  if ((codigoNcm as NcmKeys) in descricoesNcm) {
    return {
      codigo: codigoNcm as NcmKeys,
      descricao: descricoesNcm[codigoNcm as NcmKeys],
    };
  }
  return null;
}

export function buscarDadosComparacao(
  codigoNcm: string,
  estadoA: string,
  estadoB: string
) {
  if (!["491110", "100610", "271000"].includes(codigoNcm)) return [];

  const dadosPorEstado = dadosExportacaoPorNcm[codigoNcm as NcmKeys];

  return Array.from({ length: 11 }).map((_, index) => {
    const year = (2014 + index).toString();

    const baseA = dadosPorEstado[estadoA]?.exportacoesTotais ?? 0;
    const baseB = dadosPorEstado[estadoB]?.exportacoesTotais ?? 0;

    return {
      year,
      A: Math.round(baseA * (0.8 + 0.04 * index)),
      B: Math.round(baseB * (0.8 + 0.03 * index)),
    };
  });
}

export function buscarInfoCard(
  codigoNcm: string,
  estado: string
): { exportacoesTotais: number; produtoDestaque: string } | null {
  if (!["491110", "100610", "271000"].includes(codigoNcm)) return null;
  return dadosExportacaoPorNcm[codigoNcm as NcmKeys][estado] ?? null;
}
