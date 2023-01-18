import { useContext } from "react"
import { ProductContext } from "../../../../context/Product/product"

import { DetailedDataCard } from "../../../DetailedDataCard"
import { InfoFiscal } from "../../../InfoFiscal"

import { ContentAreaProduct } from "./styles"

export function ProductArea() {
  const { produtos, handleEditProduct } = useContext(ProductContext)

  const detailsProduct = [`Valor Venda: ${produtos.valorVenda}`, `Unidade: ${produtos.unidade || ""}`, `Estoque: ${produtos.estoque || ""}`, `descricao: ${produtos.descricao || ""}`]

  return (
    <ContentAreaProduct>
      {produtos.nome !== "" ?
        <DetailedDataCard details={detailsProduct} titleDetails={produtos.nome} edit={handleEditProduct} /> : ""
      }
      
      {produtos.nome !== "" ? <InfoFiscal /> : ""}
    
    </ContentAreaProduct>
  )
}