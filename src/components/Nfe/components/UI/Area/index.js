import { useSelector } from "react-redux"
import { useContext } from "react"
import { LeafContext } from "../../../context"
import { DetailedDataCard } from "../../../../DetailedDataCard"

import { ContentAreaCustomer, ContentDetailedDataCard } from "./styles"

export function LeafArea() {
  const pedido = useSelector(state => state.leaf.pedido)
  const { deleteSale, handleEditLeaf, dataSearchLeaf } = useContext(LeafContext)
  const customerSelected = dataSearchLeaf.find(leaf => leaf.id === pedido.id)

  const totalCurrency = pedido.total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  const discountCurrency = pedido.desconto.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  const modelo = pedido.modelo === "1" ? "NF-e" : "NFC-e"
  const finalidade = pedido.finalidade === 1 ? "Normal" : "Devolução"

  const detailsLeaf = [totalCurrency, discountCurrency, modelo, finalidade]
  const headerLeaf = ["Valor Total", "Descontos Totais", "Tipo de documento", "FInalidade"]

  return (
    <>
      <ContentAreaCustomer >
        <ContentDetailedDataCard>
          <div style={{ display: "flex", gap: "50px", alignItems: "center", backgroundColor: "#0d566f", height: "60px", padding: "10px", borderRadius: "5px" }}>
            {detailsLeaf.map((item, index) =>
              <div>
                <div style={{ color: "white", padding: "0px" }}>
                  {item}
                </div>
                <div>
                  {headerLeaf[index]}
                </div>
              </div>
            )}
          </div>
          {/* <DetailedDataCard details={detailsLeaf} titleDetails={customerSelected?.nomeCliente} edit={handleEditLeaf} remove={() => console.log(pedido)} generateSale responsiveCustomer={"respCustomer"} /> */}
        </ContentDetailedDataCard>
      </ContentAreaCustomer>
    </>
  )
}