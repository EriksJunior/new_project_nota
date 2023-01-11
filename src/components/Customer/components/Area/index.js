import { useContext } from "react"
import { Link } from "react-router-dom"
import { ClientContext } from "../../../../context/Client/client"

import {
  Card, HeaderCustomer, HeaderContent,
  CardHeaderTextCenter, ContentIndividualMetrics, ItemMetrics, P, PType, PData
} from "./styles"


export function CustomerArea() {
  const { client, deleteCustomer, handleEditCustomer } = useContext(ClientContext)

  return (
    <>
      {client.nome &&
        <Card className="card mt-3">
          <HeaderCustomer>
            <HeaderContent>
              <P>{client.nome}</P>
            </HeaderContent>
            <P>Endereço: {client.endereco}</P>
            <P>Bairro: {client.bairro}</P>
            <P>Celular: {client.celular}</P>
            <P>E-mail: {client.email}</P>

            <div style={{ height: "40px", }}>
              <div className="dropdown" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Ações
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><Link className="dropdown-item" onClick={handleEditCustomer}>Editar</Link></li>
                  <li><Link className="dropdown-item" onClick={() => deleteCustomer(client.id)}>Excluir</Link></li>
                  <li><Link className="dropdown-item">Gerar Venda</Link></li>
                </ul>
              </div>
            </div>
          </HeaderCustomer>

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
      }
    </>
  )
}