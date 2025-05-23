// src/services/importacaoService.ts

type LineChartData = {
  year: string;
  valorAgregado: number;
  quilograma: number;
};

type PieData = {
  name: string;
  value: number;
};

type MunicipioData = {
  municipio: string;
  valor: string;
};

type Produto = {
  name: string;
  valor: string;
  variacao: string;
  participacao: string;
};

const dadosLineChart: LineChartData[] = [
  { year: "2014", valorAgregado: 32000, quilograma: 260 },
  { year: "2015", valorAgregado: 18000, quilograma: 220 },
  { year: "2016", valorAgregado: 47000, quilograma: 210 },
  { year: "2017", valorAgregado: 25000, quilograma: 310 },
  { year: "2018", valorAgregado: 60000, quilograma: 280 },
  { year: "2019", valorAgregado: 42000, quilograma: 430 },
  { year: "2020", valorAgregado: 70000, quilograma: 390 },
  { year: "2021", valorAgregado: 30000, quilograma: 500 },
  { year: "2022", valorAgregado: 65000, quilograma: 250 },
  { year: "2023", valorAgregado: 72000, quilograma: 270 },
  { year: "2024", valorAgregado: 80000, quilograma: 300 },
];

const pieDataPorAno: Record<string, PieData[]> = {
  "2014": [
    { name: "Marítima", value: 50 },
    { name: "Rodoviária", value: 30 },
    { name: "Aérea", value: 10 },
    { name: "Fluvial", value: 7 },
    { name: "Ferroviária", value: 3 },
  ],
  "2015": [
    { name: "Marítima", value: 48 },
    { name: "Rodoviária", value: 32 },
    { name: "Aérea", value: 11 },
    { name: "Fluvial", value: 6 },
    { name: "Ferroviária", value: 3 },
  ],
  "2016": [
    { name: "Marítima", value: 51 },
    { name: "Rodoviária", value: 29 },
    { name: "Aérea", value: 12 },
    { name: "Fluvial", value: 5 },
    { name: "Ferroviária", value: 3 },
  ],
  "2017": [
    { name: "Marítima", value: 53 },
    { name: "Rodoviária", value: 28 },
    { name: "Aérea", value: 10 },
    { name: "Fluvial", value: 6 },
    { name: "Ferroviária", value: 3 },
  ],
  "2018": [
    { name: "Marítima", value: 54 },
    { name: "Rodoviária", value: 30 },
    { name: "Aérea", value: 8 },
    { name: "Fluvial", value: 5 },
    { name: "Ferroviária", value: 3 },
  ],
  "2019": [
    { name: "Marítima", value: 52 },
    { name: "Rodoviária", value: 33 },
    { name: "Aérea", value: 9 },
    { name: "Fluvial", value: 4 },
    { name: "Ferroviária", value: 2 },
  ],
  "2020": [
    { name: "Marítima", value: 50 },
    { name: "Rodoviária", value: 35 },
    { name: "Aérea", value: 8 },
    { name: "Fluvial", value: 5 },
    { name: "Ferroviária", value: 2 },
  ],
  "2021": [
    { name: "Marítima", value: 53 },
    { name: "Rodoviária", value: 30 },
    { name: "Aérea", value: 10 },
    { name: "Fluvial", value: 4 },
    { name: "Ferroviária", value: 3 },
  ],
  "2022": [
    { name: "Marítima", value: 54 },
    { name: "Rodoviária", value: 32 },
    { name: "Aérea", value: 9 },
    { name: "Fluvial", value: 3 },
    { name: "Ferroviária", value: 2 },
  ],
  "2023": [
    { name: "Marítima", value: 55 },
    { name: "Rodoviária", value: 31 },
    { name: "Aérea", value: 8 },
    { name: "Fluvial", value: 4 },
    { name: "Ferroviária", value: 2 },
  ],
  "2024": [
    { name: "Marítima", value: 52 },
    { name: "Rodoviária", value: 33 },
    { name: "Aérea", value: 9 },
    { name: "Fluvial", value: 4 },
    { name: "Ferroviária", value: 2 },
  ],
};

