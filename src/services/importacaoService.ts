// src/services/importacaoService.ts

export const importacaoService = {
  getDataImportacao: () => [
    { year: "2014", valorAgregado: 32000, quilograma: 260 },
    { year: "2015", valorAgregado: 18000, quilograma: 220 },
    { year: "2016", valorAgregado: 47000, quilograma: 210 },
    { year: "2017", valorAgregado: 25000, quilograma: 310 },
    { year: "2018", valorAgregado: 60000, quilograma: 280 },
    { year: "2019", valorAgregado: 42000, quilograma: 430 },
    { year: "2020", valorAgregado: 70000, quilograma: 390 },
    { year: "2021", valorAgregado: 30000, quilograma: 500 },
    { year: "2022", valorAgregado: 65000, quilograma: 250 },
  ],

  getPieData: () => [
    { name: "Marítima", value: 52 },
    { name: "Rodoviária", value: 33 },
    { name: "Aérea", value: 9 },
    { name: "Fluvial", value: 4 },
    { name: "Ferroviária", value: 2 },
  ],

  getMunicipiosData: () => [
    { municipio: "Uberlândia – MG", valor: "4.789.456.123" },
    { municipio: "Belo Horizonte – MG", valor: "4.203.112.870" },
    { municipio: "Contagem – MG", valor: "3.865.900.543" },
    { municipio: "Betim – MG", valor: "3.441.777.210" },
    { municipio: "Juiz de Fora – MG", valor: "2.992.311.407" },
    { municipio: "Montes Claros – MG", valor: "2.478.908.152" },
  ],

  getDadosProdutos: () => [
    {
      name: "Soja em grãos",
      valor: "US$ 28.300",
      variacao: "12,5%",
      participacao: "22%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 21.500",
      variacao: "9,8%",
      participacao: "16,7%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.780",
      variacao: "-3,4%",
      participacao: "4,5%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.900",
      variacao: "6,1%",
      participacao: "6,1%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.200",
      variacao: "15,2%",
      participacao: "4,8%",
    },
  ],
};
