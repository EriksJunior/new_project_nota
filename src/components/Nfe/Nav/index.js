import { ContentNavItems, NavItems } from "./styles"
import { ContentNav } from "../styles"
import { useContext } from "react"
import { LeafContext } from "../../../context/Leaf/leaf"

export function Nav({ children }) {
  const { handleRenderNavItem } = useContext(LeafContext)

  return (
    <div>
      <ContentNavItems>
        <NavItems name="cliente" onClick={(e) => handleRenderNavItem(e.target.name)}></NavItems>
        <NavItems name="produto" onClick={(e) => handleRenderNavItem(e.target.name)}></NavItems>
        <NavItems name="transporte" onClick={(e) => handleRenderNavItem(e.target.name)}></NavItems>
        <NavItems name="pedido" onClick={(e) => handleRenderNavItem(e.target.name)}></NavItems>
      </ContentNavItems>

      <ContentNav>
        {children}
      </ContentNav>
    </div>
  )
}