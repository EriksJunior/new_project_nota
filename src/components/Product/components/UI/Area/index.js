import { useContext } from "react"
import { ProductContext } from "../../../context"

import { DetailedDataCard } from "../../../../DetailedDataCard"
import { InfoFiscale } from "../../../../InfoFiscal"

import { ContentAreaProduct } from "./styles"

export function ProductArea() {
  const { produtos, handleEditProduct } = useContext(ProductContext)

  const detailsProduct = [`Valor Venda: ${produtos.valorVenda}`, `Unidade: ${produtos.unidade || ""}`, `Estoque: ${produtos.estoque || ""}`, `descricao: ${produtos.descricao || ""}`]

  return (
    <ContentAreaProduct>
      {produtos.nome !== "" ?
        <DetailedDataCard details={detailsProduct} titleDetails={produtos.nome} edit={handleEditProduct} /> : ""
      }
      
      {produtos.nome !== "" ? <InfoFiscale /> : ""}
    
    </ContentAreaProduct>
  )
}