import { ClientProvider } from "../../../context/Client/client"
import { PageAreaCustomer } from "../AreaCustomer"

export function Customer() {

  return (
    <div className="m-3">
      <ClientProvider>
        <PageAreaCustomer />
      </ClientProvider>
    </div>
  )
}