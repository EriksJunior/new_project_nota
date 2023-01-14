import { useContext } from "react"
import { ContentHeader } from "./styles"

import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

export function Header() {
  const { handleComponentDisplay, setEnable } = useContext(InfoFiscaleContext)

  return (
    <ContentHeader>
      <button name="description" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>Geral</button>
      <button name="icms" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>ICMS</button>
      <button name="ipi" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>IPI</button>
      <button name="pis" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>PIS</button>
      <button name="cofins" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>COFINS</button>
      <button name="issqn" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>ISSQN</button>
      <button name="information" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>Informações</button>
      <button name="createdRefs" className="btn btn-primary" onClick={(e) => handleComponentDisplay(e)}>Refs Cadastrados</button>
    </ContentHeader>
  )
}