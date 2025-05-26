// types/ncm.d.ts

export interface NCMInfo {
  co_ncm: string;
  descricao: string;
  top_5_estados_exportadores: Array<{ valor: number; SG_UF_NCM: string }>;
  top_5_paises_destino: Array<{ valor: number; CO_PAIS: string }>;
  top_3_vias_transporte_export: Array<{ valor: number; CO_VIA: string }>;
  top_3_urfs_export: Array<{ valor: number; CO_URF: string }>;
  top_5_estados_importadores: Array<{ valor: number; SG_UF_NCM: string }>;
  top_5_paises_origem: Array<{ valor: number; CO_PAIS: string }>;
  top_3_vias_transporte_import: Array<{ valor: number; CO_VIA: string }>;
  top_3_urfs_import: Array<{ valor: number; CO_URF: string }>;
  vl_frete_total: string;
  vl_seguro_total: string;
  vl_frete_medio: string;
  vl_seguro_medio: string;
}

export interface NCMAnual {
  ano: number;
  co_ncm: string;
  vl_fob_exp: string;
  vl_fob_imp: string;
  kg_liquido_exp: string;
  kg_liquido_imp: string;
}

export interface NCMTotal {
  co_ncm: string;
  vl_fob_exp: string;
  vl_fob_imp: string;
  kg_liquido_exp: string;
  kg_liquido_imp: string;
  valor_agregado: string;
}

export interface NCMValorAgregado {
  co_ncm: string;
  valor_agregado: string;
}

export interface NCMValorAgregadoAnual {
  co_ncm: string;
  ano: number;
  valor_agregado_exp: string;
  valor_agregado_imp: string;
}

export interface Transacao {
  id: number;
  co_ano: number;
  co_mes: number;
  co_ncm: string;
  co_unid: number;
  co_pais: number;
  sg_uf_ncm: string;
  co_via: number;
  co_urf: number;
  qt_estat: number;
  kg_liquido: number;
  vl_fob: number;
  vl_frete?: number;
  vl_seguro?: number;
}

export interface TransacoesResponse {
  data: Transacao[];
  total: number;
  page: number;
  limit: number;
}

// Tipo para o objeto de países do CSV
export interface Pais {
  CO_PAIS: string;
  NO_PAIS: string;
}
