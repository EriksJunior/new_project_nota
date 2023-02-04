import { ContentHeader } from "./styles"
import { cidades } from "../../../../../common/customer"

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

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="form-label">CPF/CNPJ</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="form-label">Incrição estadual (I.E)</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">CEP</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Endereço</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-2 col-md-2 col-lg-2 col-xl-2">
            <label className="form-label">N°</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Complemento</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Bairro</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4">
            <label className="form-label">Cidade</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
            <label className="form-label">Estado</label>
            <select className="form-select form-select-sm" name="uf">
              <option>Selecione...</option>
              {cidades.map((cidade) =>
                <option key={cidade.value} value={cidade.value}>{cidade.nome}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="form-label">E-mail</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="form-label">Telefone</label>
            <input name="nome" type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="form-label">Consumidor Final</label>
            <select className="form-select form-select-sm" name="uf">
              <option>Selecione...</option>
            </select>
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <label className="form-label">Contribuinte ICMS</label>
            <select className="form-select form-select-sm" name="uf">
              <option>Selecione...</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}