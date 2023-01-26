
export const HandleInfoFiscale = (icms, aliquotaMva, ipi, pis) => {
  const newInfoFicale = {
    descricao: "",
    icms: [
      {
        tipo_tributacao: icms.tipo_tributacao,
        cenario: icms.cenario,
        tipo_pessoa: icms.tipo_pessoa,
        nao_contribuinte: icms.nao_contribuinte,
        codigo_cfop: icms.codigo_cfop,
        situacao_tributaria: icms.situacao_tributaria,
        aliquota_credito: icms.aliquota_credito,
        aliquota_mva: [
          {
            estado: aliquotaMva.estado,
            aliquota: aliquotaMva.aliquota,
          },
        ],
        aliquota_diferimento: icms.aliquota_diferimento,
        aliquota_diferimento_fcp: icms.aliquota_diferimento_fcp,
        aliquota_reducao: icms.aliquota_reducao,
        aliquota_reducao_st: icms.aliquota_reducao_st,
        motivo_desoneracao: icms.motivo_desoneracao,
        motivo_desoneracao_st: icms.motivo_desoneracao_st,
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
        cenario: ipi.cenario,
        tipo_pessoa: ipi.tipo_pessoa,
        situacao_tributaria: ipi.situacao_tributaria,
        codigo_enquadramento: ipi.codigo_enquadramento,
        aliquota: ipi.aliquota,
      },
    ],
    pis: [
      {
        cenario: pis.cenario,
        tipo_pessoa: pis.tipo_pessoa,
        situacao_tributaria: pis.situacao_tributaria,
        aliquota: pis.aliquota,
      },
    ],
  }

  return newInfoFicale
}