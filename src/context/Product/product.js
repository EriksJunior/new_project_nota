import { createContext } from "react";
import { UseProducts } from "../../hooks/useProducts";

const ProductContext = createContext({})

function ProductProvider({ children }) {
  const { deleteProduct, alterTab , setAlterTab , clearInputs , handleChange, findById, handleSaveOrUpdate, handleClose, handleShow, returnedProduct, search, searchProduct, setSearch, show } = UseProducts()

  return (
    <ProductContext.Provider value={{ deleteProduct, alterTab , setAlterTab , clearInputs , handleChange, findById, handleSaveOrUpdate, handleClose, handleShow, returnedProduct, search, searchProduct, setSearch, show }}>
      {children}
    </ProductContext.Provider>
  )
}


export { ProductProvider, ProductContext }