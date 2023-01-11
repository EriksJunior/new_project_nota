import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"
import { AreaCustomer } from "./AreaCustomer"
import { CreateCustomer } from "./CreateCustomer"
import { AnimateCard } from "../../styles"

export function LayoutCustomer() {
  const { openLayouts } = useContext(ClientContext)

  return (
    <div>
      {openLayouts ?
        <AnimateCard>
          <CreateCustomer />
        </AnimateCard>
        :
        <AnimateCard>
          <AreaCustomer />
        </AnimateCard>
      }
    </div>
  )
}