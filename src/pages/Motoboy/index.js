import { DateTime } from "luxon"
import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../api/api"
import { NavBar } from "../../components/NavBar"
import { MenuProvider } from "../../providers/MenuProvider"

/* eslint-disable jsx-a11y/anchor-is-valid */
export function MotoboyPage() {
  const [state, setState] = useState({
    id: null,
    name: "",
    active: false
  })

  const [motoboys, setMotoboys] = useState([])

  useEffect(() => {
    findAll()
  }, [])

  async function created(e) {
    e.preventDefault()
    const response = await api.post("/motoboys", state)
    const { id } = response.data
    setState({
      ...state,
      id
    })
    return id
  }

  async function findAll() {
    const response = await api.get('/motoboys')
    const { data: { data } } = response
    setMotoboys(data)
  }

  async function updated(e) {
    e.preventDefault()
    const response = await api.put("/motoboys", state)
    const { id } = response.data
    setState({
      ...state,
      id
    })
    return id
  }

  return (
    <>
      <MenuProvider>
        <NavBar>
          <div className="col-sm-12">
          <div className="modal fade" id="modalMotoboy" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Nome</label>
                          <input type="text" value={state.name} onChange={(e) => setState({
                            ...state,
                            name: e.target.value
                          })} className="form-control" id="name" aria-describedby="nameHelp" />
                          <small id="nameHelp" className="form-text text-muted">Digite o nome do Motoboy</small>
                        </div>
                        <div className="form-group form-check">
                          <input type="checkbox" value={state.active} onChange={(e) => setState({
                            ...state,
                            active: e.target.value
                          })} className="form-check-input" id="activeMotoboy" />
                          <label className="form-check-label" htmlFor="activeMotoboy">Ativar</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={state.id ? updated : created}>Salvar</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow mt-2">
            <div
              className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary" style={{ float: "right" }}>Pesquisar</h6>

              <div className="dropdown no-arrow">
                <button className="btn btn-success btn-circle" data-toggle="modal" data-target="#modalMotoboy">
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
              <div className="input-group">
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
              <div className="form-group">
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
                  </tr>
                </thead>
                <tbody>
                  {motoboys.map((motoboy) => {
                    return (
                      <tr>
                        <th scope="row">
                          <a href={motoboy.id}>#</a>
                        </th>
                        <td>{motoboy.name}</td>
                        <td>{motoboy.active ? "Ativo" : "Inativo"}</td>
                        <td>{DateTime.fromISO(motoboy.createdAt).toFormat("dd/MM/yyyy HH:mm")}</td>
                        <td>{DateTime.fromISO(motoboy.updatedAt).toFormat("dd/MM/yyyy HH:mm")}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </NavBar>
      </MenuProvider>

    </>
  )
}


