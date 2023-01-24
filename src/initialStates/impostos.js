export const INITIAL_STATE_INFO_FISCALE = {
  id: "",
  referencia: "",
  descricao: "",
  icms: [
    {
      tipo_tributacao: "simples_nacional",
      cenario: "saida_dentro_estado",
      tipo_pessoa: "fisica",
      nao_contribuinte: false,
      codigo_cfop: "5102",
      situacao_tributaria: "102",
      aliquota_credito: "",
      aliquota_mva: [
        {
          estado: "",
          aliquota: "0.00",
        },
      ],
      aliquota_diferimento: "0.00",
      aliquota_diferimento_fcp: "0.00",
      aliquota_reducao: "0.00",
      aliquota_reducao_st: "0.00",
      motivo_desoneracao: "9",
      motivo_desoneracao_st: "9",
      beneficio_fiscal: [
        {
          estado: "",
          codigo: "",
        },
      ],
    },
  ],
  ipi: [
    {
      cenario: "padrao",
      tipo_pessoa: "fisica",
      situacao_tributaria: "99",
      codigo_enquadramento: "999",
      aliquota: "0.00",
    },
  ],
  pis: [
    {
      cenario: "padrao",
      tipo_pessoa: "fisica",
      situacao_tributaria: "99",
      aliquota: "0.00",
    },
  ],
  cofins: [
    {
      cenario: "padrao",
      tipo_pessoa: "fisica",
      situacao_tributaria: "99",
      aliquota: "0.00",
    },
  ],
  issqn: [
    {
      cenario: "",
      tipo_pessoa: "",
      codigo_cfop: "",
      exigibilidade: "",
      item_servico: "",
      incentivo_fiscal: "",
      aliquota: "",
    },
  ],
  informacoes_fisco: "",
  informacoes_complementares: "",
}

export const INITIAL_STATE_ENABLE_INFO_FISCALE = {
  description: true,
  icms: true,
  ipi: true,
  pis: true,
  cofins: true,
  issqn: true,
  information: true,
  createdRefs: true,
}

export const INITIAL_STATE_ICMS = {
  tipo_tributacao: "simples_nacional",
  cenario: "saida_dentro_estado",
  tipo_pessoa: "fisica",
  nao_contribuinte: false,
  codigo_cfop: "5102",
  situacao_tributaria: "102",
  aliquota_credito: "0.00",
  aliquota_mva: [
    {
      estado: "",
      aliquota: "0.00",
    },
  ],
  aliquota_diferimento: "0.00",
  aliquota_diferimento_fcp: "0.00",
  aliquota_reducao: "0.00",
  aliquota_reducao_st: "0.00",
  motivo_desoneracao: "9",
  motivo_desoneracao_st: "9",
  beneficio_fiscal: [
    {
      estado: "",
      codigo: "",
    },
  ],
}

export const INITIAL_STATE_ALIQUOTA_MVA = {
  estado: "",
  aliquota: "0.00",
}

