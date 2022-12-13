import { Customer } from "../../components/Customer"
import { ClientProvider } from "../../context/Client/client"
import { TabRecords } from "../../components/Tab"
import { TabCreate } from "../../components/Tab/Create"
import { TabSearch } from "../../components/Tab/Search"

export function PageCustomer() {
  return (
    <div className="m-3">
      <ClientProvider>
        <TabRecords>
          <TabCreate><Customer /></TabCreate>
          <TabSearch>TESTEEEEEEEEEEEEEEEEEEE</TabSearch>
        </TabRecords>
      </ClientProvider>
    </div>
  )
}