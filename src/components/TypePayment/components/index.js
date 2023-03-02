import { TypePaymentProvider } from "../context"
import { TypePayment } from "./typePayment"

export function PricipalTypePayment() {
  return (
    <TypePaymentProvider>
      <TypePayment />
    </TypePaymentProvider>
  )
}