import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../../context/InfoFiscale/infoFiscale"

import { Div, Label } from "../../../../styles"
import { TextArea } from "../../../styles"

export function Description() {
  const { additionalData, handleChangeAdditionalData } = useContext(InfoFiscaleContext)

  return (
    <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <Label className="form-label">Descrição</Label>
      <TextArea className="form-control" placeholder="Descreva a classificação desse imposto para melhor gerenciamento. Ex: Classe de impostos para Saída de produtos de fabricação própria." id="floatingTextarea2" name="descricao" value={additionalData.descricao} onChange={handleChangeAdditionalData} />
    </Div>
  )
}