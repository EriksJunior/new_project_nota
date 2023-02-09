import { createContext } from "react";
import { UseProducts } from "../hooks";

const ProductContext = createContext({})

function ProductProvider({ children }) {
  const { produtos, deleteProduct, clearInputs, handleChange, findById, handleSaveOrUpdate, returnedProduct, search, searchProduct, setSearch, handleChangeSearchProduct, handleChangeMonetaryValues, handleOpenAreaProduct, openAreaProduct, openLayouts, handleNewProduct, handleEditProduct, switchBetweenComponents, findAllRefs, refsFromSelectBox } = UseProducts()

  return (
    <ProductContext.Provider value={{ produtos, deleteProduct, clearInputs, handleChange, findById, handleSaveOrUpdate, returnedProduct, search, searchProduct, setSearch, handleChangeSearchProduct, handleChangeMonetaryValues, handleOpenAreaProduct, openAreaProduct, openLayouts, handleNewProduct, handleEditProduct, switchBetweenComponents, findAllRefs, refsFromSelectBox }}>
      {children}
    </ProductContext.Provider>
  )
}


export { ProductProvider, ProductContext }