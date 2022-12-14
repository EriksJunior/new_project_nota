import { useContext } from "react"
import { ClientContext } from "../../context/Client/client"

export function TabRecords({ children }) {
  const { activeButtonTab, alterValueTab } = useContext(ClientContext)

  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className={`nav-link  btn-sm ${!activeButtonTab ? "active" : ""}`} id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-create" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Cadastro</button>
        </li>
        <li className="nav-item" role="presentation">
          <button onClick={alterValueTab} className={`nav-link ${activeButtonTab ? "active" : ""} btn-sm`} id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pesquisa</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {children}
      </div>
    </div>
  )
}
