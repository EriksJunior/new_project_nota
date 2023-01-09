import { useContext } from "react"
import { ProductContext } from "../../../../context/Product/product"

import { DetailedDataCard } from "../../../DetailedDataCard"

export function ProductArea() {
  const { produtos } = useContext(ProductContext)

  const detailsProduct = [`Valor Venda: ${produtos.valorVenda}`, `Unidade: ${produtos.unidade}`, `Estoque: ${produtos.estoque}`, `descricao: ${produtos.descricao}`]

  return (
    <>
      <DetailedDataCard details={detailsProduct} titleDetails={produtos.nome}/>
    </>
  )
}