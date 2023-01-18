import { useContext } from "react"
import { ContentHeader } from "./styles"

import { InfoFiscaleContext } from "../../../../context/InfoFiscale/infoFiscale"

export function Header() {
  const { enable, setEnable } = useContext(InfoFiscaleContext)

  return (
    <ContentHeader>
      <button name="description" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["description"] })}>Geral</button>
      <button name="icms" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["icms"] })}>ICMS</button>
      <button name="ipi" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["ipi"] })}>IPI</button>
      <button name="pis" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["pis"] })}>PIS</button>
      <button name="cofins" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["cofins"] })}>COFINS</button>
      <button name="issqn" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["issqn"] })}>ISSQN</button>
      <button name="information" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["information"] })}>Informações</button>
      <button name="createdRefs" className="btn btn-primary" onClick={(e) => setEnable({ ...enable, [e.currentTarget.name]: !enable["createdRefs"] })}>Refs Cadastrados</button>
    </ContentHeader>
  )
}