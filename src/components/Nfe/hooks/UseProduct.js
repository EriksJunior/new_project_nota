import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ProductServices from "../../../services/ProductService"
import { INITIAL_VALUE_PRODUTOS } from "../initialStates"

import { SAVE_PRODUCTS } from "../store/reducers/LeafReducers"

export function UseProduct() {
  const [productsFromSelectBox, setProductsFromSelectBox] = useState([])
  const dispatch = useDispatch()
  const products = useSelector(state => state.leaf.produto)

  const handleChangeProducts = (e, index) => {
    dispatch(SAVE_PRODUCTS(
      products.map((product, i) => {
        if (i === index) {
          return { ...product, [e.target.name]: e.target.value };
        }
        return product;
      })
    ))
  };


  const addProducts = () => {
    dispatch(SAVE_PRODUCTS([...products, INITIAL_VALUE_PRODUTOS]))
  }


  const removeProduct = (index) => {
    const newProducts = [...products]

    if (index !== 0) {
      newProducts.splice(index, 1)
      dispatch(SAVE_PRODUCTS(newProducts))
    }
  }

  const saveLeafProducts = async (products) => {
    console.log(products, 'aqui estão os produtos')
    // chamar serviço para salvar os produtos da nota
  }

  const getProcuctsFromSelectBox = async () => {
    const products = await ProductServices.getFromSelectBox()
    setProductsFromSelectBox(products)
  }

  return { getProcuctsFromSelectBox, productsFromSelectBox, addProducts, removeProduct, handleChangeProducts, saveLeafProducts }
}