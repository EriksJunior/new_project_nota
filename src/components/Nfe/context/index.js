// import { createContext } from "react";
// import { UseLeaf } from "../hooks";

// const LeafContext = createContext({})

// function LeafProvider({ children }) {
//   const { produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, cpfCnpjCliente, handleTotalValueProducts, sendLeaf, handleShow, handleClose, show, searchLeaf, handleChangeSeachLeaf, search, resultSearchLeaf, findLeafById, deleteLeafAndProducts, handleTotalValueGeneralLeafInformation, cancelLeaf, handleCloseModalCancelLeaf, handleShowModalCancelLeaf, showModalCancelLeaf, handleChangeCancelLeaf, handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents } = UseLeaf()

//   return (
//     <LeafContext.Provider value={{ produtoLeaf, setProdutoLeaf, pedido, setPedido, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, cpfCnpjCliente, handleTotalValueProducts, sendLeaf, handleShow, handleClose, show, searchLeaf, handleChangeSeachLeaf, search, resultSearchLeaf, findLeafById, deleteLeafAndProducts, handleTotalValueGeneralLeafInformation, cancelLeaf, handleCloseModalCancelLeaf, handleShowModalCancelLeaf, showModalCancelLeaf, handleChangeCancelLeaf, handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents }}>
//       {children}
//     </LeafContext.Provider>
//   )
// }


// export { LeafProvider, LeafContext }

import { createContext } from "react";
import { UseGeneral } from "../hooks/UseGeneral";
import { UseLeaf } from "../hooks/UseLeaf";
import { UseCustomer } from "../hooks/UseCustomer";
import { UseProduct } from "../hooks/UseProduct";

const LeafContext = createContext({})

function LeafProvider({ children }) {
  const { handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf } = UseGeneral()
  const { pedido, handleChangePedido } = UseLeaf()
  const { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, customer, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer } = UseCustomer()
  const { getProcuctsFromSelectBox, productsFromSelectBox, addProducts, removeProducts, products, handleChangeProducts, saveLeafProducts } = UseProduct()

  return (
    <LeafContext.Provider value={{
     /*UseGeneral*/ handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf,
     /*UseLeaf*/ pedido, handleChangePedido,
     /*UseCustomer*/ getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, customer, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer,
     /*UseProduct*/ getProcuctsFromSelectBox, productsFromSelectBox, addProducts, removeProducts, products, handleChangeProducts, saveLeafProducts
    }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }