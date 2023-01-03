import { useState } from "react"
import { CardHeaderTextCenter } from "../../styles"
import { Card, Birthdays, FavoritesCustomers, ContentBirthdays, ContentFavoritesCustomer, DivTest, Pname, Position } from "../style"

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
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste
              </Pname>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</Pname>
            </DivTest>

            <DivTest>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</Pname>
            </DivTest>

            <DivTest>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</Pname>
            </DivTest>

            <DivTest>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</Pname>
            </DivTest>

            <DivTest>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</Pname>
            </DivTest>
            <DivTest>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.data}>23/10/2900</Pname>
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
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
            </DivTest>
            <DivTest>
              <Position data-toggle="tooltip" data-placement="top" title={nome.position}>1°</Position>
              <Pname data-toggle="tooltip" data-placement="top" title={nome.nome}>Clinte teste</Pname>
            </DivTest>
          </ContentFavoritesCustomer>
        </CardHeaderTextCenter>
      </FavoritesCustomers>
    </Card>
  )
}