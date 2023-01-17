
import { ContentInfoFiscal, CardInfoFiscal } from "./styles"
import { Div } from "../../styles"

import { Header } from "../components/Header"
import { Icms } from "../components/Icms"
import { Description } from "../components/Description"
import { Ipi } from "../components/Ipi"

import { useContext } from "react"
import { InfoFiscaleContext } from "../../../context/InfoFiscale/infoFiscale"

export function LayoutInfoFiscale() {
  const { enable } = useContext(InfoFiscaleContext)

  return (
    <ContentInfoFiscal className="mt-3">
      <Header />

      <CardInfoFiscal className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <Div hidden={enable.description}>
          <Description />
        </Div>

        <Div hidden={enable.icms}>
          <Icms />
        </Div>

        <Div hidden={enable.ipi}>
          <Ipi />
        </Div>
      </CardInfoFiscal>
    </ContentInfoFiscal>
  )
}