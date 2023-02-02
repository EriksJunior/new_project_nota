import { ContentNavItems, NavItems, Div } from "./styles"
import { ContentNav } from "../../styles"
import { useContext } from "react"
import { LeafContext } from "../../../../context/Leaf/leaf"

import { IoPersonAdd } from "react-icons/io5"
import { FaTruckMoving } from "react-icons/fa"
import { BsBasket2Fill } from "react-icons/bs"
import { IoIosPaper } from "react-icons/io"


export function Nav({ children }) {
  const { handleRenderNavItem } = useContext(LeafContext)

  return (
    <Div>
      <ContentNavItems>
        <NavItems name="cliente" onClick={(e) => handleRenderNavItem(e.target.name)}>
          <IoPersonAdd size={25} color={"white"} /><p>Cliente</p>
        </NavItems>
        <NavItems name="produto" onClick={(e) => handleRenderNavItem(e.target.name)}>
          <BsBasket2Fill size={25} color={"white"} /><p>Produto</p>
        </NavItems>
        <NavItems name="transporte" onClick={(e) => handleRenderNavItem(e.target.name)}>
          <FaTruckMoving size={25} color={"white"} /><p>Transporte</p>
        </NavItems>
        <NavItems name="pedido" onClick={(e) => handleRenderNavItem(e.target.name)}>
          <IoIosPaper size={25} color={"white"} /><p>Pedido</p>
        </NavItems>
      </ContentNavItems>

      <ContentNav>
        {children}
      </ContentNav>
    </Div>
  )
}