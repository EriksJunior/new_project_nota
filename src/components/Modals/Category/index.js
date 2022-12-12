import { useState } from "react"
import { api } from "../../../api/api"

export function CategoryModal() {
  const [state, setState] = useState({
    id: null,
    name: "",
    active: false,
  })

  async function created(e) {
    e.preventDefault()
    const response = await api.post("/category", state)
    const { id } = response.data
    setState({
      ...state,
      id
    })
    return id
  }

  async function updated(e) {
    e.preventDefault()
    const response = await api.put("/category", state)
    const { id } = response.data
    setState({
      ...state,
      id
    })
    return id
  }

  return (
    <>
      <div className="modal fade" id="modalCategory" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Cadastrar</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Nome</label>
                  <input type="text" value={state.name} onChange={(e) => setState({
                    ...state,
                    name: e.target.value
                  })} className="form-control" id="name" aria-describedby="nameHelp" />
                  <small id="nameHelp" className="form-text text-muted">Digite o nome da Categoria.</small>
                </div>
                <div className="form-group form-check">
                  <input type="checkbox" value={state.active} onChange={(e) => setState({
                    ...state,
                    active: e.target.value()
                  })} className="form-check-input" id="activeCategory" />
                  <label className="form-check-label" htmlFor="activeCategory">Ativar</label>
                </div>
                <div style={{ float: 'right' }}>
                  <button type="submit" className="btn btn-primary" onClick={state.id ? updated : created}>Salvar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}