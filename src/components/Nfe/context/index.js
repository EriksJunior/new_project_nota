import { createContext } from "react";
import { UseGeneral } from "../hooks/UseGeneral";
import { UseLeaf } from "../hooks/UseLeaf";
import { UseCustomer } from "../hooks/UseCustomer";
import { UseProduct } from "../hooks/UseProduct";
import { UseBill } from "../hooks/useBill";

const LeafContext = createContext({})

function LeafProvider({ children }) {
  const { handleRenderNavItem, navItems } = UseGeneral()
  const { handleChangePedido, handleSaveLeaf, handleChangeFreightAndOthers, calculateTotalLeafBasedProducts, calculateTotalDiscountLeaf, refValorTotalPedido, refTotalDescontoPedido, openModal, setOpenModal, openModalCancelLeaf, setOpenModalCancelLeaf, handleSendLeafAndFind, cancelLeaf, enbleModalCancelLeaf, searchLeaf, dataSearchLeaf, handleNewLeaf, switchBetweenComponents, handleEditLeaf, openLayouts, openAreaLeaf, refDescriptionCancelLeaf  } = UseLeaf()
  const { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer } = UseCustomer()
  const { getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveLeafAndLeafProducts, calculateTotalValue, findLeafProductsByIdNota } = UseProduct()
  const { handleSaveLeafAndLeafBills, addBillToList, confirmRemoveBill, setConfirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill } = UseBill()

  return (
    <LeafContext.Provider value={{
     /*UseGeneral*/ handleRenderNavItem, navItems,
     /*UseLeaf*/ handleChangePedido, handleSaveLeaf, handleChangeFreightAndOthers, calculateTotalLeafBasedProducts, calculateTotalDiscountLeaf, refValorTotalPedido, refTotalDescontoPedido, openModal, setOpenModal, openModalCancelLeaf, setOpenModalCancelLeaf, handleSendLeafAndFind, cancelLeaf, enbleModalCancelLeaf, searchLeaf, dataSearchLeaf, handleNewLeaf, switchBetweenComponents, handleEditLeaf, openLayouts, openAreaLeaf, refDescriptionCancelLeaf,
     /*UseCustomer*/ getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer,
     /*UseProduct*/ getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveLeafAndLeafProducts, calculateTotalValue, findLeafProductsByIdNota,
     /*UseBill*/ handleSaveLeafAndLeafBills, addBillToList, confirmRemoveBill, setConfirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill
    }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }