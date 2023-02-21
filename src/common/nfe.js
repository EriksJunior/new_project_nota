export const modelos = [
  { value: "1", tipo: "NF-e" },
  { value: "2", tipo: "NFC-e" },
  { value: "3", tipo: "CCe" },
  { value: "4", tipo: "MDF-e" },
]

export const finalidades = [
  { value: "1", tipo: "Normal" },
  { value: "4", tipo: "Devolução" },
]

export const operacoes = [
  { value: "1", tipo: "Saída" },
  { value: "0", tipo: "Entrada" },
]

export const ambientes = [
  { value: "1", tipo: "Produção" },
  { value: "2", tipo: "Homologação" },
]

export const consumidorFinalNfe = [
  { value: "1", text: "Sim" },
  { value: "0", text: "Não" },
]

export const constribuinte = [
  { value: "1", tipo: "1 - Contribuinte ICMS" },
  { value: "2", tipo: "2 - Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS" },
  { value: "9", tipo: "9 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS." }
]

export const presenca = [
  { value: "0", tipo: "0 - Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste)" },
  { value: "1", tipo: "1 - Operação presencial" },
  { value: "2", tipo: "2 - Operação não presencial, pela Internet" },
  { value: "3", tipo: "3 - Operação não presencial, Teleatendimento" },
  { value: "4", tipo: "4 - NFC-e em operação com entrega a domicílio" },
  { value: "5", tipo: "5 - Operação presencial, fora do estabelecimento" },
  { value: "9", tipo: "9 - Operação não presencial, outros" },
]

export const intermediador = [
  { value: "0", tipo: "0 - Operação sem intermediador (em site ou plataforma própria)" },
  { value: "1", tipo: "1 - Operação em site ou plataforma de terceiros (intermediadores/marketplace)" },
]

export const pagamaneto = [
  { value: "0", tipo: "0 - Pagamento à vista" },
  { value: "1", tipo: "1 - Pagamento a prazo" },
]

export const formaPagamento = [
  { value: "01", tipo: "01 - Dinheiro" },
  { value: "02", tipo: "02 - Cheque" },
  { value: "03", tipo: "03 - Cartão de Crédito" },
  { value: "04", tipo: "04 - Cartão de Débito" },
  { value: "05", tipo: "05 - Crédito Loja" },
  { value: "10", tipo: "10 - Vale Alimentação" },
  { value: "11", tipo: "11 - Vale Refeição" },
  { value: "12", tipo: "12 - Vale Presente" },
  { value: "13", tipo: "13 - Vale Combustível" },
  { value: "14", tipo: "14 - Duplicata Mercantil" },
  { value: "15", tipo: "15 - Boleto Bancário" },
  { value: "16", tipo: "16 - Depósito Bancário" },
  { value: "17", tipo: "17 - Pagamento Instantâneo (PIX)" },
  { value: "18", tipo: "18 - Transferência bancária, Carteira Digital" },
  { value: "19", tipo: "19 - Programa de fidelidade, Cashback, Crédito Virtual" },
  { value: "90", tipo: "90 - Sem pagamento" },
  { value: "99", tipo: "99 - Outros" },
]