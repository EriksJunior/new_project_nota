import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"
import { cenario, tipoPessoa, Situacao } from "../../../../common/infoFiscale"

import { Label, Select, Option, Div, Input, PAlert } from "../../../styles"

export function Ipi() {
  const { ipi, handleChangeIpi } = useContext(InfoFiscaleContext)

  return (
    <Div className="row">
      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="tipo_pessoa" onChange={handleChangeIpi} value={ipi.tipo_pessoa}>
          {tipoPessoa.map((pessoa) =>
            <Option key={pessoa.value} value={pessoa.value}>{pessoa.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="cenario" onChange={handleChangeIpi} value={ipi.cenario}>
          {cenario.map((cen) =>
            <Option key={cen.value} value={cen.value}>{cen.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-5 col-md-5 col-lg-5 col-xl-5">
        <Label className="form-label">Situação tributária</Label>
        <Select className="form-select form-select-sm" name="situacao_tributaria" onChange={handleChangeIpi} value={ipi.situacao_tributaria}>
        {Situacao.map((st) =>
            <Option key={st.value} value={st.value}>{st.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-9 col-md-9 col-lg-9 col-xl-9">
        <Label className="form-label">Código de enquadramento</Label>
        <Input type="text" className="form-control form-control-sm" name="codigo_enquadramento" onChange={handleChangeIpi} value={ipi.codigo_enquadramento}/>
        <PAlert>Caso não possua um código de enquadramento, mantenha o valor padrão 999.</PAlert>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Alíquota %</Label>
        <Input type="text" className="form-control form-control-sm" name="aliquota" onChange={handleChangeIpi} value={ipi.aliquota}/>
      </Div>
    </Div>
  )
}