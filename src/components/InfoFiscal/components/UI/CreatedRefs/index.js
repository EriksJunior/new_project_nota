import { useContext } from "react"
import { Link } from "react-router-dom"
import { InfoFiscaleContext } from "../../../context"

import { ContentTable } from "./styles"
import { Div } from "../../../../styles"

export function CreatedRefs() {
  const { refs, findById, deleteInfoFiscale } = useContext(InfoFiscaleContext)

  return (
    <Div className="row">
      <Div className="mb-3 col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <ContentTable className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Ref</th>
                <th>Descrição</th>
                <th className="text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {refs.map((item) =>
                <tr key={item.id}>
                  <td>{item.ref}</td>
                  <td>{item.descricao}</td>
                  <td className="text-center">
                    <div style={{ height: "31px" }}>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" />
                        <ul className="dropdown-menu dropdown-menu-dark" >
                          <li><Link className="dropdown-item" onClick={() => findById(item.id)}>Editar</Link></li>
                          <li><Link className="dropdown-item" onClick={() => deleteInfoFiscale(item.id, item.ref)}>Excluir</Link></li>
                        </ul>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </ContentTable>
      </Div>
    </Div>
  )
}