import { ClientProvider } from "../../components/Customer/context"
import { Customer } from "../../components/Customer/components"

export function PageCustomer() {

  return (
    <div className="m-3">
      <ClientProvider>
        <Customer />
      </ClientProvider>
    </div>
  )
}