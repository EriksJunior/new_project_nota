import { createContext } from "react";
import { UseGeneral } from "../hooks/UseGeneral";
import { UseSale } from "../hooks/UseSale";
import { UseCustomer } from "../hooks/UseCustomer";
import { UseProduct } from "../hooks/UseProduct";
import { UseBill } from "../hooks/useBill";

const SaleContext = createContext({})

function SaleProvider({ children }) {
  const { handleRenderNavItem, navItems, openLayouts, handleNewSale, switchBetweenComponents, handleOpenAreaSale } = UseGeneral()
  const { handleChangeSale, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotaDiscountSale, openModal, setOpenModal, searchSale, dataSearchSale } = UseSale()
  const { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer } = UseCustomer()
  const { getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndSaleProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveSaleAndSaleProducts, calculateTotalValue } = UseProduct()
  const { handleSaveSaleAndSaleBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill } = UseBill()

  return (
    <SaleContext.Provider value={{
     /*UseGeneral*/ handleRenderNavItem, navItems, openLayouts, handleNewSale, switchBetweenComponents, handleOpenAreaSale,
     /*UseLeaf*/ handleChangeSale, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotaDiscountSale, openModal, setOpenModal, searchSale, dataSearchSale,
     /*UseCustomer*/ getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer,
     /*UseProduct*/ getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndSaleProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveSaleAndSaleProducts, calculateTotalValue,
     /*UseBill*/ handleSaveSaleAndSaleBills, addBillToList, confirmRemoveBill, handleChangeConfirmRemoveBill, removeBillFromList, cancelRemoveBill, handleChangeBill
    }}>
      {children}
    </SaleContext.Provider>
  )
}


export { SaleProvider, SaleContext }