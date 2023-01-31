import { useContext } from "react"
import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

import { ContentTable } from "./styles"
import { Div } from "../../../styles"

export function CreatedRefs() {
  const { refs } = useContext(InfoFiscaleContext)

  return (
    <Div className="row">
      <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <ContentTable className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Descrição</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {refs.map((item) =>
                <tr key={item.id}>
                  <td >{item.ref}</td>
                  <td >{item.descricao}</td>
                  <th>X</th>
                </tr>
              )}
            </tbody>
          </table>
        </ContentTable>
      </Div>
    </Div>
  )
}