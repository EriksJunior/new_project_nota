import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

import { ContentSearch } from "./style"
import { CardHeader } from "../../styles"

import { AiOutlineSearch } from "react-icons/ai"

export function SearchCliente({ children }) {
  const { searchClient, handleChangeSearchClient } = useContext(ClientContext)

  return (
    <div>
      <ContentSearch className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="inputSearch col-sm-7 col-md-7 col-lg-7 col-xl-7">
          <input className="form-control form-control-sm" name="text" onChange={handleChangeSearchClient} placeholder="Pesquisar" />
        </div>

        <div className="icon" onClick={searchClient}>
          <AiOutlineSearch size={23} color="white"/>
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