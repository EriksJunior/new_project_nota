import { useContext } from "react"
import { SaleContext } from "../../../context"
import { ContentTable } from "./style"
import { AnimateCard } from "../../../../styles"

export function Table({ children }) {
  const { dataSearchSale } = useContext(SaleContext)
  return (
    <div>
      <ContentTable className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="text-center">Cliente</th>
              <th className="text-center">Status</th>
              <th className="text-center">Data</th>
            </tr>
          </thead>
          <tbody>
            {dataSearchSale.map((e) =>
              <tr key={e.id} className="underlineCustomer" >
                <td className="text-center ">{e.nomeCliente}</td>
                <td className="text-center ">{e.status}</td>
                <td className="text-center ">{e.data?.split("-").reverse().join("/")}</td>
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