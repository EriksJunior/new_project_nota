import { AnimateCard } from "../../styles"
import { CreateTypePayment } from "./CreateTypePayment"
import { AreaTypePayment } from "./AreaTypePayment"


export function TypePayment() {
  return (
    <div style={{width: "100%"}}>
      <AnimateCard>
        <CreateTypePayment />
      </AnimateCard>

      <AnimateCard>
        <AreaTypePayment />
      </AnimateCard>
    </div>
  )
}