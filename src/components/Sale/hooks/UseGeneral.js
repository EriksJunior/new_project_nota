import { useState } from "react";

import { INITIAL_VALUE_NAV_ITEMS } from "../initialStates";

export function UseGeneral() {
  const [navItems, setNavItems] = useState(INITIAL_VALUE_NAV_ITEMS)
  

  const handleRenderNavItem = (value) => {
    setNavItems({ ...navItems, cliente: true, produto: true, pedido: true, transporte: true, [value]: false })
  }




  return { handleRenderNavItem, navItems}
}