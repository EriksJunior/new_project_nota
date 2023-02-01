import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../../context/InfoFiscale/infoFiscale"

import { Div, Label } from "../../../../styles"
import { TextArea } from "../../../styles"

export function Information() {
  const { additionalData, handleChangeAdditionalData } = useContext(InfoFiscaleContext)

  return (
    <>
      <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <Label className="form-label">Informações ao Fisco</Label>
        <TextArea className="form-control" name="informacoes_fisco" value={additionalData.informacoes_fisco} onChange={handleChangeAdditionalData}></TextArea>
      </Div>

      <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <Label className="form-label">Dados Adicionais</Label>
        <TextArea className="form-control" name="informacoes_complementares" value={additionalData.informacoes_complementares} onChange={handleChangeAdditionalData}></TextArea>
      </Div>
    </>
  )
}