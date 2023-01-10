import { ContentProduct, ContentMetrics } from "./styles"
import { Product } from "../.."
import { MetricsProd } from "../../components/Metrics"
import { ContentDesigner } from "../../../Tab"

export function CreateProduct() {
  return (
    <ContentProduct className="m-3">
      <ContentDesigner title={"Cadastre novos Produtos"} fistButtonName={"Cadastro"}>
        <Product />
      </ContentDesigner>

      <ContentMetrics>
        <MetricsProd />
      </ContentMetrics>
    </ContentProduct>
  )
}