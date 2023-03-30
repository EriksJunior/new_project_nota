import { useSelector } from "react-redux"
import { useContext } from "react"
import { LeafContext } from "../../../context"

import { BsFillPencilFill, BsXLg } from "react-icons/bs"
import { ContentAreaCustomer, ContentDetailedDataCard, ContentItensCard, BtnDownloadXml, BtnEditLeaf, LabelDetailsItens, Itens, ContentActions } from "./styles"

export function LeafArea() {
  const pedido = useSelector(state => state.leaf.pedido)
  const { deleteSale, handleEditLeaf, dataSearchLeaf } = useContext(LeafContext)

  const totalCurrency = pedido.total.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  const discountCurrency = pedido.desconto.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  const modelo = pedido.modelo === "1" ? "NF-e" : "NFC-e"
  const finalidade = pedido.finalidade === 1 ? "Normal" : "Devolução"

  return (
    <>
      <ContentAreaCustomer >
        <ContentDetailedDataCard>
          <ContentItensCard>
            <Itens>
              <LabelDetailsItens>Valor Total</LabelDetailsItens>
              {totalCurrency}
            </Itens>

            <Itens>
              <LabelDetailsItens>Descontos Totais</LabelDetailsItens>
              {discountCurrency}
            </Itens>

            <Itens>
              <LabelDetailsItens> Tipo de documento</LabelDetailsItens>
              {modelo}
            </Itens>

            <Itens>
              <LabelDetailsItens>Finalidade</LabelDetailsItens>
              {finalidade}
            </Itens>


            <ContentActions>
              <div>
                <BtnDownloadXml>Download XML</BtnDownloadXml>
              </div>
              <div>
                <BtnEditLeaf><BsFillPencilFill color="black"/></BtnEditLeaf>
              </div>
              <div>
                <BtnEditLeaf><BsXLg color="black"/></BtnEditLeaf>
              </div>
            </ContentActions>
          </ContentItensCard>
          {/* <DetailedDataCard details={detailsLeaf} titleDetails={customerSelected?.nomeCliente} edit={handleEditLeaf} remove={() => console.log(pedido)} generateSale responsiveCustomer={"respCustomer"} /> */}
        </ContentDetailedDataCard>
      </ContentAreaCustomer>
    </>
  )
}