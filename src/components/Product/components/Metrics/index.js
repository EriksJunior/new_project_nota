import { useState } from "react"
import { CardHeaderTextCenter } from "../../../styles"
import { Card, ContentTopSellingProducts, ContentFavoritesCustomer, RankProducts, P, Position } from "./../../styles"

export function MetricsProd() {
  const [nome, setNome] = useState({ nome: "eriks junikjojfdsgh odfhogu fod", data: "23/10/2900", position: "1°" })

  return (
    <Card className="card">
      <ContentTopSellingProducts>
        <CardHeaderTextCenter>
          <div className="mb-3">
            <p>Mais Vendidos</p>
          </div>

          <ContentFavoritesCustomer>
            <RankProducts>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </RankProducts>
            <RankProducts>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </RankProducts>
            <RankProducts>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </RankProducts>
          </ContentFavoritesCustomer>
        </CardHeaderTextCenter>
      </ContentTopSellingProducts>
    </Card>
  )
}