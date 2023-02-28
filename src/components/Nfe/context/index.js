import { createContext } from "react";
import { UseGeneral } from "../hooks/UseGeneral";
import { UseLeaf } from "../hooks/UseLeaf";
import { UseCustomer } from "../hooks/UseCustomer";
import { UseProduct } from "../hooks/UseProduct";
import { UseBill } from "../hooks/useBill";

const LeafContext = createContext({})

function LeafProvider({ children }) {
  const { handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf } = UseGeneral()
  const { handleChangePedido, handleSaveLeaf, handleChangeFreightAndOthers, calculateTotalLeafBasedProducts, calculateTotalDiscountLeaf, refValorTotalPedido, refTotalDescontoPedido, } = UseLeaf()
  const { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer } = UseCustomer()
  const { getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveLeafAndLeafProducts, calculateTotalValue } = UseProduct()
  const { handleSaveLeafAndLeafBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill } = UseBill()

  return (
    <LeafContext.Provider value={{
     /*UseGeneral*/ handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf,
     /*UseLeaf*/ handleChangePedido, handleSaveLeaf, handleChangeFreightAndOthers, calculateTotalLeafBasedProducts, calculateTotalDiscountLeaf, refValorTotalPedido, refTotalDescontoPedido,
     /*UseCustomer*/ getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer,
     /*UseProduct*/ getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveLeafAndLeafProducts, calculateTotalValue,
     /*UseBill*/ handleSaveLeafAndLeafBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill
    }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }