import { useContext } from "react"
import { AreaProductLayout } from "./AreaProduct"

export function LayoutProducts() {

  return (
    <div>
      {/* {openLayouts ? <CreateCustomer /> : <AreaCustomer />} */}
      <AreaProductLayout />
    </div>
  )
}