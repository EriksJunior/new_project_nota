
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useContext, useEffect, useState } from "react";

import { CategoryModal } from "../../components/Modals/Category";
import { ProductModal } from "../../components/Modals/Product";
import { MenuContext } from "../../context/MenuContext";
import { api } from "../../api/api";
import { CategoryAdditionalModal } from "../../components/Modals/ProductsAddtional";
import { ProductsOfCategory } from "../../components/ProductsOfCategory";
import { AdditionalModal } from "../../components/Modals/Additional";
import { MenuProvider } from "../../providers/MenuProvider";
import { NavBar } from "../../components/NavBar";

export function MenuPage() {
  const { setCategoryId } = useContext(MenuContext)
  const [category, setCategory] = useState([])

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  async function findAllCategory() {
    const response = await api.get("/category")
    return response.data
  }

  async function findAllProductsOfCategories() {
    const { data: { data } } = await api.get("/products")
    return data
  }

  async function findAllCategoryAdditional() {
    const { data: { data } } = await api.get("/category/additional")
    return data
  }

  async function findAllAdditional() {
    const { data: { data } } = await api.get("/additional")
    return data
  }

  async function load() {
    const [category, products, categoryAdditional, dataAdditional] = await Promise.all([
      findAllCategory(),
      findAllProductsOfCategories(),
      findAllCategoryAdditional(),
      findAllAdditional()
    ])


    const aux = category.map((item) => {
      const productsOfCategory = products.filter((x) => x.categoryId === item.id).map((e) => {
        return {
          ...e,
          categoryAdditional: categoryAdditional.filter(cc => cc.productId === e.id).map((z) => {
            return {
              ...z,
              additional: dataAdditional.filter(v => v.categoryAdditionalId === z.id)
            }
          })
        }
      })

      return {
        ...item,
        productsOfCategory
      }
    })

    setCategory(aux)
  }

  // async function updatedCategoryAdditional(data, key, valueInput) {
  //   if (!data || !key) {
  //     Swal.fire(
  //       'Registro salvo.',
  //       '',
  //       'warning'
  //     )
  //   }
  //   await api.put('/category/additional' + data.id, {
  //     ...data,
  //     [key]: valueInput
  //   })
  // }

  return (
    <>
      <MenuProvider>
        <NavBar>
          <CategoryModal />
          <ProductModal />
          <CategoryAdditionalModal />
          <AdditionalModal />

          <div className="card mt-3">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h6 className="m-0 font-weight-bold text-dark" style={{ float: "left" }}>Cardapio</h6>
              <button className="btn btn-sm btn-success btn-circle" data-bs-toggle="modal" data-bs-target="#modalCategory">
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <div className="card-body">
              <div className="accordion" id="categories">
                {category.map((item) => {
                  const id = item.id.replace(/-/ig, '').replace(/[0-9]/g, '');
                  const name = item.name.split(" ").join("")
                  const active = Boolean(Number(item.active))
                  const styleAccordion = {
                    borderLeft: '5px solid #224abe',
                    borderRadius: 5,
                    marginBottom: 5
                  }

                  return (
                    <div className="accordion-item" key={id} style={styleAccordion}>
                      <h2 className="accordion-header" id={`${id}-${name}`}>
                        <div className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
                          <b>{item.name}</b>
                        </div>
                        <div className="form-check form-check-sm form-switch" style={{ fontSize: 18 }}>
                          <input className="form-check-input" type="checkbox" defaultChecked={active} role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <button className="btn btn-sm btn-primary btn-circle" onClick={() => setCategoryId(item.id)} data-bs-toggle="modal" data-bs-target="#modalProduct">
                          <i className="fas fa-plus"></i>
                        </button>
                      </h2>
                      <div id={id} className='accordion-collapse collapse ' aria-labelledby={`${id}-${name}`} data-bs-parent="#categories">
                        <div className="accordion-body">
                          <div className="accordion" id="accordionProducts">
                            {item.productsOfCategory.map((value) => <ProductsOfCategory item={value} key={value.id} />)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </NavBar>
      </MenuProvider>
    </>
  )
}


