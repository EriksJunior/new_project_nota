import { ContentProduct, ContentMetrics } from "./styles"
import { Product } from "../.."
// import { Metrics } from "../../components/"
import { ContentDesigner } from "../../../Tab"

export function CreateProduct() {
  return (
    <ContentProduct className="m-3">
      <ContentDesigner title={"Cadastre novos Produtos"} fistButtonName={"Cadastro"}>
        <Product />
      </ContentDesigner>

      <ContentMetrics>
        {/* <Metrics /> */}
      </ContentMetrics>
    </ContentProduct>
  )
}