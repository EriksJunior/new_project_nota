import { ContentTable } from "./style"
import { AnimateCard } from "../../../../styles"

export function Table({children}) {

  return (
    <div>
      <ContentTable className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="text-center">Cliente</th>
              <th className="text-center" >Numero NFe</th>
              <th className="text-center">Data emissão</th>
              <th className="text-center">Valor total</th>
            </tr>
          </thead>
          <tbody>
            {/* {returnedClient.map((e) =>
              <tr key={e.id} className="underlineCustomer" onClick={() => handleOpenAreaCustomer(e.id)}>
                <td className="text-center ">{e.nome}</td>
                <td className="text-center ">{e.cpfCnpj}</td>
                <td className="text-center ">{e.telefone}</td>
                <td className="text-center ">{e.dataNascimento?.split("-").reverse().join("/")}</td>
              </tr>
            )} */}
          </tbody>
        </table>
      </ContentTable>
      
      <AnimateCard>
        {children}
      </AnimateCard>
    </div>
  )
}