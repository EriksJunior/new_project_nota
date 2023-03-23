import { useSelector } from "react-redux"
import { useContext } from "react"
import { SaleContext } from "../../../context"
import { DetailedDataCard } from "../../../../DetailedDataCard"

import { ContentAreaCustomer, ContentDetailedDataCard } from "./styles"


export function SaleArea() {
  const pedido = useSelector(state => state.sale.pedido)
  const cliente = useSelector(state => state.sale.cliente)
  const { deleteSale, handleEditSale } = useContext(SaleContext)

  // const valorTotal = pedido.products.reduce((oldValue, newValue) => oldValue.valorTotal + newValue.valorTotal)
  const detailsSale = [`Data: ${pedido.dataVenda?.split("-").reverse().join("/") || ""}`, `Status: ${pedido.status || ""}`, `Dados adicionais: ${pedido.dadosAdicionais || ""}`]

  return (
    <>
        <ContentAreaCustomer >
          <ContentDetailedDataCard>
            <DetailedDataCard details={detailsSale} titleDetails={cliente.nome} edit={handleEditSale} delet={() => console.log(pedido)} generateSale responsiveCustomer={"respCustomer"} />
          </ContentDetailedDataCard>
        </ContentAreaCustomer>
    </>
  )
}