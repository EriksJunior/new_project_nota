import { useContext } from "react"
import { ProductContext } from "../../../../context/Product/product"

import { DetailedDataCard } from "../../../DetailedDataCard"
import { InfoFiscal } from "../../../InfoFiscal"

export function ProductArea() {
  const { produtos, handleEditProduct } = useContext(ProductContext)

  const detailsProduct = [`Valor Venda: ${produtos.valorVenda}`, `Unidade: ${produtos.unidade || ""}`, `Estoque: ${produtos.estoque || ""}`, `descricao: ${produtos.descricao || ""}`]

  return (
    <div style={{display: "flex", flexWrap: "wrap"}}>
      {produtos.nome !== "" ?
        <DetailedDataCard details={detailsProduct} titleDetails={produtos.nome} edit={handleEditProduct} /> : ""
      }
      
      {produtos.nome !== "" ? <InfoFiscal /> : ""}
    
    </div>
  )
}