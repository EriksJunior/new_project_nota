
import { NavBar } from "../../components/NavBar" 
import { PageCustomer } from "../Customer"

export function PageNavigation() {

  return (
    <div>
      <NavBar>
        <PageCustomer />
      </NavBar>
    </div>
  )
}