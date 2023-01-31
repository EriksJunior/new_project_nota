import { useContext } from "react"
import { InfoFiscaleContext } from "../../../context/InfoFiscale/infoFiscale"

import { Header } from "../components/Header"

import { Description } from "../components/Description"
import { Icms } from "../components/Icms"
import { Ipi } from "../components/Ipi"
import { Pis } from "../components/Pis"
import { Cofins } from "../components/Cofins"
import { Issqn } from "../components/Issqn"
import { Information } from "../components/Information"
import { CreatedRefs } from "../components/CreatedRefs"

import { ContentInfoFiscal, CardInfoFiscal } from "./styles"
import { Div, AnimateCard, ContentGeneralButtons, ContentButtonsSaveOrClear, Button } from "../../styles"

export function LayoutInfoFiscale() {
  const { enable, handleSaveOrUpdate } = useContext(InfoFiscaleContext)

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

          <Div hidden={enable.createdRefs} className="animate">
            <CreatedRefs />
          </Div>
        </CardInfoFiscal>

        <ContentGeneralButtons className='row mt-2 p-2 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <ContentButtonsSaveOrClear className='col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <Button type="button" className="btn btn-primary btn-sm" onClick={handleSaveOrUpdate}>Salvar</Button>
            <Button type="button" className="btn btn-primary btn-sm">Limpar</Button>
          </ContentButtonsSaveOrClear>
        </ContentGeneralButtons>
      </AnimateCard >

    </ContentInfoFiscal>
  )
}