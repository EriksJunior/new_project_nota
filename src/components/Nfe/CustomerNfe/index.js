import { ContentHeader } from "./styles"

export function CustomertNfe() {
  return (
    <div className="card">
      <div className="card-body">
        <ContentHeader className="pt-4">
          <h5 >Informações do Cliente</h5>
          <hr />
        </ContentHeader>

        <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Cliente</label>
            <select className="form-select form-select-sm" name='idCliente'>
              <option value="" >---selecione---</option>
              {/* {clientSelectBox.map((e) => <option key={e.id} value={e.id}>{e.nome}</option>)} */}
            </select>
          </div>

        </div>
      </div>
    </div>
  )
}