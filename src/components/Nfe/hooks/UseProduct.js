import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { UseLeaf } from "./UseLeaf"

import ProductServices from "../../../services/ProductService"
import LeafService from "../../../services/LeafService"

import { SAVE_PRODUCTS } from "../store/reducers/LeafReducers"

import { INITIAL_VALUE_PRODUTOS } from "../initialStates"
import { toast } from "react-toastify";

export function UseProduct() {
  const { handleSaveLeaf } = UseLeaf()
  const [productsFromSelectBox, setProductsFromSelectBox] = useState([])
  const dispatch = useDispatch()
  const pedido = useSelector(state => state.leaf.pedido)
  const produtos = useSelector(state => state.leaf.produto)

  const handleChangeProducts = (e, index) => {
    dispatch(SAVE_PRODUCTS(
      produtos.map((product, i) => {
        if (i === index) {
          return { ...product, [e.target.name]: e.target.value };
        }
        return product;
      })
    ))
  };


  const addProducts = () => {
    dispatch(SAVE_PRODUCTS([...produtos, INITIAL_VALUE_PRODUTOS]))
  }


  const removeProduct = (index) => {
    const newProducts = [...produtos]

    if (index !== 0) {
      newProducts.splice(index, 1)
      dispatch(SAVE_PRODUCTS(newProducts))
    }
  }

  const saveLeafProducts = async () => {
    try {
      if (!pedido.id) {
        const idLeaf = await handleSaveLeaf(pedido)
        await Promise.all(produtos.map(product => LeafService.addProduct({ ...product, idNota: idLeaf })))

        return toast("Itens salvos! ✅", {
          position: toast.POSITION.TOP_RIGHT
        });
      } else {
        await Promise.all(produtos.map(product => LeafService.addProduct({ ...product, idNota: pedido.id })))
        return toast("Itens salvos! ✅", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
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