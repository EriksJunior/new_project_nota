import { useContext } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../../context/Client/client"

import { ContentSearch } from "./style"

export function SearchCliente({ children }) {
  const { searchClient, handleChangeSearchClient } = useContext(ClientContext)

  return (
    <div className="card">
      <div className="card-body">
        <div style={{ height: "50px" }}>
        <Link to="/customer"><button className="btn btn-primary">Novo Cliente</button></Link>
        </div>

        <ContentSearch className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {/* <div className="mb-3 d-flex gap-1">
            <input style={{width: "70px"}}  name="cpfcnpj" type="number" className="form-control form-control-sm" />
            <label style={{color: "white"}}>resultados por página</label>
          </div> */}

          <div className="inputSearch col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="input-group">
              <input className="form-control form-control-sm" name="text" onChange={handleChangeSearchClient} placeholder="Pesquisar" aria-label="Pesquisar" aria-describedby="btnNavbarSearch" />
              <button className="btn btn-sm" style={{ backgroundColor: "deepskyblue", color: "white" }} id="btnNavbarSearch" type="button" onClick={searchClient}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </ContentSearch>

        <div>
          {children}
        </div>
      </div>
    </div>
  )
}