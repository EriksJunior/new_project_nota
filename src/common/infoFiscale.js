export const tipoTributacao = [
  { value: "simples_nacional", tipo: "Simples Nacional" },
  { value: "tributacao_normal", tipo: "Tributação Normal" },
]

export const cenario = [
  { value: "saida_dentro_estado", tipo: "Saída dentro do estado" },
  {
    value: "saida_fora_estado",
    tipo: "Saída fora do estado",
  },
  {
    value: "entrada_dentro_estado",
    tipo: "Entrada dentro do estado",
  },
  {
    value: "entrada_fora_estado",
    tipo: "Entrada fora do estado",
  },
  { value: "saida_exterior", tipo: "Saída para o Exterior" },
  { value: "entrada_exterior", tipo: "Entrada do Exterior" },
]

export const tipoPessoa = [
  { value: "fisica", tipo: "Fisica" },
  { value: "juridica", tipo: "Juridica" },
  { value: "estrangeira", tipo: "Estrangeira" },
]

export const situacaoTributaria = [
  { value: "101", tipo: "101 - Tributada com permissão de crédito" },
  { value: "102", tipo: "102 - Tributada sem permissão de crédito" },
  {
    value: "103",
    tipo: "103 - Isenção do ICMS para faixa de receita bruta",
  },
  {
    value: "201",
    tipo: "201 - Tributada com permissão de crédito e com cobrança do ICMS por substituição tributária",
  },
  {
    value: "202",
    tipo: "202 - Tributada sem permissão de crédito e com cobrança do ICMS por substituição tributária",
  },
  {
    value: "203",
    tipo: "203 - Isenção do ICMS para faixa de receita bruta e com cobrança do ICMS por substituição tributária",
  },
  { value: "300", tipo: "300 - Imune" },
  { value: "400", tipo: "400 - Não tributada" },
  {
    value: "500",
    tipo: "500 - ICMS cobrado anteriormente por substituição tributária (substituído) ou por antecipação",
  },
  { value: "900", tipo: "900 - Outros" },
  { value: "00", tipo: "00 - Tributada integralmente" },
  {
    value: "10",
    tipo: "10 - Tributada e com cobrança do ICMS por substituição tributária",
  },
  { value: "20", tipo: "20 - Com redução da base de cálculo" },
  {
    value: "30",
    tipo: "30 - Isenta ou não tributada e com cobrança do ICMS por substituição tributária",
  },
  { value: "40", tipo: "40 - Isenta" },
  { value: "41", tipo: "41 - Não tributada" },
  { value: "50", tipo: "50 - Suspensão" },
  { value: "51", tipo: "51 - Diferimento" },
  {
    value: "60",
    tipo: "60 - ICMS cobrado anteriormente por substituição tributária",
  },
  {
    value: "70",
    tipo: "70 - Com redução de base de cálculo e cobrança do ICMS por substituição tributária",
  },
  { value: "90", tipo: "90 - Outros" },
]

export const motivoDesoneracao = [
  { value: "3", tipo: "3 - Uso na agropecuária" },
  { value: "9", tipo: "9 - Outros" },
  {
    value: "12",
    tipo: "12 - Órgão de fomento e desenvolvimento agropecuário",
  },
]

export const motivoDesoneracaoSt = [
  { value: "3", tipo: "3 - Uso na agropecuária" },
  { value: "9", tipo: "9 - Outros" },
  {
    value: "12",
    tipo: "12 - Órgão de fomento e desenvolvimento agropecuário",
  },
]

export const estados = [
  { value: "AC", tipo: "AC" },
  { value: "AL", tipo: "AL" },
  { value: "AP", tipo: "AP" },
  { value: "AM", tipo: "AM" },
  { value: "BA", tipo: "BA" },
  { value: "CE", tipo: "CE" },
  { value: "ES", tipo: "ES" },
  { value: "GO", tipo: "GO" },
  { value: "MA", tipo: "MA" },
  { value: "MT", tipo: "MT" },
  { value: "MS", tipo: "MS" },
  { value: "MG", tipo: "MG" },
  { value: "PA", tipo: "PA" },
  { value: "PB", tipo: "PB" },
  { value: "PR", tipo: "PR" },
  { value: "PE", tipo: "PE" },
  { value: "PI", tipo: "PI" },
  { value: "RJ", tipo: "RJ" },
  { value: "RN", tipo: "RN" },
  { value: "RS", tipo: "RS" },
  { value: "RO", tipo: "RO" },
  { value: "RR", tipo: "RR" },
  { value: "SC", tipo: "SC" },
  { value: "SP", tipo: "SP" },
  { value: "SE", tipo: "SE" },
  { value: "TO", tipo: "TO" },
  { value: "DF", tipo: "DF" },
]

export const beneficioFiscalEstados = [
  { value: "DF", tipo: "DF" },
  { value: "PR", tipo: "PR" },
  { value: "RS", tipo: "RS" },
  { value: "RJ", tipo: "RJ" },
]