import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

import { Div, Label, Select, Option, DivContentCheckBox, LabelForCheckBox, Input } from "../../../styles"
import { tipoTributacao, cenario, tipoPessoa, situacaoTributaria, estados, motivoDesoneracao, motivoDesoneracaoSt } from "../../../../common/infoFiscale"

export function Icms() {
  const { infoFiscale } = useContext(InfoFiscaleContext)

  return (
    <Div className="row">
      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Tipo de Tributação</Label>
        <Select className="form-select form-select-sm" name="tipo_tributacao" defaultValue={infoFiscale.icms[0].tipo_tributacao}>
          {tipoTributacao.map((tributacao) =>
            <Option key={tributacao.value} value={tributacao.value} >{tributacao.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="cenario" defaultValue={infoFiscale.icms[0].cenario}>
          {cenario.map((cen) =>
            <Option key={cen.value} value={cen.value}>{cen.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-4 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="tipo_pessoa" defaultValue={infoFiscale.icms[0].tipo_pessoa}>
          {tipoPessoa.map((pessoa) =>
            <Option key={pessoa.value} value={pessoa.value}>{pessoa.tipo}</Option>
          )}
        </Select>
      </Div>

      <DivContentCheckBox className="mb-3 col-sm-8 col-md-9 col-lg-9 col-xl-9 form-check">
        <Input className="form-check-input" type="checkbox" value="" />
        <LabelForCheckBox className="form-check-label" >
          Marque essa opção caso a configuração deste cenário seja específico para Pessoa Jurídica não contribuinte do ICMS ou Consumidor final.
        </LabelForCheckBox>
      </DivContentCheckBox>

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Código CFOP</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
      </Div>

      <Div className="mb-3 col-sm-8 col-md-8 col-lg-8 col-xl-8">
        <Label className="form-label">Situação tributária</Label>
        <Select className="form-select form-select-sm" name="situacao_tributaria" defaultValue={infoFiscale.icms[0].situacao_tributaria}>
          {situacaoTributaria.map((st) =>
            <Option key={st.value} value={st.value}>{st.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota MVA: Estado</Label>
        <Select className="form-select form-select-sm" name="situacao_tributaria" defaultValue={infoFiscale.icms[0].situacao_tributaria}>
          {estados.map((sigla) =>
            <Option key={sigla.value} value={sigla.value}>{sigla.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota MVA: %</Label>
        <Input name="nome" type="text" className="form-control form-control-sm" />
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Motivo da Desoneração do ICMS</Label>
        <Select className="form-select form-select-sm" name="situacao_tributaria" defaultValue={infoFiscale.icms[0].situacao_tributaria}>
          {motivoDesoneracao.map((motivo) =>
            <Option key={motivo.value} value={motivo.value}>{motivo.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Motivo da Desoneração do ICMS-ST</Label>
        <Select className="form-select form-select-sm" name="situacao_tributaria" defaultValue={infoFiscale.icms[0].situacao_tributaria}>
          {motivoDesoneracaoSt.map((motivoSt) =>
            <Option key={motivoSt.value} value={motivoSt.value}>{motivoSt.tipo}</Option>
          )}
        </Select>
      </Div>

    </Div>
  )
}