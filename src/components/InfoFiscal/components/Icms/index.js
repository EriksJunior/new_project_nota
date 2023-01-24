import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

import { Div, Label, Select, Option, DivContentCheckBox, LabelForCheckBox, Input } from "../../../styles"
import { tipoTributacao, cenario, tipoPessoa, situacaoTributaria, estados, motivoDesoneracao, motivoDesoneracaoSt } from "../../../../common/infoFiscale"

export function Icms() {
  const { icms, setIcms, handleChangeIcms, teste } = useContext(InfoFiscaleContext)

  return (
    <Div className="row">
      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Tipo de Tributação</Label>
        <Select name="tipo_tributacao" className="form-select form-select-sm" onChange={handleChangeIcms} defaultValue={icms.tipo_tributacao}>
          {tipoTributacao.map((tributacao) =>
            <Option key={tributacao.value} value={tributacao.value} >{tributacao.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Cenário</Label>
        <Select name="cenario" className="form-select form-select-sm" onChange={handleChangeIcms} defaultValue={icms.cenario}>
          {cenario.map((cen) =>
            <Option key={cen.value} value={cen.value}>{cen.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-4 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Tipo pessoa</Label>
        <Select name="tipo_pessoa" className="form-select form-select-sm" onChange={handleChangeIcms} defaultValue={icms.tipo_pessoa}>
          {tipoPessoa.map((pessoa) =>
            <Option key={pessoa.value} value={pessoa.value}>{pessoa.tipo}</Option>
          )}
        </Select>
      </Div>

      <DivContentCheckBox className="mb-3 col-sm-8 col-md-9 col-lg-9 col-xl-9 form-check" >
        <Input name="nao_contribuinte" className="form-check-input" type="checkbox" onChange={handleChangeIcms} value={icms.nao_contribuinte} id="flexCheckIndeterminate" />
        <LabelForCheckBox className="form-check-label" htmlFor="flexCheckIndeterminate">
          Marque essa opção caso a configuração deste cenário seja específico para Pessoa Jurídica não contribuinte do ICMS ou Consumidor final.
        </LabelForCheckBox>
      </DivContentCheckBox>

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Código CFOP</Label>
        <Input name="codigo_cfop" type="text" className="form-control form-control-sm" onChange={handleChangeIcms} defaultValue={icms.codigo_cfop} />
      </Div>

      <Div className="mb-3 col-sm-8 col-md-8 col-lg-8 col-xl-8">
        <Label className="form-label">Situação tributária</Label>
        <Select name="situacao_tributaria" className="form-select form-select-sm" onChange={handleChangeIcms} defaultValue={icms.situacao_tributaria}>
          {situacaoTributaria.map((st) =>
            <Option key={st.value} value={st.value}>{st.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota do diferimento ICMS %</Label>
        <Input name="aliquota_diferimento" type="text" className="form-control form-control-sm" onChange={handleChangeIcms} defaultValue={icms.aliquota_diferimento} />
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota do diferimento ICMS (FCP) %</Label>
        <Input name="aliquota_diferimento_fcp" type="text" className="form-control form-control-sm" onChange={handleChangeIcms} defaultValue={icms.aliquota_diferimento_fcp} />
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota MVA: Estado</Label>
        <Select name="estado" className="form-select form-select-sm" onChange={handleChangeIcms} defaultValue={icms.aliquota_mva[0].estado}>
          <Option>Selecione...</Option>
          {estados.map((sigla) =>
            <Option key={sigla.value} value={sigla.value}>{sigla.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota MVA: %</Label>
        <Input name="aliquota" type="text" className="form-control form-control-sm" onChange={handleChangeIcms} defaultValue={icms.aliquota_mva[0].aliquota} />
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota da redução da base de cálculo ICMS %</Label>
        <Input name="aliquota_reducao" type="text" className="form-control form-control-sm" onChange={handleChangeIcms} defaultValue={icms.aliquota_reducao} />
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota da redução da base de cálculo ICMS-ST %</Label>
        <Input name="aliquota_reducao_st" type="text" className="form-control form-control-sm" onChange={handleChangeIcms} defaultValue={icms.aliquota_reducao_st} />
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Motivo da Desoneração do ICMS</Label>
        <Select name="motivo_desoneracao" className="form-select form-select-sm" onChange={handleChangeIcms} defaultValue={icms.motivo_desoneracao}>
          {motivoDesoneracao.map((motivo) =>
            <Option key={motivo.value} value={motivo.value}>{motivo.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Motivo da Desoneração do ICMS-ST</Label>
        <Select name="motivo_desoneracao_st" className="form-select form-select-sm" onChange={handleChangeIcms} defaultValue={icms.motivo_desoneracao_st}>
          {motivoDesoneracaoSt.map((motivoSt) =>
            <Option key={motivoSt.value} value={motivoSt.value}>{motivoSt.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div>
        <button onClick={teste}>
          testeee
        </button>
      </Div>
    </Div>
  )
}