import { useState } from "react"
import { CardHeaderTextCenter } from "../../../styles"
import { Card, Birthdays, FavoritesCustomers, ContentBirthdays, ContentFavoritesCustomer, DivTest, P, Position } from "../../style"

export function Metrics() {
  const [nome, setNome] = useState({ nome: "eriks junikjojfdsgh odfhogu fod", data: "23/10/2900", position: "1°" })

  return (
    <Card className="card">
      <Birthdays>
        <CardHeaderTextCenter>
          <div className="mb-3">
            <p>Aniversariantes do Mês</p>
          </div>

          <ContentBirthdays>
            <DivTest>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste
              </P>
              <P data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</P>
            </DivTest>

            <DivTest>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
              <P data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</P>
            </DivTest>

            <DivTest>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
              <P data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</P>
            </DivTest>

            <DivTest>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
              <P data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</P>
            </DivTest>

            <DivTest>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
              <P data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</P>
            </DivTest>
            <DivTest>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
              <P data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</P>
            </DivTest>

          </ContentBirthdays>
        </CardHeaderTextCenter>
      </Birthdays>

      <FavoritesCustomers>
        <CardHeaderTextCenter>
          <div className="mb-3">
            <p>Rank de compras</p>
          </div>

          <ContentFavoritesCustomer>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <P data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</P>
            </DivTest>
          </ContentFavoritesCustomer>
        </CardHeaderTextCenter>
      </FavoritesCustomers>
    </Card>
  )
}