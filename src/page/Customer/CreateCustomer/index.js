import { ContentPageCustomer, ContentMetrics } from "./styles"
import { ClientProvider } from "../../../context/Client/client"
import { Customer } from "../../../components/Customer"
import { Metrics } from "../../../components/Customer/components/Metrics"
import { ContentDesigner } from "../../../components/Tab"

export function PageCreateCustomer() {
  return (
    <ContentPageCustomer className="m-3">
      <ClientProvider>
        <ContentDesigner title={"Cadastre novos clientes"} fistButtonName={"Cadastro"}>
          <Customer />
        </ContentDesigner>

        <ContentMetrics>
          <Metrics />
        </ContentMetrics>
      </ClientProvider>
    </ContentPageCustomer>
  )
}