import { ContentProduct, ContentMetrics } from "./styles"
import { FormProduct } from "../../"
import { MetricsProd } from "../../components/UI/Metrics"
import { ContentDesigner } from "../../../Tab"

export function CreateProduct() {
  return (
    <ContentProduct className="m-3 animate">
      <ContentDesigner title={"Cadastre novos Produtos"} fistButtonName={"Cadastro"}>
        <FormProduct />
      </ContentDesigner>

      <ContentMetrics>
        <MetricsProd />
      </ContentMetrics>
    </ContentProduct>
  )
}