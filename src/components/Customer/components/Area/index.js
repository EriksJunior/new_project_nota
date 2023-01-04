import {
  Card, HeaderCustomer, HeaderContent,
  CardHeaderTextCenter, ContentIndividualMetrics, ItemMetrics, P, PType, PData
} from "./styles"


export function CustomerArea() {

  return (
    <Card className="card mt-3">
      <HeaderCustomer>
        <HeaderContent>
          <P>Eriks junior pinheiro bailon</P>
        </HeaderContent>
        <P>Eriks junior pinheiro bailon sdf dsf sdf sdf sdf sdsdfsdfdsfs sdsdfsdfdsfs</P>
        <P>Eriks junior pinheiro bailon sdf dsf sdf sdf sdf sdsdfsdfdsfs sdsdfsdfdsfs</P>
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
  )
}