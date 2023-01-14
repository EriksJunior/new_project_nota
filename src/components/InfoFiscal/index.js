import { LayoutInfoFiscale } from "./layouts"
import { InfoFiscaleProvider } from "../../context/InfoFiscale/infoFiscale"

export function InfoFiscal() {

  return (
    <>
      <InfoFiscaleProvider>
        <LayoutInfoFiscale />
      </InfoFiscaleProvider>
    </>
  )
}