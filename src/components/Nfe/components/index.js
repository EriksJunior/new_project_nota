import { AreaTaxDocument } from "./AreaTaxDocument"
import { CreateTaxDocument } from "./CreateTaxDocument"
import { AnimateCard } from "../../styles"

export function Nfe() {

  return (
    <div>
        <AnimateCard>
          <CreateTaxDocument />
        </AnimateCard>

        <AnimateCard>
          <AreaTaxDocument />
        </AnimateCard>
    </div>
  )
}