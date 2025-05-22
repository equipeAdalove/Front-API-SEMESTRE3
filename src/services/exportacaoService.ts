// src/services/exportacaoService.ts

export const exportacaoService = {
  getDataExportacao() {
    return [
      { year: "2014", valorAgregado: 120000, quilograma: 160000 },
      { year: "2015", valorAgregado: 980000, quilograma: 180000 },
      { year: "2016", valorAgregado: 250000, quilograma: 230000 },
      { year: "2017", valorAgregado: 900000, quilograma: 260000 },
      { year: "2018", valorAgregado: 300000, quilograma: 310000 },
      { year: "2019", valorAgregado: 870000, quilograma: 290000 },
      { year: "2020", valorAgregado: 400000, quilograma: 370000 },
      { year: "2021", valorAgregado: 950000, quilograma: 330000 },
      { year: "2022", valorAgregado: 280000, quilograma: 390000 },
    ];
  },

  getPieData() {
    return [
      { name: "Marítima", value: 63 },
      { name: "Aérea", value: 25 },
      { name: "Outras", value: 12 },
    ];
  },

  getMunicipiosData() {
    return [
      { municipio: "Santos – SP", valor: "6.681.393.984" },
      { municipio: "São Paulo – SP", valor: "5.213.719.447" },
      { municipio: "São Bernardo do Campo – SP", valor: "3.738.399.961" },
      { municipio: "São José dos Campos – SP", valor: "3.680.199.856" },
      { municipio: "Piracicaba – SP", valor: "3.159.969.189" },
      { municipio: "Ilhabela – SP", valor: "2.618.590.901" },
    ];
  },

  getDadosProdutos() {
    return [
      {
        name: "Açúcares e Melaços",
        valor: "US$ 11.600",
        variacao: "19,6%",
        participacao: "16%",
      },
      {
        name: "Óleos combustíveis de petróleo ou...",
        valor: "US$ 862",
        variacao: "18,6%",
        participacao: "8,9%",
      },
      {
        name: "Sucos de Frutas ou de vegetais",
        valor: "US$ 573",
        variacao: "40,6%",
        participacao: "5,9%",
      },
      {
        name: "Demais produtos da indústria de...",
        valor: "US$ 438",
        variacao: "-8,69%",
        participacao: "4,5%",
      },
      {
        name: "Veículos automóveis de passageiros",
        valor: "US$ 424",
        variacao: "28,4%",
        participacao: "4,4%",
      },
    ];
  },
};
