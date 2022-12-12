import { useContext, useEffect, useState } from "react"
import Swal from "sweetalert2"
import { api } from "../../api/api"
import { MenuContext } from "../../context/MenuContext"
import { Additional } from "../Additional"

export function ProductsOfCategory({ item }) {
  const { setCategoryAdditionalId } = useContext(MenuContext)


  const [productsOfCategory, setProductsOfCategory] = useState({
    pricing: 0
  })

  useEffect(() => {
    setProductsOfCategory({
      pricing: item.pricing
    })
  }, [item])



  async function updatedProduct(id, key, valueInput) {
    if (!id || !key) {
      Swal.fire(
        'Registro salvo.',
        '',
        'warning'
      )
    }
    await api.put('/products/' + id, {
      [key]: valueInput
    })
  }

  const idProduct = item.id.replace(/-/ig, '').replace(/[0-9]/g, '')
  const activeProduct = Boolean(Number(item.active))
  const styleAccordion = {
    borderLeft: '5px solid #198754',
    borderRadius: 5,
    marginBottom: 5
  }

  return (
    <div className="accordion-item" key={idProduct} style={styleAccordion}>
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${idProduct}`} aria-expanded="true" aria-controls={idProduct}>
          {item.name}
        </button>
        <div className="d-flex">
          <label htmlFor="staticEmail" className="col-sm-6 col-form-label" style={{ fontSize: 12 }}>Preço</label>
          <input className="form-control form-control-sm input-focus"
            style={{ width: 50, marginRight: 10 }} type="text" aria-label=".form-control-sm example"
            value={productsOfCategory.pricing}
            onChange={(input) => {
              setProductsOfCategory({ pricing: input.target.value })
              updatedProduct(item.id, 'pricing', input.target.value)
            }}
          />
        </div>

        <div className="form-check form-check-sm form-switch" style={{ fontSize: 18 }}>
          <input className="form-check-input" type="checkbox" defaultChecked={activeProduct} onChange={(input) => updatedProduct(item.id, 'active', input.target.checked)} role="switch" id="flexSwitchCheckDefault" />
        </div>
        <button className="btn btn-sm btn-success btn-circle" data-bs-toggle="modal" data-bs-target="#modalCategoryAdditional">
          <i className="fas fa-plus"></i>
        </button>
      </h2>
      <div id={idProduct} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionProducts">
        <div className="accordion-body">
          {item.categoryAdditional.map((value) => {
            const idCategoriesAdditional = value.id.replace(/-/ig, '').replace(/[0-9]/g, '')
            const activeCategoriesAdditional = Boolean(Number(value.active))

            return (
              <div className="accordion-item" key={idCategoriesAdditional} style={styleAccordion}>
                <h2 className="accordion-header" id="headingOne" style={{ display: 'flex' }}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${idCategoriesAdditional}`} aria-expanded="true" aria-controls={idCategoriesAdditional}>
                    {value.name}
                  </button>
                  <div className="d-flex">
                    <label htmlFor="staticEmail" className="col-sm-6 col-form-label" style={{ fontSize: 12 }}>Min</label>
                    <input className="form-control form-control-sm input-focus"
                      style={{ width: 50 }} type="text" aria-label=".form-control-sm example"
                      defaultValue={0}
                    />
                  </div>
                  <div className="d-flex">
                    <label htmlFor="staticEmail" className="col-sm-6 col-form-label" style={{ fontSize: 12 }}>Max</label>
                    <input className="form-control form-control-sm input-focus"
                      style={{ width: 50 }} type="text" aria-label=".form-control-sm example"
                      defaultValue={0}
                    />
                  </div>
                  <div className="form-check form-check-sm form-switch" style={{ fontSize: 18 }}>
                    <input className="form-check-input" type="checkbox" defaultChecked={activeCategoriesAdditional} onChange={(input) => updatedProduct(item.id, 'active', input.target.checked)} role="switch" id="flexSwitchCheckDefault" />
                  </div>
                  <button className="btn btn-sm btn-success btn-circle" onClick={() => setCategoryAdditionalId(value.id)} data-bs-toggle="modal" data-bs-target="#modalAdditional">
                    <i className="fas fa-plus"></i>
                  </button>
                </h2>
                <div id={idCategoriesAdditional} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionProducts">
                  <div className="accordion-body">
                    <ul className="list-group">
                      {value.additional.map((x) => <Additional item={x} key={x.id} />)}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}