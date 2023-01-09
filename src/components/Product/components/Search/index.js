import { useContext } from "react"
import { ProductContext } from "../../../../context/Product/product"

import { ContentSearch } from "./style"

export function SearchProduct({ children }) {
  const { searchProduct, handleChangeSearchProduct } = useContext(ProductContext)

  return (
    <div className="card">
      <div className="card-body">
        <div style={{ height: "50px" }}>
          <button className="btn btn-primary">Novo Produto</button>
        </div>

        <ContentSearch className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {/* <div className="mb-3 d-flex gap-1">
            <input style={{width: "70px"}}  name="cpfcnpj" type="number" className="form-control form-control-sm" />
            <label style={{color: "white"}}>resultados por página</label>
          </div> */}

          <div className="inputSearch col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <div className="input-group">
              <input className="form-control form-control-sm" name="text" onChange={handleChangeSearchProduct} placeholder="Pesquisar" aria-label="Pesquisar" />
              <button className="btn btn-primary btn-sm" type="button" onClick={searchProduct}>
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