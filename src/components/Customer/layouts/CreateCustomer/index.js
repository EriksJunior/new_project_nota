import { ContentCustomer, ContentMetrics } from "./styles"
import { Customer } from "../../"
import { Metrics } from "../../components/Metrics"
import { ContentDesigner } from "../../../Tab"

export function CreateCustomer() {
  return (
    <ContentCustomer className="m-3 animate">
      <ContentDesigner title={"Cadastre novos clientes"} fistButtonName={"Cadastro"}>
        <Customer />
      </ContentDesigner>

      <ContentMetrics>
        <Metrics />
      </ContentMetrics>
    </ContentCustomer>
  )
}