import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

import { SearchCliente } from "../../../components/Customer/components/Search"
import { Table } from "../../../components/Customer/components/Table"
import { CustomerArea } from "../../../components/Customer/components/Area"

export function PageAreaCustomer() {
  const { openAreaCustomer } = useContext(ClientContext)

  return (
    <div className="m-3">
      <SearchCliente>
        <Table>
          {openAreaCustomer &&
          <div className="animate">
            <CustomerArea />
          </div>
          }
        </Table>
      </SearchCliente>
    </div>
  )
}