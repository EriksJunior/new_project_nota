import { useContext } from "react"
import { ContentHeader } from "./styles"

import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

export function Header() {
  const { handleComponentDisplay } = useContext(InfoFiscaleContext)

  return (
    <ContentHeader>
      <button name="description" className="btn btn-primary" onClick={handleComponentDisplay}>Geral</button>
      <button name="icms" className="btn btn-primary" onClick={handleComponentDisplay}>ICMS</button>
      <button name="ipi" className="btn btn-primary" onClick={handleComponentDisplay}>IPI</button>
      <button name="pis" className="btn btn-primary" onClick={handleComponentDisplay}>PIS</button>
      <button name="cofins" className="btn btn-primary" onClick={handleComponentDisplay}>COFINS</button>
      <button name="issqn" className="btn btn-primary" onClick={handleComponentDisplay}>ISSQN</button>
      <button name="information" className="btn btn-primary" onClick={handleComponentDisplay}>Informações</button>
      <button name="createdRefs" className="btn btn-primary" onClick={handleComponentDisplay}>Refs Cadastrados</button>
    </ContentHeader>
  )
}