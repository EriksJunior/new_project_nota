import { useContext, useState } from "react"

import { Navigate } from "react-router-dom"
import { ClientContext } from "../../../../context/Client/client"
import { ContentTable } from "./style"

export function Table() {
  const { returnedClient } = useContext(ClientContext)
  const [openCustomerArea, setopenCustomerArea] = useState(false)

  const handleCustomerArea = () => {
    setopenCustomerArea(true)
  }

  return (
    <ContentTable className="table-responsive">

      {openCustomerArea && (
        <Navigate to="/customerarea" replace={true} />
      )}

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
            <tr key={e.id} className="name testee"  onClick={handleCustomerArea}>
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
  )
}