import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

import { ContentSearch } from "./style"

export function SearchCliente({ children }) {
  const { searchClient, handleChangeSearchClient } = useContext(ClientContext)

  return (
    <div>
      <ContentSearch className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="inputSearch col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <div className="input-group">
            <input className="form-control form-control-sm" name="text" onChange={handleChangeSearchClient} placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="btnNavbarSearch" />
            <button className="btn btn-primary btn-sm" id="btnNavbarSearch" type="button" onClick={searchClient}>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </ContentSearch>

      <div className="card">
        <div className="card-body">
          {children}
        </div>
      </div>
    </div>
  )
}