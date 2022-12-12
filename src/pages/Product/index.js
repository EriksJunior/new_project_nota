import { DateTime } from "luxon"
import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../api/api"

/* eslint-disable jsx-a11y/anchor-is-valid */
export function ProductPage() {
  const [state, setState] = useState({
    id: null,
    name: "",
    pricing: 0,
    oldPricing: 0,
    observationTag: "",
    description: "",
    image: null,
    active: false
  })

  const [products, setProducts] = useState([])

  useEffect(() => {
    findAll()
  }, [])

  async function created(e) {
    e.preventDefault()
    const response = await api.post("/products", state)
    const { id } = response.data
    setState({
      ...state,
      id
    })
    return id
  }

  async function findAll() {
    const response = await api.get('/products')
    const { data: { data } } = response
    setProducts(data)
  }

  async function updated(e) {
    e.preventDefault()
    const response = await api.put("/products", state)
    const { id } = response.data
    setState({
      ...state,
      id
    })
    return id
  }

  return (
    <>
      <div className="modal fade" id="modalProduct" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Cadastrar</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="card shadow mb-4">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="form-group col-sm-12">
                        <label>Nome</label>
                        <input type="text" value={state.name} onChange={(e) => setState({
                          ...state,
                          name: e.target.value
                        })} className="form-control" id="name" />
                        <small id="nameHelp" className="form-text text-muted">Digite o nome do Produto</small>
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Preço Atual</label>
                        <input type="number"
                          value={state.pricing}
                          onChange={(e) => setState({
                            ...state,
                            pricing: e.target.value
                          })}
                          className="form-control" id="name" />
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Preço Antigo</label>
                        <input type="number"
                          value={state.oldPricing}
                          onChange={(e) => setState({
                            ...state,
                            oldPricing: e.target.value
                          })}
                          className="form-control" id="name" />
                      </div>
                      <div className="form-group col-sm-12">
                        <label>Tag de Observação</label>
                        <input type="text"
                          value={state.observationTag}
                          onChange={(e) => setState({
                            ...state,
                            observationTag: e.target.value
                          })}
                          className="form-control" id="name" />
                      </div>
                      <div className="form-group col-sm-12">
                        <label>Descrição</label>
                        <input type="text"
                          value={state.description}
                          onChange={(e) => setState({
                            ...state,
                            description: e.target.value
                          })}
                          className="form-control" id="name" />
                      </div>
                      <div className="form-group col-sm-12">
                        <label>Imagem Produto</label>
                        <input type="file"
                          value={state.image}
                          onChange={(e) => setState({
                            ...state,
                            image: e.target.value
                          })}
                          className="form-control-file" id="name" />
                      </div>
                      <div className="form-group form-check col-sm-12" style={{ marginLeft: 15 }}>
                        <input type="checkbox" value={state.active} onChange={(e) => setState({
                          ...state,
                          active: e.target.value
                        })} className="form-check-input" id="activeProduct" />
                        <label className="form-check-label" htmlFor="activeProduct">Ativar</label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={state.id ? updated : created}>Salvar</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow mb-4">
        <div
          className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
          <h6 className="m-0 font-weight-bold text-primary" style={{ float: "right" }}>Pesquisar</h6>

          <div className="dropdown no-arrow">
            <button className="btn btn-success btn-circle" data-toggle="modal" data-target="#modalProduct">
              <i className="fas fa-plus"></i>
            </button>
            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
              aria-labelledby="dropdownMenuLink">
              <div className="dropdown-header">Ações</div>
              <a className="dropdown-item" href="#">Relatório Completo</a>
              <a className="dropdown-item" href="#">Relatório Apenas Ativos</a>
              <a className="dropdown-item" href="#">Relatório Apenas Inativos</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="input-group col-sm-8 m-2">
            <input
              type="text"
              className="form-control"
              style={{ border: "1px solid #eedddd", marginLeft: 16 }} placeholder="Pesquisar"
              aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
          <div className="form-group col-sm-3 m-2">
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Nome</option>
              <option>Ativo</option>
            </select>
          </div>
        </div>
        <div className="card-body">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nome</th>
                <th scope="col">Ativo</th>
                <th scope="col">Criado</th>
                <th scope="col">Atualizado</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <tr>
                    <th scope="row">
                      <a href={product.id}>#</a>
                    </th>
                    <td>{product.name}</td>
                    <td>{product.active ? "Ativo" : "Inativo"}</td>
                    <td>{DateTime.fromISO(product.createdAt).toFormat("dd/MM/yyyy HH:mm")}</td>
                    <td>{DateTime.fromISO(product.updatedAt).toFormat("dd/MM/yyyy HH:mm")}</td>
                    <td>
                      <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-ellipsis-v fa-sm fa-fw text-dark"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-left shadow animated--fade-in"
                          aria-labelledby="dropdownMenuLink">
                          <div className="dropdown-header">Ações</div>
                          <a className="dropdown-item" href="#">
                            Editar
                          </a>
                          <a className="dropdown-item" href="#">
                            Excluir 
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}


