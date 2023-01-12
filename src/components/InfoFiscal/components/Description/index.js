import { Div, ContentDescription } from "./styles"

export function Description() {

  return (
    <Div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
      <ContentDescription>
        <Div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <label className="form-label">Descrição</label>
          <input name="nome" type="text" className="form-control form-control-sm" />
        </Div>
      </ContentDescription>
    </Div>
  )
}