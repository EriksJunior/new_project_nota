import { ClientProvider } from "../../context/Client/client"
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