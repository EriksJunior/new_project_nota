import { Link } from "react-router-dom"

import { Card, Header, HeaderContent, CardHeaderTextCenter, ContentIndividualMetrics, P } from "./styles"


export function DetailedDataCard({ details, titleDetails, metricsTitle, dataMetrics, edit, remove, enableMetrics, generateSale }) {

  return (
    <>
      <Card className="mt-3">
        <Header>
            <HeaderContent>
              <P>{titleDetails}</P>
            </HeaderContent>

            {details.map((e, i) =>
              <div key={i} className="mt-1">
                <P>{e}</P>
              </div>
            )}


          <div style={{ height: "29px" }}>
            <div className="dropdown" style={{ display: "flex", justifyContent: "flex-end" }}>
              <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Ações
              </button>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                <li><Link className="dropdown-item" onClick={edit}>Editar</Link></li>
                <li><Link className="dropdown-item" onClick={remove}>Excluir</Link></li>
                {generateSale &&
                  <li><Link className="dropdown-item">Gerar venda</Link></li>
                }
              </ul>
            </div>
          </div>
        </Header>

        {enableMetrics &&
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
        }
      </Card>
    </>
  )
}