import { useContext } from "react"
import { SaleContext } from "../../../context"
import { ContentTable } from "./style"
import { AnimateCard } from "../../../../styles"

export function Table({ children }) {
  const { dataSearchSale, handleOpenAreaSale } = useContext(SaleContext)
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
            {dataSearchSale.map((sale) =>
              <tr key={sale.id} className="underlineCustomer" onClick={() => handleOpenAreaSale(sale.id)}>
                <td className="text-center ">{sale.nomeCliente}</td>
                <td className="text-center ">{sale.status}</td>
                <td className="text-center ">{sale.data?.split("-").reverse().join("/")}</td>
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