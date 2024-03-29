import { useContext } from "react"
import { LeafContext } from "../../../context"

import { InputSearch } from "../../../../ContentSearch"

import { ContentSearch } from "../Search/style"

export function SearchTaxDocument({ children }) {
  const { handleNewLeaf, searchLeaf } = useContext(LeafContext)
  const typesFilter = [
    {text: "Cliente", value: "nomeCliente"},
    {text: "CPF/CNPJ", value: "cpfCnpj"},
    {text: "NF-e", value :"1"},
    {text: "NFC-e", value :"2"},
  ]

  return (
    <div className="card">
      <div className="card-body">
        <div style={{ height: "50px" }}>
          <button className="btn btn-primary" onClick={handleNewLeaf}>Novo Documento</button>
        </div>

        <ContentSearch className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {/* <div className="mb-3 d-flex gap-1">
            <input style={{width: "70px"}}  name="cpfcnpj" type="number" className="form-control form-control-sm" />
            <label style={{color: "white"}}>resultados por página</label>
          </div> */}
          <InputSearch search={searchLeaf} dataFilter={typesFilter}/>
        </ContentSearch>

        <div>
          {children}
        </div>
      </div>
    </div>
  )
}