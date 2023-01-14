import { useContext } from "react"
import { ContentHeader } from "./styles"

import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

export function Header() {
  const { setEnable } = useContext(InfoFiscaleContext)

  return (
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