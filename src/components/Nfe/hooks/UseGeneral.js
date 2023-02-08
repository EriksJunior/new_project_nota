import { useState } from "react";

import { INITIAL_VALUE_NAV_ITEMS } from "../../../initialStates/leaf";

export function UseGeneral() {
  const [navItems, setNavItems] = useState(INITIAL_VALUE_NAV_ITEMS)
  const [openAreaLeaf, setOpenAreaLeaf] = useState(false)
  const [openLayouts, setOpenLayouts] = useState(false)

  const handleRenderNavItem = (value) => {
    setNavItems({ ...navItems, cliente: true, produto: true, pedido: true, transporte: true, [value]: false })
  }

  const handleNewLeaf = () => {
    setOpenLayouts(true)
  }

    const handleOpenAreaLeaf = async () => {
    setOpenAreaLeaf(true)
  }

  const switchBetweenComponents = () => {
    // setOpenAreaCustomer(false)
    setOpenLayouts(false)
    // clearAllInputs()
  }


  return { handleRenderNavItem, navItems, openLayouts, handleNewLeaf, switchBetweenComponents, handleOpenAreaLeaf }
}