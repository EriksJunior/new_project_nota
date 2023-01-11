import { useContext } from "react"
import { ClientContext } from "../../../../context/Client/client"

import { SearchCliente } from "../../components/Search"
import { Table } from "../../components/Table"
import { CustomerArea } from "../../components/Area"

export function AreaCustomer() {
  const { openAreaCustomer } = useContext(ClientContext)

  return (
    <div className="m-3 animate">
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