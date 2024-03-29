import { useSelector } from "react-redux"
import { useContext } from "react"
import { SaleContext } from "../../../context"
import { DetailedDataCard } from "../../../../DetailedDataCard"

import { ContentAreaCustomer, ContentDetailedDataCard } from "./styles"

export function SaleArea() {
  const pedido = useSelector(state => state.sale.pedido)
  const { deleteSale, handleEditSale, dataSearchSale } = useContext(SaleContext)
  const customerSelected = dataSearchSale.find(sale => sale.id === pedido.id)

  // const valorTotal = pedido.products.reduce((oldValue, newValue) => oldValue.valorTotal + newValue.valorTotal)
  const detailsSale = [`Data: ${pedido.data?.split("-").reverse().join("/") || ""}`, `Status: ${pedido.status || ""}`, `Dados adicionais: ${pedido.dadosAdicionais || ""}`]

  return (
    <>
        <ContentAreaCustomer >
          <ContentDetailedDataCard>
            <DetailedDataCard details={detailsSale} titleDetails={customerSelected?.nomeCliente} edit={handleEditSale} remove={() => console.log(pedido)} generateSale responsiveCustomer={"respCustomer"} />
          </ContentDetailedDataCard>
        </ContentAreaCustomer>
    </>
  )
}