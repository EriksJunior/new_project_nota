import { useContext } from "react"
import { ClientContext } from "../../../../context/Client/client"
import { ContentTable } from "./style"

export function Table({children}) {
  const { returnedClient } = useContext(ClientContext)
  return (
    <div>
      <ContentTable className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="text-center">Nome</th>
              <th className="text-center" >CPF/CNPJ</th>
              <th className="text-center">Telefone</th>
              <th className="text-center">Data Nascimento</th>
              {/* <th className="text-center">Ações</th> */}
            </tr>
          </thead>
          <tbody>
            {returnedClient.map((e) =>
              <tr key={e.id} className="name testee">
                <td className="text-center ">{e.nome}</td>
                <td className="text-center ">{e.cpfCnpj}</td>
                <td className="text-center ">{e.telefone}</td>
                <td className="text-center ">{e.dataNascimento?.split("-").reverse().join("/")}</td>
                {/* <td>
                <div className="d-flex justify-content-center gap-2">
                  <div onClick={() => findById(e.id)}>
                    <IconEdit cursor={"pointer"} size={20} />
                  </div>
                  <div onClick={() => deleteClient(e.id)}>
                    <IconDelete cursor={"pointer"} size={20} />
                  </div>
                </div>
              </td> */}
              </tr>
            )}
          </tbody>
        </table>
      </ContentTable>

      {children}
    </div>

  )
}