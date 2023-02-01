import { useContext } from "react"
import { InfoFiscaleContext } from "../../../context"
import { cenario, tipoPessoa, situacaoTributariaPisAndCofins } from "../../../../../common/infoFiscale"

import { Label, Select, Option, Div, Input } from "../../../../styles"

export function Cofins() {
  const { cofins, handleChangeCofins } = useContext(InfoFiscaleContext)
  return (
    <Div className="row">
      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="tipo_pessoa" value={cofins.tipo_pessoa} onChange={handleChangeCofins}>
          {tipoPessoa.map((pessoa) =>
            <Option key={pessoa.value} value={pessoa.value}>{pessoa.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="cenario" value={cofins.cenario} onChange={handleChangeCofins}>
          {cenario.map((cen) =>
            <Option key={cen.value} value={cen.value}>{cen.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Situação Tributária</Label>
        <Select className="form-select form-select-sm" name="situacao_tributaria" value={cofins.situacao_tributaria} onChange={handleChangeCofins}>
          {situacaoTributariaPisAndCofins.map((stCofins) =>
            <Option key={stCofins.value} value={stCofins.value}>{stCofins.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Alíquota %</Label>
        <Input type="text" className="form-control form-control-sm" name="aliquota" value={cofins.aliquota} onChange={handleChangeCofins} />
      </Div>
    </Div>
  )
}