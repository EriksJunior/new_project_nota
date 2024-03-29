import { ContentTaxDocument, ContentMetrics } from "./styles"
import { FormSale } from "../.."
// import { Metrics } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"

export function CreateSale() {
  return (
    <ContentTaxDocument className="m-3 animate">
      <ContentDesigner title={"Realize suas vendas! :D"}>
        <FormSale />
      </ContentDesigner>

      <ContentMetrics>
        <p className="m-3">Metricas</p>
        {/* <Metrics /> */}
      </ContentMetrics>
    </ContentTaxDocument>
  )
}