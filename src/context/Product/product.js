import { createContext } from "react";
import { UseProducts } from "../../hooks/useProducts";

const ProductContext = createContext({})

function ProductProvider({ children }) {
  const { produtos, deleteProduct, clearInputs , handleChange, findById, handleSaveOrUpdate, returnedProduct, search, searchProduct, setSearch, handleChangeSearchProduct, handleChangeMonetaryValues, handleOpenAreaProduct } = UseProducts()

  return (
    <ProductContext.Provider value={{ produtos, deleteProduct, clearInputs , handleChange, findById, handleSaveOrUpdate, returnedProduct, search, searchProduct, setSearch, handleChangeSearchProduct, handleChangeMonetaryValues, handleOpenAreaProduct }}>
      {children}
    </ProductContext.Provider>
  )
}


export { ProductProvider, ProductContext }