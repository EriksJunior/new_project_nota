import { useEffect, useContext } from "react"
import { useSelector, useDispatch } from "react-redux"
import { SAVE_LEAF } from "./store/reducers/LeafReducers"

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
  const { navItems, switchBetweenComponents, getCustomersFromSelectBox, getProcuctsFromSelectBox } = useContext(LeafContext)
  const dispatch = useDispatch()
  const stateInital = useSelector((state) => state.leaf.cliente)

  useEffect(() => {
    getCustomersFromSelectBox()
    getProcuctsFromSelectBox()
  }, [])

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

      <Div style={{ width: "80%", display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
        <Button className="btn btn-primary btn-sm" onClick={switchBetweenComponents}>Voltar</Button>
        <Button className="btn btn-primary btn-sm" onClick={() => dispatch(SAVE_LEAF({...stateInital, id: "23987498324728937dsuhfs"}))}>testando</Button>
      </Div>
    </ContentNfe>
  )
}
