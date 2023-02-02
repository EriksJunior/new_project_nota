import { useContext } from "react"
import { ClientContext } from "../../../context"
import { DetailedDataCard } from "../../../../DetailedDataCard"

import {
  Card, CardHeaderTextCenter, ContentIndividualMetrics, ItemMetrics, PType, PData, ContentAreaCustomer, ContentDetailedDataCard
} from "./styles"


export function CustomerArea() {
  const { client, deleteCustomer, handleEditCustomer } = useContext(ClientContext)
  const detailsCustomer = [`Endereço: ${client.endereco || ""}`, `Bairro: ${client.bairro || ""}`, `Celular: ${client.celular || ""}`, `E-mail: ${client.email || ""}`]

  return (
    <>
      {client.nome &&
        <ContentAreaCustomer >
          <ContentDetailedDataCard>
            <DetailedDataCard details={detailsCustomer} titleDetails={client.nome} edit={handleEditCustomer} delet={() => deleteCustomer(client.id)} generateSale responsiveCustomer={"respCustomer"} />
          </ContentDetailedDataCard>

          <Card className="mt-3">
            <CardHeaderTextCenter>
              <div className="mb-3">
                <p>Métricas do cliente</p>
              </div>

              <ContentIndividualMetrics>
                <ItemMetrics>
                  <PType>Total de Compras</PType>
                  <PData>55</PData>
                </ItemMetrics>


                <ItemMetrics>
                  <PType>Valor total de compras</PType>
                  <PData>R$ 2.500,75</PData>
                </ItemMetrics>

                <ItemMetrics>
                  <PType>Notas emitidas</PType>
                  <PData>22</PData>
                </ItemMetrics>

                <ItemMetrics>
                  <PType>Valores em aberto</PType>
                  <PData>R$ 75,00</PData>
                </ItemMetrics>

                <ItemMetrics>
                  <PType>Contas em aberto</PType>
                  <PData>8</PData>
                </ItemMetrics>
              </ContentIndividualMetrics>
            </CardHeaderTextCenter>
          </Card>
        </ContentAreaCustomer>
      }
    </>
  )
}