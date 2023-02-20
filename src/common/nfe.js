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
  {value: "0", tipo: "0 - Não se aplica (por exemplo, Nota Fiscal complementar ou de ajuste)"},
  {value: "1", tipo: "1 - Operação presencial"},
  {value: "2", tipo: "2 - Operação não presencial, pela Internet"},
  {value: "3", tipo: "3 - Operação não presencial, Teleatendimento"},
  {value: "4", tipo: "4 - NFC-e em operação com entrega a domicílio"},
  {value: "5", tipo: "5 - Operação presencial, fora do estabelecimento"},
  {value: "9", tipo: "9 - Operação não presencial, outros"},
]

export const intermediador = [
  {value: "0", tipo: "0 - Operação sem intermediador (em site ou plataforma própria)"},
  {value: "1", tipo: "1 - Operação em site ou plataforma de terceiros (intermediadores/marketplace)"},
]