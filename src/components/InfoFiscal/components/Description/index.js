import { Div, ContentDescription, TextArea } from "./styles"

export function Description() {

  return (
    <Div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <ContentDescription>
        <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <label className="form-label">Descrição</label>
          <TextArea className="form-control" placeholder="Descreva a classificação desse imposto para melhor gerenciamento. Ex: Classe de impostos para Saída de produtos de fabricação própria." id="floatingTextarea2"></TextArea>
        </Div>
      </ContentDescription>
    </Div>
  )
}