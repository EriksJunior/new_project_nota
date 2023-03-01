import { useContext } from 'react';
import { ClientContext } from "./context"

import { Masks } from "../../utils/masks/Masks"

import { cidades } from '../../common/customer';

export function FormCustomer() {
  const { client, handleChange, clearAllInputs, handleSaveOrUpdate, switchBetweenComponents, objCustomer } = useContext(ClientContext)
  const { maskCep, maskCpfCnpj } = Masks()

  return (
    <div>
      <div>
        <div>
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input ref={objCustomer.id} onChange={handleChange} hidden value={client.id || ""} name="id" type="text" className="form-control form-control-sm" />

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Nome</label>
              <input ref={objCustomer.nome} onChange={handleChange} name="nome" type="text" value={client.nome || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">CPF/CNPJ</label>
              <input ref={objCustomer.cpfcnpj} onChange={handleChange} name="cpfcnpj" onKeyUp={maskCpfCnpj} value={client.cpfcnpj || ""} type="text" className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">Data nascimento</label>
              <input ref={objCustomer.dataNascimento} onChange={handleChange} name="dataNascimento" type="date" value={client.dataNascimento || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Endereço</label>
              <input ref={objCustomer.endereco} onChange={handleChange} name="endereco" type="text" value={client.endereco || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Bairro</label>
              <input ref={objCustomer.bairro} onChange={handleChange} name="bairro" type="text" value={client.bairro || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Complemento</label>
              <input ref={objCustomer.complemento} onChange={handleChange} name="complemento" type="text" value={client.complemento || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              <label className="form-label">Nº</label>
              <input ref={objCustomer.numero} onChange={handleChange} name="numero" type="text" value={client.numero || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">CEP</label>
              <input ref={objCustomer.cep} onChange={handleChange} onKeyUp={maskCep} name="cep" type="text" value={client.cep || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Estado</label>
              <select ref={objCustomer.uf} className="form-select form-select-sm" onChange={handleChange} name="uf" value={client.uf || ""}>
                <option>Selecione...</option>
                {cidades.map((cidade) => 
                  <option key={cidade.value} value={cidade.value}>{cidade.nome}</option>
                )}
              </select>
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">Cidade</label>
              <input ref={objCustomer.cidade} onChange={handleChange} name="cidade" type="text" value={client.cidade || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">Telefone</label>
              <input ref={objCustomer.telefone} onChange={handleChange} name="telefone" type="text" value={client.telefone || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">Celular</label>
              <input ref={objCustomer.celular} onChange={handleChange} name="celular" type="text" value={client.celular || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-8">
              <label className="form-label">Email</label>
              <input ref={objCustomer.email} onChange={handleChange} name="email" type="text" value={client.email || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-12" style={{ height: "130px" }}>
              <label className="form-label">Observação</label>
              <textarea ref={objCustomer.observacao} rows={4} onChange={handleChange} name="observacao" type="area" value={client.observacao || ""} className="form-control form-control-sm"></textarea>
            </div>
          </div>


          <div className='row col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='col-sm-8 col-md-8 col-lg-8 col-xl-8' style={{ display: "flex", gap: "20px" }}>
              <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveOrUpdate}>Salvar</button>
              <button type="button" onClick={clearAllInputs} className="btn btn-primary btn-sm">Limpar</button>
            </div>


            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="button" onClick={switchBetweenComponents}  className="btn btn-primary btn-sm">Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

