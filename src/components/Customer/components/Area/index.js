import {
  ContentAreaCustomer, CardCustomer, HeaderCustomer, HeaderContent,
  IndividualMetrics, ContentIndividualMetrics, P
} from "./styles"

export function CustomerArea() {
  return (
    <div className="card">
      <div className="card-body">
        <ContentAreaCustomer>
          <CardCustomer>
            <HeaderCustomer>
              <HeaderContent>
                <P>Eriks junior pinheiro bailon sdf dsf sdf sdf sdf sdsdfsdfdsfs sdsdfsdfdsfs</P>
              </HeaderContent>
            </HeaderCustomer>

            <ContentIndividualMetrics>
              <IndividualMetrics>
                <div className="teste">
                  <p>Total de Compras: </p>
                </div>
              </IndividualMetrics>
            </ContentIndividualMetrics>
          </CardCustomer>
        </ContentAreaCustomer>
      </div>
    </div>
  )
}