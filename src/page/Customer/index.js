import { Customer } from "../../components/Customer"
import { NavBar } from "../../components/NavBar/index"
import { ClientProvider } from "../../context/Client/client"

export function PageCustomer() {
  return (
    <div>
      <ClientProvider>
        <NavBar>
          <Customer />
        </NavBar>
      </ClientProvider>
    </div>
  )
}