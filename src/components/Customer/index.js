import { useContext } from 'react';
import { ClientContext } from "../../context/Client/client"
import { GlobalContext } from '../../context/Global/global';


import { Masks } from "../../utils/masks/Masks"

// import './styles.css';

export function Customer() {
  const { handleChange, clearAllInputs, alterTab, setAlterTab, handleSaveOrUpdate,
    handleClose, handleShow, returnedClient, search, searchClient, setSearch, show }
    = useContext(ClientContext)

  const { client } = useContext(GlobalContext)

  const { maskCep, maskCpfCnpj } = Masks()

  return (
    <>
      <div className="card p-4">
        <div className="card-header">
          Cadastre o cliente
        </div>
        <div className="card-body">
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Nome</label>
              <input onChange={handleChange} name="nome" type="text" defaultValue={client.nome || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">CPF/CNPJ</label>
              <input onChange={handleChange} name="cpfcnpj" onKeyUp={maskCpfCnpj} defaultValue={client.cpfcnpj || ""} type="text" className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">Data nascimento</label>
              <input onChange={handleChange} name="dataNascimento" type="date" defaultValue={client.dataNascimento || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Endereço</label>
              <input onChange={handleChange} name="endereco" type="text" defaultValue={client.endereco || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Bairro</label>
              <input onChange={handleChange} name="bairro" type="text" defaultValue={client.bairro || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-4">
              <label className="form-label">Complemento</label>
              <input onChange={handleChange} name="complemento" type="text" defaultValue={client.complemento || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              <label className="form-label">Nº</label>
              <input onChange={handleChange} name="numero" type="text" defaultValue={client.numero || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">CEP</label>
              <input onChange={handleChange} onKeyUp={maskCep} name="cep" type="text" defaultValue={client.cep || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">Estado</label>
              <select className="form-select" onChange={handleChange} name="uf" defaultValue={client.uf || ""}>
                <option>Selecione...</option>
                <option defaultValue="AC">Acre</option>
                <option defaultValue="AL">Alagoas</option>
                <option defaultValue="AP">Amapá</option>
                <option defaultValue="AM">Amazonas</option>
                <option defaultValue="BA">Bahia</option>
                <option defaultValue="CE">Ceará</option>
                <option defaultValue="DF">Distrito Federal</option>
                <option defaultValue="ES">Espirito Santo</option>
                <option defaultValue="GO">Goiás</option>
                <option defaultValue="MA">Maranhão</option>
                <option defaultValue="MS">Mato Grosso do Sul</option>
                <option defaultValue="MT">Mato Grosso</option>
                <option defaultValue="MG">Minas Gerais</option>
                <option defaultValue="PA">Pará</option>
                <option defaultValue="PB">Paraíba</option>
                <option defaultValue="PR">Paraná</option>
                <option defaultValue="PE">Pernambuco</option>
                <option defaultValue="PI">Piauí</option>
                <option defaultValue="RJ">Rio de Janeiro</option>
                <option defaultValue="RN">Rio Grande do Norte</option>
                <option defaultValue="RS">Rio Grande do Sul</option>
                <option defaultValue="RO">Rondônia</option>
                <option defaultValue="RR">Roraima</option>
                <option defaultValue="SC">Santa Catarina</option>
                <option defaultValue="SP">São Paulo</option>
                <option defaultValue="SE">Sergipe</option>
                <option defaultValue="TO">Tocantins</option>
              </select>
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-3">
              <label className="form-label">Cidade</label>
              <input onChange={handleChange} name="cidade" type="text" defaultValue={client.cidade || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">Telefone</label>
              <input onChange={handleChange} name="telefone" type="text" defaultValue={client.telefone || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">Celular</label>
              <input onChange={handleChange} name="celular" type="text" defaultValue={client.celular || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-8">
              <label className="form-label">Email</label>
              <input onChange={handleChange} name="email" type="text" defaultValue={client.email || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-12">
              <label className="form-label">Observação</label>
              <textarea rows={3} onChange={handleChange} name="observacao" type="area" defaultValue={client.observacao || ""} className="form-control"></textarea>
            </div>
          </div>

          <div style={{width: "100%", display: "flex", gap: "20px"}}>
            <button type="button" className="btn btn-dark" onClick={() => console.log(client)}>Salvar</button>
            <button type="button" className="btn btn-dark">Limpar</button>
          </div>
        </div>
      </div>
    </>
  );
}

