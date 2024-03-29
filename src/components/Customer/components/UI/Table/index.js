import { useContext } from "react"
import { ClientContext } from "../../../context"
import { ContentTable } from "./style"
import { AnimateCard } from "../../../../styles"

export function Table({children}) {
  const { returnedClient, handleOpenAreaCustomer } = useContext(ClientContext)

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
            </tr>
          </thead>
          <tbody>
            {returnedClient.map((e) =>
              <tr key={e.id} className="underlineCustomer" onClick={() => handleOpenAreaCustomer(e.id)}>
                <td className="text-center ">{e.nome}</td>
                <td className="text-center ">{e.cpfCnpj}</td>
                <td className="text-center ">{e.telefone}</td>
                <td className="text-center ">{e.dataNascimento?.split("-").reverse().join("/")}</td>
              </tr>
            )}
          </tbody>
        </table>
      </ContentTable>
      
      <AnimateCard>
        {children}
      </AnimateCard>
    </div>
  )
}