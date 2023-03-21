import { useContext } from "react"
import { SaleContext } from "../context"

import { AreaSale } from "./AreaSale"
import { CreateSale } from "./CreateSale"
import { AnimateCard } from "../../styles"

export function FormSale() {
  const { openLayouts } = useContext(SaleContext)

  return (
    <div>
      {openLayouts ?
        <AnimateCard>
          <CreateSale />
        </AnimateCard>
        :
        <AnimateCard>
          <AreaSale />
        </AnimateCard>
      }
    </div>
  )
}