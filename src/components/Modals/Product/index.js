import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { api } from "../../../api/api"
import { MenuContext } from "../../../context/MenuContext"
import Swal from 'sweetalert2'


export function ProductModal() {
  const { categoryId } = useContext(MenuContext)

  const [state, setState] = useState({
    id: null,
    name: "",
    pricing: 0,
    oldPricing: 0,
    observationTag: '',
    description: '',
    image: '',
    categoryId: categoryId,
    active: false,
  })

  useEffect(() => {
    setState({
      ...state,
      categoryId: categoryId
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId])

  async function created(e) {
    e.preventDefault()
    const response = await api.post("/products", state)
    const { id } = response.data
    setState({
      ...state,
      id
    })
    Swal.fire(
      'Registro salvo.',
      '',
      'success'
    )
    return id
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
              <h5 className="modal-title" id="exampleModalLabel">Cadastrar Produto</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="row">
                <div className="form-group col-sm-12">
                  <label>Nome</label>
                  <input type="text" value={state.name} onChange={(e) => setState({
                    ...state,
                    name: e.target.value
                  })} className="form-control" id="name" />
                  <small id="nameHelp" className="form-text text-muted">Digite o nome do Produto.</small>
                </div>
                <div className="form-group col-sm-6">
                  <label>Preço</label>
                  <input type="text" value={state.pricing} onChange={(e) => setState({
                    ...state,
                    pricing: e.target.value
                  })} className="form-control" id="pricing" />
                </div>
                <div className="form-group col-sm-6">
                  <label>Preço Antigo</label>
                  <input type="text" value={state.oldPricing} onChange={(e) => setState({
                    ...state,
                    oldPricing: e.target.value
                  })} className="form-control" id="oldPricing" />
                </div>
                <div className="form-group col-sm-12">
                  <label>Tag</label>
                  <input type="text" value={state.observationTag} onChange={(e) => setState({
                    ...state,
                    observationTag: e.target.value
                  })} className="form-control" id="observationTag" />
                </div>
                <div className="form-group col-sm-12">
                  <label>Descrição</label>
                  <textarea type="text" value={state.description} onChange={(e) => setState({
                    ...state,
                    description: e.target.value
                  })} className="form-control" id="description" />
                </div>
                <div className="form-group form-check" style={{ marginLeft: 10 }}>
                  <input type="checkbox" value={state.active} onChange={(e) => setState({
                    ...state,
                    active: Boolean(e.target.value)
                  })} className="form-check-input" id="activeCategory" />
                  <label className="form-check-label" htmlFor="activeCategory">Ativar</label>
                </div>
                <button type="submit" className="btn btn-primary col-sm-12" onClick={state.id ? updated : created}>Salvar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}