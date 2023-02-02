import { useContext } from "react"
import { ProductContext } from "../../../context"

import { DetailedDataCard } from "../../../../DetailedDataCard"
import { InfoFiscale } from "../../../../InfoFiscal"

import { ContentAreaProduct, ContentDetailedDataCard } from "./styles"

export function ProductArea() {
  const { produtos, handleEditProduct } = useContext(ProductContext)

  const detailsProduct = [`Valor Venda: ${produtos.valorVenda}`, `Unidade: ${produtos.unidade || ""}`, `Estoque: ${produtos.estoque || ""}`, `descricao: ${produtos.descricao || ""}`]

  return (
    <ContentAreaProduct>
      {produtos.nome !== "" ?
        <ContentDetailedDataCard>
          <DetailedDataCard details={detailsProduct} titleDetails={produtos.nome} edit={handleEditProduct} />
        </ContentDetailedDataCard>
        : ""
      }

      {produtos.nome !== "" ? <InfoFiscale /> : ""}

    </ContentAreaProduct>
  )
}