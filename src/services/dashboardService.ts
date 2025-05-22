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
  ];
  
  export const getDadosExportacaoEstados = (): DadosExportacaoEstado[] => [
    { label: "SP", value: 120000000 },
    { label: "MG", value: 89000000 },
    { label: "RJ", value: 76000000 },
    { label: "RS", value: 54000000 },
    { label: "PR", value: 47000000 },
  ];
  