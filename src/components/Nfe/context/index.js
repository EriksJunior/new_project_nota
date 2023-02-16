import { createContext } from "react";
import { UseGeneral } from "../hooks/UseGeneral";
import { UseLeaf } from "../hooks/UseLeaf";
import { UseCustomer } from "../hooks/UseCustomer";
import { UseProduct } from "../hooks/UseProduct";

const LeafContext = createContext({})

function LeafProvider({ children }) {
  const { handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf } = UseGeneral()
  const { handleChangePedido, handleSaveLeaf } = UseLeaf()
  const { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer } = UseCustomer()
  const { getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleSaveLeafAndLeafProducts } = UseProduct()

  return (
    <LeafContext.Provider value={{
     /*UseGeneral*/ handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf,
     /*UseLeaf*/ handleChangePedido, handleSaveLeaf,
     /*UseCustomer*/ getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer,
     /*UseProduct*/ getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleSaveLeafAndLeafProducts
    }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }