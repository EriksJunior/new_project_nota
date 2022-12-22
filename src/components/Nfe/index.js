import { Header } from "./Header"
import { Nav } from "./Nav"
import { ProductNfe } from "./ProductNfe"

import { ContentNfe } from "./styles"
import { ContainerNav } from "./Nav/styles"


export function Nfe() {
  return (
    <ContentNfe>
      <Header />

      <ContainerNav >
        <Nav>
          <ProductNfe />
        </Nav>
      </ContainerNav>
    </ContentNfe>
  )
}
