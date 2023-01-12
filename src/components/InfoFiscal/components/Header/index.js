import { ContentHeader } from "./styles"
export function Header(){

  return(
    <ContentHeader>
      <button className="btn btn-primary">Geral</button>
      <button className="btn btn-primary">ICMS</button>
      <button className="btn btn-primary">IPI</button>
      <button className="btn btn-primary">PIS</button>
      <button className="btn btn-primary">COFINS</button>
      <button className="btn btn-primary">ISSQN</button>
      <button className="btn btn-primary">Informações</button>
      <button className="btn btn-primary">Refs Cadastrados</button>
    </ContentHeader>
  )
}