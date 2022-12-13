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
      <div className="card">
        <div className="card-header">
          Cadastre o cliente
        </div>
        <div className="card-body">
          <div className="row col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="mb-3 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <label className="form-label">Nome</label>
              <input onChange={(e) => handleChange(e)} name="nome" type="text" defaultValue={client.nome || ""} className="form-control" />
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

            <div className="mb-3 col-sm-4 col-md-4 col-lg-3 col-xl-1">
              <label className="form-label">Nº</label>
              <input onChange={handleChange} name="numero" type="text" defaultValue={client.numero || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">CEP</label>
              <input onChange={handleChange} onKeyUp={maskCep} name="cep" type="text" defaultValue={client.cep || ""} className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">Estado</label>
              <select className="form-select" onChange={handleChange} name="uf" defaultValue={client.uf || ""}>
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

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">CPF/CNPJ</label>
              <input onChange={handleChange} name="cpfcnpj" onKeyUp={maskCpfCnpj} defaultValue={client.cpfcnpj || ""} type="text" className="form-control" />
            </div>

            <div className="mb-3 col-sm-6 col-md-6 col-lg-3 col-xl-2">
              <label className="form-label">CPF/CNPJ</label>
              <input onChange={handleChange} name="cpfcnpj" onKeyUp={maskCpfCnpj} defaultValue={client.cpfcnpj || ""} type="text" className="form-control" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

