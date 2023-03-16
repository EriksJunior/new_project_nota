import { useContext } from "react"
import { LeafContext } from "../context"

import { AreaTaxDocument } from "./AreaTaxDocument"
import { CreateTaxDocument } from "./CreateTaxDocument"
import { AnimateCard } from "../../styles"

export function Nfe() {
  const { openLayouts } = useContext(LeafContext)

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