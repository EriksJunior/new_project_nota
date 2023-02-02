import { ContentTaxDocument, ContentMetrics } from "./styles"
import { FormTaxDocument } from "../.."
// import { Metrics } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"

export function CreateTaxDocument() {
  return (
    <ContentTaxDocument className="m-3 animate">
      <ContentDesigner title={"Realize emissões de documentos fiscais"}>
        <FormTaxDocument />
      </ContentDesigner>

      <ContentMetrics>
        <p className="m-3">Metricas</p>
        {/* <Metrics /> */}
      </ContentMetrics>
    </ContentTaxDocument>
  )
}