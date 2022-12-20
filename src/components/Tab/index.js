import { CardTitle } from "../CardHeader"

export function TabRecords({ children, title }) {
  return (
    <div>
      <CardTitle text={`Cadastre seu ${title}`}>
        <ul className="nav nav-pills gap-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button style={{ padding: "0.25rem 0.5rem" }} className="nav-link btn-sm" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-create" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Cadastro</button>
          </li>

          <li className="nav-item" role="presentation">
            <button style={{ padding: "0.25rem 0.5rem" }} className="nav-link active btn-sm" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-search" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pesquisa</button>
          </li>
        </ul>
      </CardTitle>

      <div className="tab-content" id="pills-tabContent">
        {children}
      </div>
    </div>
  )
}
