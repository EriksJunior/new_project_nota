import { useContext } from "react"
import { Link } from "react-router-dom"

import {
  Card, HeaderCustomer, HeaderContent,
  CardHeaderTextCenter, ContentIndividualMetrics, ItemMetrics, P, PType, PData
} from "./styles"


export function ProductArea() {

  return (
    <>
      {/* {client.nome && */}
        <Card className="card mt-3">
          <HeaderCustomer>
            <HeaderContent>
              <P>nome</P>
            </HeaderContent>
            <P>Endereço: enderec</P>
            <P>Bairro: bairro</P>
            <P>Celular: celular</P>
            <P>E-mail: email</P>

            <div style={{ height: "40px", }}>
              <div className="dropdown" style={{ display: "flex", justifyContent: "flex-end" }}>
                <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Ações
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                  <li><Link className="dropdown-item">Editar</Link></li>
                  <li><Link className="dropdown-item">Excluir</Link></li>
                  <li><Link className="dropdown-item">Gerar Venda</Link></li>
                </ul>
              </div>
            </div>
          </HeaderCustomer>

          <CardHeaderTextCenter>
            <div className="mb-3">
              <p>Métricas do Produto</p>
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
      {/* } */}
    </>
  )
}