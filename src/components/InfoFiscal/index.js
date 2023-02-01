import { Taxes } from "./components/index"
import { InfoFiscaleProvider } from "../../context/InfoFiscale/infoFiscale"

export function InfoFiscale() {
  return (
    <>
      <InfoFiscaleProvider>
        <Taxes />
      </InfoFiscaleProvider>
    </>
  )
}