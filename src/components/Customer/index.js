import { useContext } from 'react';
import { ClientContext } from "../../context/Client/client"

import { Masks } from "../../utils/masks/Masks"

export function Customer() {
  const { client, handleChange, clearAllInputs, handleSaveOrUpdate, handleOpenLayouts } = useContext(ClientContext)
  const { maskCep, maskCpfCnpj } = Masks()

  return (
    <div>
      <div>
        <div>
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <input onChange={handleChange} hidden value={client.id || ""} name="id" type="text" className="form-control form-control-sm" />

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Nome</label>
              <input onChange={handleChange} name="nome" type="text" value={client.nome || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">CPF/CNPJ</label>
              <input onChange={handleChange} name="cpfcnpj" onKeyUp={maskCpfCnpj} value={client.cpfcnpj || ""} type="text" className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">Data nascimento</label>
              <input onChange={handleChange} name="dataNascimento" type="date" value={client.dataNascimento || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Endereço</label>
              <input onChange={handleChange} name="endereco" type="text" value={client.endereco || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Bairro</label>
              <input onChange={handleChange} name="bairro" type="text" value={client.bairro || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Complemento</label>
              <input onChange={handleChange} name="complemento" type="text" value={client.complemento || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              <label className="form-label">Nº</label>
              <input onChange={handleChange} name="numero" type="text" value={client.numero || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">CEP</label>
              <input onChange={handleChange} onKeyUp={maskCep} name="cep" type="text" value={client.cep || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Estado</label>
              <select className="form-select form-select-sm" onChange={handleChange} name="uf" value={client.uf || ""}>
                <option>Selecione...</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espirito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MT">Mato Grosso</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </select>
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">Cidade</label>
              <input onChange={handleChange} name="cidade" type="text" value={client.cidade || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">Telefone</label>
              <input onChange={handleChange} name="telefone" type="text" value={client.telefone || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">Celular</label>
              <input onChange={handleChange} name="celular" type="text" value={client.celular || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-8">
              <label className="form-label">Email</label>
              <input onChange={handleChange} name="email" type="text" value={client.email || ""} className="form-control form-control-sm" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-12" style={{ height: "130px" }}>
              <label className="form-label">Observação</label>
              <textarea rows={4} onChange={handleChange} name="observacao" type="area" value={client.observacao || ""} className="form-control form-control-sm"></textarea>
            </div>
          </div>


          <div className='row col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='col-sm-8 col-md-8 col-lg-8 col-xl-8' style={{ display: "flex", gap: "20px" }}>
              <button type="button" className="btn btn-primary btn-sm" onClick={handleSaveOrUpdate}>Salvar</button>
              <button type="button" onClick={clearAllInputs} className="btn btn-primary btn-sm">Limpar</button>
            </div>


            <div className='col-sm-4 col-md-4 col-lg-4 col-xl-4' style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="button" onClick={() => handleOpenLayouts(false)}  className="btn btn-primary btn-sm">Voltar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

