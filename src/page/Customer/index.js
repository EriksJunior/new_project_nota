import { ClientProvider } from "../../context/Client/client"
import { Customer } from "../../components/Customer"
import { Table } from "../../components/Customer/Table"
import { SearchCliente } from "../../components/Customer/Search"
import { TabRecords } from "../../components/Tab"
import { TabCreate } from "../../components/Tab/Create"
import { TabSearch } from "../../components/Tab/Search"

export function PageCustomer() {
  return (
    <div className="m-3">
      <ClientProvider>
        <TabRecords title={"Lista de Clientes"} fistButtonName={"Cadastro"}>
          <TabCreate>
            <Customer />
          </TabCreate>

          <TabSearch>
            <SearchCliente>
              <Table />
            </SearchCliente>
          </TabSearch>
        </TabRecords>
      </ClientProvider>
    </div>
  )
}