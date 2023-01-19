import { Div, Label, Select, Option } from "../../../styles"
import { tipoTributacao, cenario, tipoPessoa, situacaoTributaria } from "../../../../common/infoFiscale"

export function Icms() {
  return (
    <Div className="row">
      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Tipo de Tributação</Label>
        <Select className="form-select form-select-sm" name="uf">
          {tipoTributacao.map((tributacao) =>
            <Option key={tributacao.value} value={tributacao.value}>{tributacao.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="uf">
          {cenario.map((cen) =>
            <Option key={cen.value} value={cen.value}>{cen.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="uf">
          {tipoPessoa.map((pessoa) =>
            <Option key={pessoa.value} value={pessoa.value}>{pessoa.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-8 col-md-8 col-lg-8 col-xl-8">
        <Label className="form-label">Situação tributária</Label>
        <Select className="form-select form-select-sm" name="uf">
          {situacaoTributaria.map((st) =>
            <Option key={st.value} value={st.value}>{st.tipo}</Option>
          )}
        </Select>
      </Div>
    </Div>
  )
}