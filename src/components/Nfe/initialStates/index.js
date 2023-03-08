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
  classe_imposto: "",
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
  forma_pagamento: "01",
  presenca: "1",
  modalidade_frete: "9",
  frete: "0",
  desconto: "0",
  total: "0,00",
  intermediador: "",
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

export const INITIAL_VALUE_NAV_ITEMS = {
  produto: true,
  cliente: false,
  pedido: true,
  transporte: true,
}

export const INITIAL_STATE_CLIENTE_NFE = {
  id: "",
  nome: "",
  cpfCnpj: "",
  ie: "",
  endereco: "",
  numero: "",
  complemento: "",
  bairro: "",
  cidade: "",
  uf: "",
  cep: "",
  telefone: "",
  celular: "",
  email: "",
  dataNascimento: "",
  observacao: "",
  consumidor_final: "0",
  contribuinte: "9"
}

export const INITIAL_STATE_FATURA_NFE = {
  numero: "",
  valor: "",
  valor_liquido: "",
  desconto: ""
}

export const INITIAL_STATE_PARCELA_NFE = {
  id: "",
  idNota: "",
  tipo: "entrada",
  idCliente: "",
  idFormaPagamento: "c33df031-a6a0-4876-81b9-9c3b2f0ea986",
  valorTotal: "",
  valorPago: "0",
  valorRestante: "0",
  data: "",
}