const municipiosPorAno: Record<string, MunicipioData[]> = {
  "2014": [
    { municipio: "Uberlândia – MG", valor: "4.100.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "3.900.000.000" },
    { municipio: "Contagem – MG", valor: "3.500.000.000" },
    { municipio: "Betim – MG", valor: "3.100.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "2.800.000.000" },
    { municipio: "Montes Claros – MG", valor: "2.400.000.000" },
  ],
  "2015": [
    { municipio: "Uberlândia – MG", valor: "4.200.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.000.000.000" },
    { municipio: "Contagem – MG", valor: "3.600.000.000" },
    { municipio: "Betim – MG", valor: "3.200.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "2.900.000.000" },
    { municipio: "Montes Claros – MG", valor: "2.500.000.000" },
  ],
  "2016": [
    { municipio: "Uberlândia – MG", valor: "4.300.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.100.000.000" },
    { municipio: "Contagem – MG", valor: "3.700.000.000" },
    { municipio: "Betim – MG", valor: "3.300.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.000.000.000" },
    { municipio: "Montes Claros – MG", valor: "2.600.000.000" },
  ],
  "2017": [
    { municipio: "Uberlândia – MG", valor: "4.400.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.200.000.000" },
    { municipio: "Contagem – MG", valor: "3.800.000.000" },
    { municipio: "Betim – MG", valor: "3.400.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.100.000.000" },
    { municipio: "Montes Claros – MG", valor: "2.700.000.000" },
  ],
  "2018": [
    { municipio: "Uberlândia – MG", valor: "4.500.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.300.000.000" },
    { municipio: "Contagem – MG", valor: "3.900.000.000" },
    { municipio: "Betim – MG", valor: "3.500.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.200.000.000" },
    { municipio: "Montes Claros – MG", valor: "2.800.000.000" },
  ],
  "2019": [
    { municipio: "Uberlândia – MG", valor: "4.600.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.400.000.000" },
    { municipio: "Contagem – MG", valor: "4.000.000.000" },
    { municipio: "Betim – MG", valor: "3.600.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.300.000.000" },
    { municipio: "Montes Claros – MG", valor: "2.900.000.000" },
  ],
  "2020": [
    { municipio: "Uberlândia – MG", valor: "4.700.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.500.000.000" },
    { municipio: "Contagem – MG", valor: "4.100.000.000" },
    { municipio: "Betim – MG", valor: "3.700.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.400.000.000" },
    { municipio: "Montes Claros – MG", valor: "3.000.000.000" },
  ],
  "2021": [
    { municipio: "Uberlândia – MG", valor: "4.800.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.600.000.000" },
    { municipio: "Contagem – MG", valor: "4.200.000.000" },
    { municipio: "Betim – MG", valor: "3.800.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.500.000.000" },
    { municipio: "Montes Claros – MG", valor: "3.100.000.000" },
  ],
  "2022": [
    { municipio: "Uberlândia – MG", valor: "4.900.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.700.000.000" },
    { municipio: "Contagem – MG", valor: "4.300.000.000" },
    { municipio: "Betim – MG", valor: "3.900.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.600.000.000" },
    { municipio: "Montes Claros – MG", valor: "3.200.000.000" },
  ],
  "2023": [
    { municipio: "Uberlândia – MG", valor: "5.000.000.000" },
    { municipio: "Belo Horizonte – MG", valor: "4.800.000.000" },
    { municipio: "Contagem – MG", valor: "4.400.000.000" },
    { municipio: "Betim – MG", valor: "4.000.000.000" },
    { municipio: "Juiz de Fora – MG", valor: "3.700.000.000" },
    { municipio: "Montes Claros – MG", valor: "3.300.000.000" },
  ],
  "2024": [
    { municipio: "Uberlândia – MG", valor: "4.789.456.123" },
    { municipio: "Belo Horizonte – MG", valor: "4.203.112.870" },
    { municipio: "Contagem – MG", valor: "3.865.900.543" },
    { municipio: "Betim – MG", valor: "3.441.777.210" },
    { municipio: "Juiz de Fora – MG", valor: "2.992.311.407" },
    { municipio: "Montes Claros – MG", valor: "2.478.908.152" },
  ],
};

const produtosPorAno: Record<string, Produto[]> = {
  "2014": [
    {
      name: "Soja em grãos",
      valor: "US$ 20.000",
      variacao: "5,0%",
      participacao: "20%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 18.000",
      variacao: "4,2%",
      participacao: "18%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 4.500",
      variacao: "-1,0%",
      participacao: "5%",
    },
    {
      name: "Celulose",
      valor: "US$ 6.000",
      variacao: "2,0%",
      participacao: "7%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 5.000",
      variacao: "3,5%",
      participacao: "4%",
    },
  ],
  "2015": [
    {
      name: "Soja em grãos",
      valor: "US$ 21.000",
      variacao: "6,0%",
      participacao: "21%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 18.500",
      variacao: "3,5%",
      participacao: "17%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 4.600",
      variacao: "-0,5%",
      participacao: "5%",
    },
    {
      name: "Celulose",
      valor: "US$ 6.200",
      variacao: "3,0%",
      participacao: "7%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 5.200",
      variacao: "4,0%",
      participacao: "5%",
    },
  ],
  "2016": [
    {
      name: "Soja em grãos",
      valor: "US$ 22.500",
      variacao: "7,5%",
      participacao: "22%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 19.000",
      variacao: "4,0%",
      participacao: "16%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 4.700",
      variacao: "-0,8%",
      participacao: "4%",
    },
    {
      name: "Celulose",
      valor: "US$ 6.300",
      variacao: "2,5%",
      participacao: "6%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 5.500",
      variacao: "5,0%",
      participacao: "5%",
    },
  ],
  "2017": [
    {
      name: "Soja em grãos",
      valor: "US$ 24.000",
      variacao: "8,0%",
      participacao: "23%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 20.000",
      variacao: "5,0%",
      participacao: "16%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.000",
      variacao: "-1,5%",
      participacao: "5%",
    },
    {
      name: "Celulose",
      valor: "US$ 6.700",
      variacao: "3,0%",
      participacao: "7%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 5.700",
      variacao: "5,5%",
      participacao: "6%",
    },
  ],
  "2018": [
    {
      name: "Soja em grãos",
      valor: "US$ 25.500",
      variacao: "9,0%",
      participacao: "24%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 21.000",
      variacao: "6,0%",
      participacao: "17%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.400",
      variacao: "-2,0%",
      participacao: "5%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.100",
      variacao: "3,5%",
      participacao: "7%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.000",
      variacao: "6,0%",
      participacao: "6%",
    },
  ],
  "2019": [
    {
      name: "Soja em grãos",
      valor: "US$ 26.500",
      variacao: "10,0%",
      participacao: "23%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 21.200",
      variacao: "5,5%",
      participacao: "17%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.500",
      variacao: "-1,8%",
      participacao: "5%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.300",
      variacao: "3,8%",
      participacao: "7%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.100",
      variacao: "6,5%",
      participacao: "6%",
    },
  ],
  "2020": [
    {
      name: "Soja em grãos",
      valor: "US$ 27.000",
      variacao: "11,0%",
      participacao: "22%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 21.700",
      variacao: "6,2%",
      participacao: "17%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.600",
      variacao: "-2,2%",
      participacao: "5%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.500",
      variacao: "4,0%",
      participacao: "6%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.300",
      variacao: "7,0%",
      participacao: "6%",
    },
  ],
  "2021": [
    {
      name: "Soja em grãos",
      valor: "US$ 27.800",
      variacao: "12,0%",
      participacao: "22%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 22.000",
      variacao: "7,0%",
      participacao: "16%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.700",
      variacao: "-3,0%",
      participacao: "4%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.800",
      variacao: "4,5%",
      participacao: "6%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.500",
      variacao: "8,0%",
      participacao: "5%",
    },
  ],
  "2022": [
    {
      name: "Soja em grãos",
      valor: "US$ 28.000",
      variacao: "12,3%",
      participacao: "22%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 21.800",
      variacao: "6,8%",
      participacao: "17%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.600",
      variacao: "-2,5%",
      participacao: "5%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.900",
      variacao: "5,0%",
      participacao: "6%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.600",
      variacao: "7,8%",
      participacao: "5%",
    },
  ],
  "2023": [
    {
      name: "Soja em grãos",
      valor: "US$ 28.500",
      variacao: "12,4%",
      participacao: "22%",
    },
    {
      name: "Minério de ferro",
      valor: "US$ 21.900",
      variacao: "7,0%",
      participacao: "17%",
    },
    {
      name: "Óleo de soja bruto",
      valor: "US$ 5.700",
      variacao: "-3,2%",
      participacao: "4%",
    },
    {
      name: "Celulose",
      valor: "US$ 7.950",
      variacao: "5,2%",
      participacao: "6%",
    },
    {
      name: "Carne bovina congelada",
      valor: "US$ 6.700",
      variacao: "8,2%",
      participacao: "5%",
    },
  ],
  "2024": [
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

export const importacaoService = {
  getDataImportacao: (ano?: string) => {
    if (ano) {
      return dadosLineChart.filter((d) => d.year === ano);
    }
    return dadosLineChart;
  },

  getPieData: (ano: string) => {
    return pieDataPorAno[ano] ?? pieDataPorAno["2024"];
  },

  getMunicipiosData: (ano: string) => {
    return municipiosPorAno[ano] ?? municipiosPorAno["2024"];
  },

  getDadosProdutos: (ano: string) => {
    return produtosPorAno[ano] ?? produtosPorAno["2024"];
  },
};
