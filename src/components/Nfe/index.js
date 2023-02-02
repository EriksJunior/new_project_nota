import { Header } from "./components/UI/Header"
import { Nav } from "./components/UI/Nav"
import { ProductNfe } from "./components/UI/ProductNfe"
import { CustomertNfe } from "./components/UI/CustomerNfe"
import { PedidoNfe } from "./components/UI/PedidoNfe"
import { TransporteNfe } from "./components/UI/TransporteNfe"

import { useContext } from "react"
import { LeafContext } from "./context"

import { ContentNfe } from "./styles"
import { ContainerNav } from "./components/UI/Nav/styles"


export function FormTaxDocument() {
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
