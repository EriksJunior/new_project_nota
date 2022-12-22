import { Header } from "./Header"
import { Nav } from "./Nav"
import { ContentNfe } from "./styles"
import { ContainerNav } from "./Nav/styles"

export function Nfe() {
  return (
    <ContentNfe>
      <Header />

      <ContainerNav >
        <Nav><p>TESTE</p></Nav>
      </ContainerNav>
    </ContentNfe>
  )
}
