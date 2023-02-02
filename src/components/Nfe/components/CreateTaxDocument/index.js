import { Header } from "./components/Header"
import { Nav } from "./components/Nav"
import { ProductNfe } from "./components/ProductNfe"
import { CustomertNfe } from "./components/CustomerNfe"
import { PedidoNfe } from "./components/PedidoNfe"
import { TransporteNfe } from "./components/TransporteNfe"

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
