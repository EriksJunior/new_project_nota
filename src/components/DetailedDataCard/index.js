import { useContext } from "react"
import { Link } from "react-router-dom"

import {
  Card, Header, HeaderContent,
  CardHeaderTextCenter, ContentIndividualMetrics, ItemMetrics, P, PType, PData
} from "./styles"


export function DetailedDataCard({ details, metricsTitle, dataMetrics }) {

  return (
    <>
        <Card className="card mt-3">
          <Header>
            <HeaderContent>
              <P>nome</P>
            </HeaderContent>
            
            {/* {details.map((e) =>
              <>
                <P>{e.title}: {e.text}</P>
              </>
            )} */}


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
          </Header>

          <CardHeaderTextCenter>
            <div className="mb-3">
              {/* <p>{metricsTitle}</p> */}
            </div>

            <ContentIndividualMetrics>
              {/* {dataMetrics.map((e) =>
                <ItemMetrics>
                  <PType>{e.subTitleMetrics}</PType>
                  <PData>{e.subDataMetrics}</PData>
                </ItemMetrics>
              )} */}
            </ContentIndividualMetrics>
          </CardHeaderTextCenter>
        </Card>
    </>
  )
}