
export const HandleInfoFiscale = (icms, aliquotaMva) => {
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
  }

  return newInfoFicale
}