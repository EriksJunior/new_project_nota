import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../../context/InfoFiscale/infoFiscale"

import { Label, Select, Option, Div, Input } from "../../../../styles"
import { cenario, tipoPessoa, exigibilidade, incentivo_fiscal } from "../../../../../common/infoFiscale"
export function Issqn() {
  const { issqn, handleChangeIssqn } = useContext(InfoFiscaleContext)
  return (
    <Div className="row">
      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Tipo pessoa</Label>
        <Select className="form-select form-select-sm" name="tipo_pessoa" value={issqn.tipo_pessoa} onChange={handleChangeIssqn}>
          {tipoPessoa.map((pessoa) =>
            <Option key={pessoa.value} value={pessoa.value}>{pessoa.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-5 col-md-5 col-lg-5 col-xl-5">
        <Label className="form-label">Cenário</Label>
        <Select className="form-select form-select-sm" name="cenario" value={issqn.cenario} onChange={handleChangeIssqn}>
          {cenario.map((cen) =>
            <Option key={cen.value} value={cen.value}>{cen.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Código CFOP</Label>
        <Input type="text" className="form-control form-control-sm" name="codigo_cfop" value={issqn.codigo_cfop} onChange={handleChangeIssqn}/>
      </Div>

      <Div className="mb-3 col-sm-5 col-md-5 col-lg-5 col-xl-5">
        <Label className="form-label">Indicador da exigibilidade do ISS</Label>
        <Select className="form-select form-select-sm" name="exigibilidade" value={issqn.exigibilidade} onChange={handleChangeIssqn}>
          {exigibilidade.map((ex) =>
            <Option key={ex.value} value={ex.value}>{ex.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Item da lista de serviços</Label>
        <Input type="text" className="form-control form-control-sm" name="item_servico" value={issqn.item_servico} onChange={handleChangeIssqn} />
      </Div>

      <Div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
        <Label className="form-label">Indicador de incentivo Fiscal</Label>
        <Select className="form-select form-select-sm" name="incentivo_fiscal" value={issqn.incentivo_fiscal} onChange={handleChangeIssqn}>
          {incentivo_fiscal.map((incentivo) =>
            <Option key={incentivo.value} value={incentivo.value}>{incentivo.tipo}</Option>
          )}
        </Select>
      </Div>

      <Div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
        <Label className="form-label">Alíquota %</Label>
        <Input type="text" className="form-control form-control-sm" name="aliquota" value={issqn.aliquota} onChange={handleChangeIssqn} />
      </Div>
    </Div>
  )
}