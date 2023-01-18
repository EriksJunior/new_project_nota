import { Div, Label } from "../../../styles"
import { TextArea } from "../../styles"

export function Information() {
  return (
    <>
      <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <Label className="form-label">Informações ao Fisco</Label>
        <TextArea className="form-control"></TextArea>
      </Div>

      <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <Label className="form-label">Dados Adicionais</Label>
        <TextArea className="form-control"></TextArea>
      </Div>
    </>
  )
}