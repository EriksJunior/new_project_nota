import { ClientProvider } from "../../../context/Client/client"
import { SearchCliente } from "../../../components/Customer/components/Search"
import { Table } from "../../../components/Customer/components/Table"
import { CustomerArea } from "../../../components/Customer/components/Area"

export function PageAreaCustomer() {
  return (
    <div className="m-3">
      <ClientProvider>
        <SearchCliente>
          <Table>
            <CustomerArea />
          </Table>
        </SearchCliente>
      </ClientProvider>
    </div>
  )
}