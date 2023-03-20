import { useContext } from "react"
import { LeafContext } from "../../../context"
import { ContentTable } from "./style"
import { AnimateCard } from "../../../../styles"

export function Table({ children }) {
  const { dataSearchLeaf } = useContext(LeafContext)
  return (
    <div>
      <ContentTable className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="text-center">Cliente</th>
              <th className="text-center">CPF / CNPJ</th>
              <th className="text-center">Data</th>
              <th className="text-center">Modelo</th>
              <th className="text-center">Nº</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {dataSearchLeaf.map((leaf) =>
              <tr key={leaf.id} className="underlineCustomer">
                <td className="text-center ">{leaf.nomeCliente}</td>
                <td className="text-center ">{leaf.cpfCnpj}</td>
                <td className="text-center ">{leaf.data.split("-").reverse().join("/")}</td>
                <td className="text-center ">{leaf.response.modelo}</td>
                <td className="text-center ">{leaf.response.nfe}</td>
                <td className="text-center ">{leaf.status}</td>
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