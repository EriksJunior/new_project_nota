import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import ProductServices from "../../../services/ProductService"
import LeafService from "../../../services/LeafService"
import { INITIAL_VALUE_PRODUTOS } from "../initialStates"

import { SAVE_PRODUCTS } from "../store/reducers/LeafReducers"

import { toast } from "react-toastify";


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
    try {
      console.log(products)
      // await Promise.all(products.map(product => LeafService.addProduct(product)))
      // return toast("Itens salvos! ✅", {
      //   position: toast.POSITION.TOP_RIGHT
      // });
    } catch (error) {
      console.log(error)
    }
  }

  const getProcuctsFromSelectBox = async () => {
    const products = await ProductServices.getFromSelectBox()
    setProductsFromSelectBox(products)
  }

  return { getProcuctsFromSelectBox, productsFromSelectBox, addProducts, removeProduct, handleChangeProducts, saveLeafProducts }
}