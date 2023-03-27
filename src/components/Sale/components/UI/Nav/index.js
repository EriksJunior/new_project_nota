import { ContentNavItems, NavItems, Div } from "./styles"
import { ContentNav } from "../../../styles"
import { useContext } from "react"
import { SaleContext } from "../../../context"

import { IoPersonAdd } from "react-icons/io5"
import { BsBasket2Fill } from "react-icons/bs"
import { IoIosPaper } from "react-icons/io"


export function Nav({ children }) {
  const { handleRenderNavItem } = useContext(SaleContext)

  return (
    <Div>
      <ContentNavItems>
        <NavItems onClick={() => handleRenderNavItem("cliente")}>
          <IoPersonAdd size={25} color={"white"}/><p>Cliente</p>
        </NavItems>
        <NavItems onClick={() => handleRenderNavItem("produto")}>
          <BsBasket2Fill size={25} color={"white"} /><p>Produto</p>
        </NavItems>
        <NavItems onClick={() => handleRenderNavItem("pedido")}>
          <IoIosPaper size={25} color={"white"} /><p>Pedido</p>
        </NavItems>
      </ContentNavItems>

      <ContentNav>
        {children}
      </ContentNav>
    </Div>
  )
}