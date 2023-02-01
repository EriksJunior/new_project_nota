import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../../context/InfoFiscale/infoFiscale"

import { Label, Select, Option, Div, Input } from "../../../../styles"
import { cenario, tipoPessoa, situacaoTributariaPisAndCofins } from "../../../../../common/infoFiscale"

export function Pis() {
  const { pis, handleChangePis } = useContext(InfoFiscaleContext)
  return (
    <Div className="row">
      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="tipo_pessoa" value={pis.tipo_pessoa} onChange={handleChangePis}>
          {tipoPessoa.map((pessoa) =>
            <Option key={pessoa.value} value={pessoa.value}>{pessoa.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="cenario" value={pis.cenario} onChange={handleChangePis}>
          {cenario.map((cen) =>
            <Option key={cen.value} value={cen.value}>{cen.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Situação Tributária</Label>
        <Select className="form-select form-select-sm" name="situacao_tributaria" value={pis.situacao_tributaria} onChange={handleChangePis}>
          {situacaoTributariaPisAndCofins.map((stPis) =>
            <Option key={stPis.value} value={stPis.value}>{stPis.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota %</Label>
        <Input type="text" className="form-control form-control-sm" name="aliquota" value={pis.aliquota} onChange={handleChangePis} />
      </Div>
    </Div>
  )
}