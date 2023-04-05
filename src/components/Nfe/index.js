import { useEffect, useContext } from "react"
import { useSelector } from "react-redux";
import { LeafContext } from "./context"

import { Header } from "./components/UI/Header"
import { Nav } from "./components/UI/Nav"
import { ProductNfe } from "./components/UI/ProductNfe"
import { CustomertNfe } from "./components/UI/CustomerNfe"
import { PedidoNfe } from "./components/UI/PedidoNfe"
import { TransporteNfe } from "./components/UI/TransporteNfe"

import { ContentNfe } from "./styles"
import { ContainerNav } from "./components/UI/Nav/styles"
import { Div, Button } from "../styles"

export function FormLeaf() {
  const { navItems, getCustomersFromSelectBox, getProcuctsFromSelectBox } = useContext(LeafContext)
  const pedido = useSelector(state => state.leaf.pedido)
  // handleSendLeafAndFind
  useEffect(() => {
    getCustomersFromSelectBox()
    getProcuctsFromSelectBox()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ContentNfe>
      <Header />

      <ContainerNav >
        <Nav>
          <Div hidden={navItems.cliente}>
            <CustomertNfe />
          </Div>

          <Div hidden={navItems.produto}>
            <ProductNfe />
          </Div>

          <Div hidden={navItems.pedido}>
            <PedidoNfe />
          </Div>

          <Div hidden={navItems.transporte}>
            <TransporteNfe />
          </Div>
        </Nav>
      </ContainerNav>
    </ContentNfe>
  )
}
