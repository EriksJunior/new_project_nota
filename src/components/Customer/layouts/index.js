import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

import { AreaCustomer } from "./AreaCustomer"
import { CreateCustomer } from "./CreateCustomer"

export function LayoutCustomer() {
  const { openLayouts } = useContext(ClientContext)

  return (
    <div>
      {openLayouts ? <CreateCustomer /> : <AreaCustomer />}
    </div>
  )
}