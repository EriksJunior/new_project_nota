import { DateTime } from 'luxon'

export const INITIAL_VALUE_PRODUTOS = {
  id: "",
  idProduto: "",
  idNota: "",
  codigo: "",
  ncm: "6109.10.00",
  cest: "28.038.00",
  quantidade: "1",
  unidade: "",
  peso: "",
  origem: "0",
  desconto: "0",
  subtotal: "0",
  total: "",
  classe_imposto: "REF63605935",
  informacoes_adicionais: "",
}

export const INITIAL_VALUE_PEDIDO = {
  id: "",
  ID: "", // Controle das solicitações de emissão por pedido ou ID de processamento.
  operacao: "1",
  natureza_operacao: "Venda de produção do estabelecimento",
  modelo: "1", //2 para NFC-e
  ambiente: "2", //2 para Homologação
  idCliente: "",
  finalidade: "1",
  url_notificacao: "teste",
  data_nfe: DateTime.local().toFormat('yyyy-MM-dd'),
  id_webmania: "",
  response: {
    chave: "",
    danfe: "",
    danfe_etiqueta: "",
    danfe_simples: "",
    log: {},
    modelo: "",
    motivo: "",
    nfe: "",
    serie: "",
    status: "",
    uuid: "",
    xml: ""
  },
  response_cancelamento: "",
  pagamento: "0",
  presenca: "1",
  modalidade_frete: "9",
  frete: "0",
  desconto: "0",
  total: "0",
  intermediador: "0",
  cnpj_intermediador: "",
  id_intermediador: "",
  despesas_acessorias: "0",
  informacoes_fisco: "",
  informacoes_complementares: "",
  status: "Não Enviada",
}

export const INITIAL_VALUE_RESPONSE_WEBMANIA = {
  chave: "",
  danfe: "",
  danfe_etiqueta: "",
  danfe_simples: "",
  log: "",
  modelo: "",
  motivo: "",
  nfe: "",
  serie: "",
  status: "",
  uuid: "",
  xml: "",
}

export const INITIAL_STATE_SEARCH = {
  text: "",
  filter: "nome",
  startDate: "",
  endDate: "",
}

export const INITIAL_VALUE_CANCEL_LEAF = {
  chave: "",
  motivo: "",
}