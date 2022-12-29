import { ClientProvider } from "../../context/Client/client"
import { SearchCliente } from "../../components/Customer/Search"
import { Table } from "../../components/Customer/Table"

export function PageSearchCustomer() {
  return (
    <div className="m-3">
      <ClientProvider>
        <SearchCliente>
          <Table />
        </SearchCliente>
      </ClientProvider>
    </div>
  )
}