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
  dataVenda: DateTime.local().toFormat('yyyy-MM-dd'),
  status: "",
  dadosAdicionais: "",
}


export const INITIAL_STATE_SEARCH = {
  text: "",
  filter: "nome",
  startDate: "",
  endDate: "",
}


export const INITIAL_VALUE_NAV_ITEMS = {
  produto: true,
  cliente: false,
  pedido: true,
}

export const INITIAL_STATE_CLIENTE = {
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

export const INITIAL_STATE_PARCELA = {
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