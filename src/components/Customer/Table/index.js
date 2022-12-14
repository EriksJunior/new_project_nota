import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

export function Table() {
  const { returnedClient } = useContext(ClientContext)
  return (
    <div className="p-3">
      <div className="table-responsive" style={{ border: "solid 2px #202529", borderRadius: "5px" }}>
        <table className="table table-hover">
          <thead className="" style={{backgroundColor: "#202529", color: "white"}}>
            <tr>
              <th>Nome</th>
              <th>CPF/CNPJ</th>
              <th>Telefone</th>
              <th  className="text-center">Data Nascimento</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {returnedClient.map((e) =>
              <tr key={e.id} >
                <td>{e.nome}</td>
                <td>{e.cpfCnpj}</td>
                <td>{e.telefone}</td>
                <td  className="text-center">{e.dataNascimento?.split("-").reverse().join("/")}</td>
                <td className="text-center">
                  <div className="d-flex gap-1">

                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

  )
}