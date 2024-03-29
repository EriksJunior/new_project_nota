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

export const situacaoTributariaIpi = [
  { value: "00", tipo: "00 - Entrada com recuperação de crédito" },
  { value: "01", tipo: "01 - Entrada tributada com alíquota zero" },
  { value: "02", tipo: "02 - Entrada isenta" },
  { value: "03", tipo: "03 - Entrada não-tributada" },
  { value: "04", tipo: "04 - Entrada imune" },
  { value: "05", tipo: "05 - Entrada com suspensão" },
  { value: "49", tipo: "49 - Outras entradas" },
  { value: "50", tipo: "50 - Saída tributada" },
  { value: "51", tipo: "51 - Saída tributada com alíquota zero" },
  { value: "52", tipo: "52 - Saída isenta" },
  { value: "53", tipo: "53 - Saída não-tributada" },
  { value: "54", tipo: "54 - Saída imune" },
  { value: "55", tipo: "55 - Saída com suspensão" },
  { value: "99", tipo: "99 - Outras saídas" },
]

export const situacaoTributariaPisAndCofins = [
  {
    value: "01",
    tipo: "01 - Operação Tributável - Base de Cálculo = Valor da Operação Alíquota Normal (Cumulativo/Não cumulativo)",
  },
  {
    value: "02",
    tipo: "02 - Operação Tributável - Base de Cálculo = Valor da Operação (Alíquota diferenciada)",
  },
  {
    value: "03",
    tipo: "03 - Operação Tributável - Base de Cálculo = Quantidade Vendida X Alíquota por Unidade de Produto",
  },
  {
    value: "04",
    tipo: "04 - Operação Tributável - Tributação Monofásica - (Alíquota Zero)",
  },
  {
    value: "05",
    tipo: "05 - Operação Tributável - (Substituição Tributária)",
  },
  {
    value: "06",
    tipo: "06 - Operação Tributável (Alíquota Zero)",
  },
  {
    value: "07",
    tipo: "07 - Operação Isenta de Contribuição",
  },
  {
    value: "08",
    tipo: "08 - Operação sem Incidência da Contribuição",
  },
  {
    value: "09",
    tipo: "09 - Operação com Suspensão da Contribuição",
  },
  {
    value: "49",
    tipo: "49 - Outras Operações de Saída",
  },
  {
    value: "50",
    tipo: "50 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
  },
  {
    value: "51",
    tipo: "51 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita Não Tributada no Mercado Interno",
  },
  {
    value: "52",
    tipo: "52 - Operação com Direito a Crédito - Vinculada Exclusivamente a Receita de Exportação",
  },
  {
    value: "53",
    tipo: "53 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno",
  },
  {
    value: "54",
    tipo: "54 - Operação com Direito a Crédito - Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
  },
  {
    value: "55",
    tipo: "55 - Operação com Direito a Crédito - Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
  },
  {
    value: "56",
    tipo: "56 - Operação com Direito a Crédito - Vinculado a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
  },
  {
    value: "60",
    tipo: "60 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Tributada no Mercado Interno",
  },
  {
    value: "61",
    tipo: "61 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita Não-Tributada no Mercado Interno",
  },
  {
    value: "62",
    tipo: "62 - Crédito Presumido - Operação de Aquisição Vinculada Exclusivamente a Receita de Exportação",
  },
  {
    value: "63",
    tipo: "63 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno",
  },
  {
    value: "64",
    tipo: "64 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas no Mercado Interno e de Exportação",
  },
  {
    value: "65",
    tipo: "65 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Não-Tributadas no Mercado Interno e de Exportação",
  },
  {
    value: "66",
    tipo: "66 - Crédito Presumido - Operação de Aquisição Vinculada a Receitas Tributadas e Não-Tributadas no Mercado Interno, e de Exportação",
  },
  {
    value: "67",
    tipo: "67 - Crédito Presumido - Outras Operações",
  },
  {
    value: "70",
    tipo: "70 - Operação de Aquisição sem Direito a Crédito",
  },
  {
    value: "71",
    tipo: "71 - Operação de Aquisição com Isenção",
  },
  {
    value: "72",
    tipo: "72 - Operação de Aquisição com Suspensão",
  },
  {
    value: "73",
    tipo: "73 - Operação de Aquisição a Alíquota Zero",
  },
  {
    value: "74",
    tipo: "74 - Operação de Aquisição sem Incidência da Contribuição",
  },
  {
    value: "75",
    tipo: "75 - Operação de Aquisição por Substituição Tributária",
  },
  {
    value: "98",
    tipo: "98 - Outras Operações de Entrada",
  },
  {
    value: "99",
    tipo: "99 - Outras Operações",
  },
]

export const enableInputsInfoFiscale = {
  "101": {
    aliquota_credito: true,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "102": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "103": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "201": {
    aliquota_credito: true,
    aliquota_mva: true,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: true,
    aliquota_reducao_st: true,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "202": {
    aliquota_credito: false,
    aliquota_mva: true,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: true,
    aliquota_reducao_st: true,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "203": {
    aliquota_credito: false,
    aliquota_mva: true,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: true,
    aliquota_reducao_st: true,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "300": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "400": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "500": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "900": {
    aliquota_credito: false,
    aliquota_mva: true,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: true,
    aliquota_reducao_st: true,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "00": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "10": {
    aliquota_credito: false,
    aliquota_mva: true,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: true,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "20": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: true,
    aliquota_reducao_st: false,
    motivo_desoneracao: true,
    motivo_desoneracao_st: true,
    beneficio_fiscal: false,
  },
  "30": {
    aliquota_credito: false,
    aliquota_mva: true,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: true,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "40": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: true,
    motivo_desoneracao_st: true,
    beneficio_fiscal: false,
  },
  "41": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: true,
    motivo_desoneracao_st: true,
    beneficio_fiscal: false,
  },
  "50": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: true,
    motivo_desoneracao_st: true,
    beneficio_fiscal: false,
  },
  "51": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: true,
    aliquota_diferimento_fcp: true,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: true,
    motivo_desoneracao_st: true,
    beneficio_fiscal: false,
  },
  "60": {
    aliquota_credito: false,
    aliquota_mva: false,
    aliquota_diferimento: false,
    aliquota_diferimento_fcp: false,
    aliquota_reducao: false,
    aliquota_reducao_st: false,
    motivo_desoneracao: false,
    motivo_desoneracao_st: false,
    beneficio_fiscal: false,
  },
  "70": {
    aliquota_credito: false,
    aliquota_mva: true,
    aliquota_diferimento: true,
    aliquota_diferimento_fcp: true,
    aliquota_reducao: true,
    aliquota_reducao_st: true,
    motivo_desoneracao: true,
    motivo_desoneracao_st: true,
    beneficio_fiscal: false,
  },
  "90": {
    aliquota_credito: false,
    aliquota_mva: true,
    aliquota_diferimento: true,
    aliquota_diferimento_fcp: true,
    aliquota_reducao: true,
    aliquota_reducao_st: true,
    motivo_desoneracao: true,
    motivo_desoneracao_st: true,
    beneficio_fiscal: false,
  },
}

export const exigibilidade = [
  { value: "1", tipo: "1 - Exigível" },
  { value: "2", tipo: "2 - Não incidência" },
  { value: "3", tipo: "3 - Isenção" },
  { value: "4", tipo: "4 - Exportação" },
  { value: "5", tipo: "5 - Imunidade" },
  { value: "6", tipo: "6 - Exigibilidade Suspensa por Decisão Judicial" },
  {
    value: "7",
    tipo: "7 - Exigibilidade Suspensa por Processo Administrativo",
  },
]

export const incentivo_fiscal = [
  { value: "1", tipo: "Sim" },
  { value: "2", tipo: "Não" },
]