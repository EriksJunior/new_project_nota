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

const LeafContext = createContext({})

function LeafProvider({ children }) {
  const { handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf } = UseGeneral()

  return (
    <LeafContext.Provider value={{
      handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf

    }}>
      {children}
    </LeafContext.Provider>
  )
}


export { LeafProvider, LeafContext }