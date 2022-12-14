import { useContext } from "react"
import { ClientContext } from "../../../context/Client/client"

export function TabCreate({ children }) {
  const { enableTab } = useContext(ClientContext)


  return (
    <div className={`tab-pane fade ${!enableTab ? "show active" : ""}`} id="pills-create" role="tabpanel" aria-labelledby="pills-home-tab">{children}</div>
  )
}