import { useContext } from "react"
import { SaleContext } from "../context"

import { AreaTaxDocument } from "./AreaTaxDocument"
import { CreateTaxDocument } from "./CreateTaxDocument"
import { AnimateCard } from "../../styles"

export function Sale() {
  const { openLayouts } = useContext(SaleContext)

  return (
    <div>
      {openLayouts ?
        <AnimateCard>
          <CreateTaxDocument />
        </AnimateCard>
        :
        <AnimateCard>
          <AreaTaxDocument />
        </AnimateCard>
      }
    </div>
  )
}