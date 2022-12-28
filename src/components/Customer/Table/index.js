import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"
import { ContentTable } from "./style"

import { IconEdit, IconDelete } from  "../../styles"

export function Table() {
  const { returnedClient, findById, deleteClient } = useContext(ClientContext)
  return (
      <ContentTable className="table-responsive ">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th >Nome</th>
              <th>CPF/CNPJ</th>
              <th>Telefone</th>
              <th >Data Nascimento</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {returnedClient.map((e) =>
              <tr key={e.id} >
                <td style={{color: "deepskyblue!important"}}>{e.nome}</td>
                <td>{e.cpfCnpj}</td>
                <td>{e.telefone}</td>
                <td >{e.dataNascimento?.split("-").reverse().join("/")}</td>
                <td>
                  <div className="d-flex justify-content-center gap-2">
                    <div onClick={() => findById(e.id)}>
                      <IconEdit cursor={"pointer"} size={20} />
                    </div>
                    <div onClick={() => deleteClient(e.id)}>
                      <IconDelete cursor={"pointer"} size={20} />
                    </div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </ContentTable>
  )
}