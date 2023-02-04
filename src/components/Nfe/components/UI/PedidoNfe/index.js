import { ContentHeaderTitle } from "../../../styles"

export function PedidoNfe() {
  return (
    <div className="card">
      <div className="card-body">
        <ContentHeaderTitle className="pt-4">
          <h5>Informações do Pedido</h5>
          <hr />
        </ContentHeaderTitle>

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