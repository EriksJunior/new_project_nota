import { useContext } from "react"
import { ClientContext } from "../../context"

import { SearchCliente } from "../../components/UI/Search"
import { Table } from "../../components/UI/Table"
import { CustomerArea } from "../../components/UI/Area"

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