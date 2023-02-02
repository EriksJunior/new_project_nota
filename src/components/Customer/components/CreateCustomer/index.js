import { ContentCustomer, ContentMetrics } from "./styles"
import { FormCustomer } from "../../"
import { Metrics } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"

export function CreateCustomer() {
  return (
    <ContentCustomer className="m-3 animate">
      <ContentDesigner title={"Cadastre novos clientes"} >
        <FormCustomer />
      </ContentDesigner>

      <ContentMetrics>
        <Metrics />
      </ContentMetrics>
    </ContentCustomer>
  )
}