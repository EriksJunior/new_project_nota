import { useContext } from "react"
import { useSelector } from "react-redux"
import { SaleContext } from "../../../context"

import { cidades } from "../../../../../common/customer"
import { ContentHeaderTitle } from "../../../styles"
import { ContentButtonUpdateCustomer } from "./styles"

import { consumidorFinalNfe, constribuinte } from "../../../../../common/nfe"

export function Customer() {
  const { customersFromSelectBox, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer } = useContext(SaleContext)
  const customer = useSelector(state => state.sale.cliente)

  return (
    <div className="card">
      <div className="card-body">
        <ContentHeaderTitle className="pt-4">
          <h5 >Informações do Cliente</h5>
          <hr />
        </ContentHeaderTitle>

        <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
          <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <label className="form-label">Cliente</label>
            <select className="form-select form-select-sm" name="id" value={customer.id} onChange={handleChangeIdCustomerAndList}>
              <option value="" >---selecione---</option>
              {customersFromSelectBox.map((e) =>
                <option key={e.id} value={e.id}>{e.nome}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" hidden={!customer.id}>
            <label className="form-label">CPF/CNPJ</label>
            <input type="text" className="form-control form-control-sm" name="cpfCnpj" value={customer.cpfCnpj || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" hidden={!customer.id}>
            <label className="form-label">Incrição estadual (I.E)</label>
            <input type="text" className="form-control form-control-sm" name="ie" value={customer.ie || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-2 col-md-2 col-lg-2 col-xl-2" hidden={!customer.id}>
            <label className="form-label">CEP</label>
            <input type="text" className="form-control form-control-sm" name="cep" value={customer.cep || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" hidden={!customer.id}>
            <label className="form-label">Endereço</label>
            <input type="text" className="form-control form-control-sm" name="endereco" value={customer.endereco || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-2 col-md-2 col-lg-2 col-xl-2" hidden={!customer.id}>
            <label className="form-label">N°</label>
            <input type="text" className="form-control form-control-sm" name="numero" value={customer.numero || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" hidden={!customer.id}>
            <label className="form-label">Complemento</label>
            <input type="text" className="form-control form-control-sm" name="complemento" value={customer.complemento || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" hidden={!customer.id}>
            <label className="form-label">Bairro</label>
            <input type="text" className="form-control form-control-sm" name="bairro" value={customer.bairro || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" hidden={!customer.id}>
            <label className="form-label">Cidade</label>
            <input type="text" className="form-control form-control-sm" name="cidade" value={customer.cidade || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4" hidden={!customer.id}>
            <label className="form-label">Estado</label>
            <select className="form-select form-select-sm" name="uf" value={customer.uf || ""} onChange={handleChangeCustomer}>
              <option>Selecione...</option>
              {cidades.map((cidade) =>
                <option key={cidade.value} value={cidade.value}>{cidade.nome}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" hidden={!customer.id}>
            <label className="form-label">E-mail</label>
            <input type="text" className="form-control form-control-sm" name="email" value={customer.email || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" hidden={!customer.id}>
            <label className="form-label">Telefone</label>
            <input type="text" className="form-control form-control-sm" name="telefone" value={customer.telefone || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-4 col-md-4 col-lg-4 col-xl-4" hidden={!customer.id}>
            <label className="form-label">Celular</label>
            <input type="text" className="form-control form-control-sm" name="celular" value={customer.celular || ""} onChange={handleChangeCustomer} />
          </div>

          <div className="mb-3 col-sm-3 col-md-3 col-lg-3 col-xl-3" hidden={!customer.id}>
            <label className="form-label">Consumidor Final</label>
            <select className="form-select form-select-sm" name="consumidor_final" value={customer.consumidor_final || ""} onChange={handleChangeCustomer}>
              {consumidorFinalNfe.map((consumidorFin) =>
                <option key={consumidorFin.value} value={consumidorFin.value}>{consumidorFin.text}</option>
              )}
            </select>
          </div>

          <div className="mb-3 col-sm-9 col-md-9 col-lg-9 col-xl-9" hidden={!customer.id}>
            <label className="form-label">Contribuinte ICMS</label>
            <select className="form-select form-select-sm" name="contribuinte" value={customer.contribuinte || ""} onChange={handleChangeCustomer}>
              {constribuinte.map((contrib) =>
                <option key={contrib.value} value={contrib.value}>{contrib.tipo}</option>
              )}
            </select>
          </div>
        </div>

        <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12" hidden={!customer.id}>
          <ContentButtonUpdateCustomer className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <button className="btn btn-primary btn-sm" onClick={updateCustomer}>Atualizar cadastro</button>
          </ContentButtonUpdateCustomer>
        </div>
      </div>
    </div>
  )
}