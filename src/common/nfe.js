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
  {value: "1", text: "Sim"},
  {value: "0", text: "Não"},
]

export const constribuinte = [
  {value: "1", tipo: "1 - Contribuinte ICMS"},
  {value: "2", tipo: "2 - Contribuinte isento de Inscrição no cadastro de Contribuintes do ICMS"},
  {value: "9", tipo: "9 - Não Contribuinte, que pode ou não possuir Inscrição Estadual no Cadastro de Contribuintes do ICMS."}
]