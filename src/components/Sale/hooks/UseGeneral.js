import { useState } from "react";

import { INITIAL_VALUE_NAV_ITEMS } from "../initialStates";

export function UseGeneral() {
  const [navItems, setNavItems] = useState(INITIAL_VALUE_NAV_ITEMS)
  const [openAreaSale, setOpenAreaSale] = useState(false)
  const [openLayouts, setOpenLayouts] = useState(false)

  const handleRenderNavItem = (value) => {
    setNavItems({ ...navItems, cliente: true, produto: true, pedido: true, transporte: true, [value]: false })
  }

  const handleNewSale = () => {
    setOpenLayouts(true)
  }

    const handleOpenAreaSale = async () => {
    setOpenAreaSale(true)
  }

  const switchBetweenComponents = () => {
    // setOpenAreaCustomer(false)
    setOpenLayouts(false)
    // clearAllInputs()
  }


  return { handleRenderNavItem, navItems, openLayouts, handleNewSale, switchBetweenComponents, handleOpenAreaSale }
}