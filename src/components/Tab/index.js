export function TabRecords({ children }) {
  return (
    <div>
      <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active btn-sm" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Cadastro</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link btn-sm" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pesquisa</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {children}
      </div>
    </div>
  )
}