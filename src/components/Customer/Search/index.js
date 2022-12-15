import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

import { ContentSearch } from "./style"
import { CardHeader } from "../../styles"

export function SearchCliente({ children }) {
  const { searchClient, handleChangeSearchClient } = useContext(ClientContext)

  return (
    <div>
      <CardHeader>
        <ContentSearch className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="inputSearch col-sm-7 col-md-7 col-lg-7 col-xl-7">
            <input className="form-control form-control-sm" name="text" onChange={handleChangeSearchClient} placeholder="Pesquisar" />
          </div>

          <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1 d-flex">
            <div>
              <button type="button" className="btn btn-primary btn-sm" onClick={searchClient}>Pesquisar</button>
            </div>
          </div>
        </ContentSearch>
      </CardHeader>
      
      <div className="card">
        <div className="card-body">
          {children}
        </div>
      </div>
    </div>
  )
}