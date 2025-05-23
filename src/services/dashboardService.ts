export interface DataDashboardProduto {
  year: string;
  soja_import: number;
  ferro_import: number;
  oleo_import: number;
  soja_export: number;
  ferro_export: number;
  oleo_export: number;
}

export interface DadosExportacaoEstado {
  label: string;
  value: number;
}

export const getDataDashboardProdutos = (): DataDashboardProduto[] => [
  {
    year: "2014",
    soja_import: 24000,
    ferro_import: 18000,
    oleo_import: 4500,
    soja_export: 26000,
    ferro_export: 19000,
    oleo_export: 4700,
  },
  {
    year: "2015",
    soja_import: 25000,
    ferro_import: 19000,
    oleo_import: 4700,
    soja_export: 27000,
    ferro_export: 20000,
    oleo_export: 4900,
  },
  {
    year: "2016",
    soja_import: 26000,
    ferro_import: 20000,
    oleo_import: 4900,
    soja_export: 28000,
    ferro_export: 21000,
    oleo_export: 5100,
  },
  {
    year: "2017",
    soja_import: 27000,
    ferro_import: 22000,
    oleo_import: 5200,
    soja_export: 29000,
    ferro_export: 23000,
    oleo_export: 5400,
  },
  {
    year: "2018",
    soja_import: 28000,
    ferro_import: 21000,
    oleo_import: 5800,
    soja_export: 30000,
    ferro_export: 22000,
    oleo_export: 6000,
  },
  {
    year: "2019",
    soja_import: 29000,
    ferro_import: 23000,
    oleo_import: 5600,
    soja_export: 31000,
    ferro_export: 24000,
    oleo_export: 6200,
  },
  {
    year: "2020",
    soja_import: 32000,
    ferro_import: 25000,
    oleo_import: 5900,
    soja_export: 33000,
    ferro_export: 26000,
    oleo_export: 6500,
  },
  {
    year: "2021",
    soja_import: 31000,
    ferro_import: 27000,
    oleo_import: 6200,
    soja_export: 34000,
    ferro_export: 28000,
    oleo_export: 6700,
  },
  {
    year: "2022",
    soja_import: 35000,
    ferro_import: 29000,
    oleo_import: 6400,
    soja_export: 36000,
    ferro_export: 30000,
    oleo_export: 6900,
  },
  {
    year: "2023",
    soja_import: 37000,
    ferro_import: 31000,
    oleo_import: 6700,
    soja_export: 38000,
    ferro_export: 32000,
    oleo_export: 7100,
  },
  {
    year: "2024",
    soja_import: 39000,
    ferro_import: 33000,
    oleo_import: 7000,
    soja_export: 40000,
    ferro_export: 34000,
    oleo_export: 7300,
  },
];

export const getDadosExportacaoEstados = (
  ano: string
): DadosExportacaoEstado[] => {
  const base = {
    "2014": [120, 80, 70, 50, 40],
    "2015": [125, 85, 72, 52, 42],
    "2016": [130, 86, 73, 53, 43],
    "2017": [135, 87, 74, 54, 44],
    "2018": [140, 88, 75, 55, 45],
    "2019": [145, 89, 76, 56, 46],
    "2020": [150, 90, 77, 57, 47],
    "2021": [155, 91, 78, 58, 48],
    "2022": [160, 92, 79, 59, 49],
    "2023": [165, 93, 80, 60, 50],
    "2024": [170, 94, 81, 61, 51],
  }[ano] ?? [0, 0, 0, 0, 0];

  return [
    { label: "SP", value: base[0] * 1_000_000 },
    { label: "MG", value: base[1] * 1_000_000 },
    { label: "RJ", value: base[2] * 1_000_000 },
    { label: "RS", value: base[3] * 1_000_000 },
    { label: "PR", value: base[4] * 1_000_000 },
  ];
};

export const getDadosImportacaoEstados = (
  ano: string
): DadosExportacaoEstado[] => {
  const base = {
    "2014": [110, 75, 68, 48, 38],
    "2015": [115, 78, 70, 49, 39],
    "2016": [120, 80, 71, 50, 40],
    "2017": [125, 82, 72, 51, 41],
    "2018": [130, 84, 73, 52, 42],
    "2019": [135, 86, 74, 53, 43],
    "2020": [140, 88, 75, 54, 44],
    "2021": [145, 90, 76, 55, 45],
    "2022": [150, 92, 77, 56, 46],
    "2023": [155, 94, 78, 57, 47],
    "2024": [160, 96, 79, 58, 48],
  }[ano] ?? [0, 0, 0, 0, 0];

  return [
    { label: "SP", value: base[0] * 1_000_000 },
    { label: "MG", value: base[1] * 1_000_000 },
    { label: "RJ", value: base[2] * 1_000_000 },
    { label: "RS", value: base[3] * 1_000_000 },
    { label: "PR", value: base[4] * 1_000_000 },
  ];
};
