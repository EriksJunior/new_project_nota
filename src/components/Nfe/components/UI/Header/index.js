import { ContentNfeHeader } from "./styles"
import { modelos, finalidades, operacoes } from "../../../../../common/nfe"

export function Header() {
  return (
    <ContentNfeHeader>
      <div className="card">
        <div className="card-body">
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Modelo</label>
              <select className="form-select form-select-sm" name='idCliente'>
                {modelos.map((modelo) =>
                  <option key={modelo.value} value={modelo.value}>{modelo.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Finalidade</label>
              <select className="form-select form-select-sm" name='idCliente'>
                {finalidades.map((finalidade) =>
                  <option key={finalidade.value} value={finalidade.value}>{finalidade.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Tipo de emissão</label>
              <select className="form-select form-select-sm" name='idCliente'>
                {operacoes.map((operacao) =>
                  <option key={operacao.value} value={operacao.value}>{operacao.tipo}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
              <label className="form-label">Natureza da operação</label>
              <input name="nome" type="text" className="form-control form-control-sm" />
            </div>

          </div>
        </div>
      </div>
    </ContentNfeHeader>
  )
}
