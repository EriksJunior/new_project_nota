import { DateTime } from 'luxon'

export const INITIAL_VALUE_PRODUTOS = {
  id: "",
  idProduto: "",
  idVenda: "",
  idFornecedor: "",
  quantidade: "1",
  valorTotal: "",
  dadosAdicionais: "",
  desconto: "0,00",
  subtotal: "0,00",
}

export const INITIAL_VALUE_PEDIDO = {
  id: "",
  idCliente: "",
  idFuncionario: "",
  tipo: "Venda",
  data: DateTime.local().toFormat('yyyy-MM-dd'),
  status: "",
  dadosAdicionais: "",
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
  idFormaPagamento: "",
  valorTotal: "",
  valorPago: "0",
  valorRestante: "0",
  data: "",
}