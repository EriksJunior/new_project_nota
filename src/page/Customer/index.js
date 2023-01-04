import { ClientProvider } from "../../context/Client/client"
import { LayoutCustomer } from "../../components/Customer/layouts"

export function Customer() {

  return (
    <div className="m-3">
      <ClientProvider>
        <LayoutCustomer />
      </ClientProvider>
    </div>
  )
}