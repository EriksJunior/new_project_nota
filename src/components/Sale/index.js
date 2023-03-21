import { useEffect, useContext } from "react"

import { SaleContext } from "./context"

import { Nav } from "./components/UI/Nav"
import { ProductSale } from "./components/UI/ProductSale"
import { Customer } from "./components/UI/Customer"
import { Sale } from "./components/UI/Sale"
import { TransporteNfe } from "./components/UI/TransporteNfe"

import { ContentNfe } from "./styles"
import { ContainerNav } from "./components/UI/Nav/styles"
import { Div, Button } from "../styles"

export function FormSale() {
  const { navItems, switchBetweenComponents, getCustomersFromSelectBox, getProcuctsFromSelectBox } = useContext(SaleContext)

  useEffect(() => {
    getCustomersFromSelectBox()
    getProcuctsFromSelectBox()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ContentNfe>
      <ContainerNav >
        <Nav>
          <Div hidden={navItems.cliente}>
            <Customer />
          </Div>

          <Div hidden={navItems.produto}>
            <ProductSale />
          </Div>

          <Div hidden={navItems.pedido}>
            <Sale />
          </Div>

          <Div hidden={navItems.transporte}>
            <TransporteNfe />
          </Div>
        </Nav>
      </ContainerNav>

      <Div style={{ width: "80%", display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        <Button className="btn btn-primary btn-sm" onClick={switchBetweenComponents}>Voltar</Button>
      </Div>
    </ContentNfe>
  )
}
