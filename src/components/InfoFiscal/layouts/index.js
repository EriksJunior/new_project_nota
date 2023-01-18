
import { ContentInfoFiscal, CardInfoFiscal } from "./styles"
import { Div, AnimateCard } from "../../styles"

import { Header } from "../components/Header"
import { Icms } from "../components/Icms"
import { Description } from "../components/Description"
import { Ipi } from "../components/Ipi"
import { Pis } from "../components/Pis"

import { useContext } from "react"
import { InfoFiscaleContext } from "../../../context/InfoFiscale/infoFiscale"
import { Cofins } from "../components/Cofins"
import { Issqn } from "../components/Issqn"
import { Information } from "../components/Information"

export function LayoutInfoFiscale() {
  const { enable } = useContext(InfoFiscaleContext)

  return (
    <ContentInfoFiscal className="mt-3">
      <Header />

      <AnimateCard>
        <CardInfoFiscal className="row col-sm-12 col-md-12 col-lg-12 col-xl-12 animate">
          <Div hidden={enable.description} className="animate">
            <Description />
          </Div>

          <Div hidden={enable.icms} className="animate">
            <Icms />
          </Div>

          <Div hidden={enable.ipi} className="animate">
            <Ipi />
          </Div>

          <Div hidden={enable.pis} className="animate">
            <Pis />
          </Div>

          <Div hidden={enable.cofins} className="animate">
            <Cofins />
          </Div>

          <Div hidden={enable.issqn} className="animate">
            <Issqn />
          </Div>

          <Div hidden={enable.information} className="animate">
            <Information />
          </Div>
        </CardInfoFiscal>
      </AnimateCard >
    </ContentInfoFiscal>
  )
}