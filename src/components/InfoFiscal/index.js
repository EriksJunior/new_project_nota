import { LayoutInfoFiscale } from "./layouts"
import { InfoFiscaleProvider } from "../../context/InfoFiscale/infoFiscale"

export function InfoFiscale() {
  return (
    <>
      <InfoFiscaleProvider>
        <LayoutInfoFiscale />
      </InfoFiscaleProvider>
    </>
  )
}