import { useContext } from "react"
import { ProductContext } from "../../../context/Product/product"

import { ContentSearch } from "./style"

export function SearchProduct({ children }) {
  const { searchProduct, handleChangeSearchProduct } = useContext(ProductContext)

  return (
    <div className="card p-3">
      <ContentSearch className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div className="inputSearch col-sm-6 col-md-6 col-lg-6 col-xl-6">
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
  )
}