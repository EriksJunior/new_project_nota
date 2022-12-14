import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

export function TabSearch({ children }) {
  const { enableTab } = useContext(ClientContext)

  return (
    <div className={`tab-pane fade ${enableTab ? "show active" : ""}`} id="pills-search" role="tabpanel" aria-labelledby="pills-profile-tab">{children}</div>
  )
}