import { ClientProvider } from "../../../context/Client/client"
import { Customer } from "../../../components/Customer"
import { Metrics } from "../../../components/Customer/Metrics"
import { ContentDesigner } from "../../../components/Tab"
import { ContentPageCustomer, ContentMetrics } from "./styles"

export function PageCustomer() {
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