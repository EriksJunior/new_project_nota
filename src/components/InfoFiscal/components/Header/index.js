import { useContext } from "react"
import { ContentHeader } from "./styles"

import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

export function Header() {
  const { handleComponentDisplay } = useContext(InfoFiscaleContext)

  return (
    <ContentHeader>
      <button name="description" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>Geral</button>
      <button name="icms" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>ICMS</button>
      <button name="ipi" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>IPI</button>
      <button name="pis" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>PIS</button>
      <button name="cofins" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>COFINS</button>
      <button name="issqn" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>ISSQN</button>
      <button name="information" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>Informações</button>
      <button name="createdRefs" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e.currentTarget.name)}>Refs Cadastrados</button>
    </ContentHeader>
  )
}