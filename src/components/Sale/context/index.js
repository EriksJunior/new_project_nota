import { createContext } from "react";
import { UseGeneral } from "../hooks/UseGeneral";
import { UseSale } from "../hooks/UseSale";
import { UseCustomer } from "../hooks/UseCustomer";
import { UseProduct } from "../hooks/UseProduct";
import { UseBill } from "../hooks/useBill";

const SaleContext = createContext({})

function SaleProvider({ children }) {
  const { handleRenderNavItem, navItems, } = UseGeneral()
  const { handleChangeSale, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotalDiscountSale, openModal, setOpenModal, searchSale, dataSearchSale, openLayouts, handleNewSale, switchBetweenComponents, handleOpenAreaSale, openAreaSale, handleEditSale, deleteSale, } = UseSale()
  const { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer } = UseCustomer()
  const { getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndSaleProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveSaleAndSaleProducts, calculateTotalValue } = UseProduct()
  const { handleSaveSaleAndSaleBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill } = UseBill()

  return (
    <SaleContext.Provider value={{
     /*UseGeneral*/ handleRenderNavItem, navItems,
     /*UseLeaf*/ handleChangeSale, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotalDiscountSale, openModal, setOpenModal, searchSale, dataSearchSale, openLayouts, handleNewSale, switchBetweenComponents, handleOpenAreaSale, openAreaSale, handleEditSale, deleteSale,
     /*UseCustomer*/ getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer,
     /*UseProduct*/ getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndSaleProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveSaleAndSaleProducts, calculateTotalValue,
     /*UseBill*/ handleSaveSaleAndSaleBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill
    }}>
      {children}
    </SaleContext.Provider>
  )
}


export { SaleProvider, SaleContext }