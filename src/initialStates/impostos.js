export const INITIAL_STATE_IMPOSTOS = {
  id: "",
  descricao: "",
  informacoes_fisco: "",
  informacoes_complementares: ""
}

export const INITIAL_STATE_ICMS = {
    tipo_tributacao: "simples_nacional",
    cenario: "saida_dentro_estado",
    tipo_pessoa: "fisica",
    codigo_cfop: "5102",
    situacao_tributaria: "102"
}

export const INITIAL_STATE_IPI = {
  cenario: "padrao",
  tipo_pessoa: "fisica",
  situacao_tributaria: "99",
  codigo_enquadramento: "999",
  aliquota: "0.00"
}

export const INITIAL_STATE_PIS = {
  cenario: "padrao",
  tipo_pessoa: "fisica",
  situacao_tributaria: "99",
  aliquota: "0.00"
}

export const INITIAL_STATE_COFINS = {
  cenario: "padrao",
  tipo_pessoa: "fisica",
  situacao_tributaria: "99",
  aliquota: "0.00"
}

export const INITIAL_STATE_ISSQN = {
  cenario: "",
  tipo_pessoa: "",
  codigo_cfop: "",
  exigibilidade: "1",
  item_servico: "",
  incentivo_fiscal: "",
  aliquota: ""
}