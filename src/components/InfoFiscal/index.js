import { Taxes } from "./components/index"
import { InfoFiscaleProvider } from "./context"

export function InfoFiscale() {
  return (
    <>
      <InfoFiscaleProvider>
        <Taxes />
      </InfoFiscaleProvider>
    </>
  )
}