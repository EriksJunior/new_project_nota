import { Header } from "./Header"
import { Nav } from "./Nav"
import { ProductNfe } from "./ProductNfe"
import { CustomertNfe } from "./CustomerNfe"
import { PedidoNfe } from "./PedidoNfe"
import { TransporteNfe } from "./TransporteNfe"

import { useContext } from "react"
import { LeafContext } from "../../context/Leaf/leaf"

import { ContentNfe } from "./styles"
import { ContainerNav } from "./Nav/styles"


export function Nfe() {
  const { navItems } = useContext(LeafContext)

  return (
    <ContentNfe>
      <Header />

      <ContainerNav >
        <Nav>
          {navItems.cliente &&
            <CustomertNfe />
          }
          {navItems.produto &&
            <ProductNfe />
          }
          {navItems.pedido &&
            <PedidoNfe />
          }
          {navItems.transporte &&
            <TransporteNfe />
          }
        </Nav>
      </ContainerNav>
    </ContentNfe>
  )
}
