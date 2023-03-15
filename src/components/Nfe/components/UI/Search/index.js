import { useContext } from "react"
import { LeafContext } from "../../../context"

import { InputSearch } from "../../../../InputSearch"
import { ContentSearch } from "../Search/style"

export function SearchTaxDocument({ children }) {
  const { handleNewLeaf } = useContext(LeafContext)

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
          <InputSearch />
        </ContentSearch>

        <div>
          {children}
        </div>
      </div>
    </div>
  )
}