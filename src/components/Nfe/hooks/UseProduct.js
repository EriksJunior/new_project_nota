import { useState } from "react"
import { UseLeaf } from "./UseLeaf"

import { useDispatch, useSelector } from "react-redux"
import { SAVE_PRODUCTS } from "../store/reducers/LeafReducers"

import { toast } from "react-toastify";

import ProductServices from "../../../services/ProductService"
import ProductLeafService from "../../../services/ProductLeafService"
import { validateLeafProduct } from "../validate";
import { Masks } from "../../../utils/masks/Masks";
import { INITIAL_VALUE_PRODUTOS } from "../initialStates"

export function UseProduct() {
  const { handleSaveLeaf } = UseLeaf()
  const [productsFromSelectBox, setProductsFromSelectBox] = useState([])
  const dispatch = useDispatch()
  const pedido = useSelector(state => state.leaf.pedido)
  const produtos = useSelector(state => state.leaf.produto)
  const { maskCurrency } = Masks()

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

  const handleChangeMonetaryValues = (e, index) => {
    dispatch(SAVE_PRODUCTS(
      produtos.map((product, i) => {
        if (i === index) {
          return { ...product, [e.target.name]: maskCurrency(e.target.value) };
        }
        return product;
      })
    ))
  };

  const calculateTotalValue = (index) => {
    const formattedSubtotal = produtos[index].subtotal.replace(".", "").replace(",", ".").replace(",", ".")
    const totalValue = parseFloat(produtos[index].quantidade * formattedSubtotal)
    const formattedTotal = totalValue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })

    dispatch(SAVE_PRODUCTS(
      produtos.map((product, i) => {
        if (i === index) {
          return { ...product, total: formattedTotal };
        }
        return product;
      })
    ))
  }

  const addProductInTable = () => {
    dispatch(SAVE_PRODUCTS([...produtos, INITIAL_VALUE_PRODUTOS]))
  }

  const saveLeafProducts = async (idLeaf) => {
    try {
      const selectedProducts = produtos.filter(prod => prod.idProduto)

      selectedProducts.map(product => validateLeafProduct(product))

      const products = await Promise.all(selectedProducts.map((product) => {
        if (product.id) {
          return product
        }

        return ProductLeafService.save({ ...product, idNota: idLeaf })
      }))

      dispatch(SAVE_PRODUCTS(products))

      return toast("Itens salvos! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveLeafAndLeafProducts = async () => {
    if (pedido.id) {
      return await saveLeafProducts(pedido.id)
    }

    const idNota = await handleSaveLeaf(pedido)
    if (idNota) await saveLeafProducts(idNota)
  }

  const removeProductInTable = (index) => {
    const newProducts = [...produtos]

    if (produtos.length > 1) {
      newProducts.splice(index, 1)
      return dispatch(SAVE_PRODUCTS(newProducts))
    }

    dispatch(SAVE_PRODUCTS([INITIAL_VALUE_PRODUTOS]))
  }

  const removeLeafProducts = async (idLeafProduct) => {
    await ProductLeafService.remove(idLeafProduct)
  }

  const handleRemoveProductInTableAndLeafProducts = async (index, idLeafProduct) => {
    if (!produtos[index].id) {
      return removeProductInTable(index)
    }

    await removeLeafProducts(idLeafProduct)
    removeProductInTable(index)
  }

  const getProcuctsFromSelectBox = async () => {
    const products = await ProductServices.getFromSelectBox()
    setProductsFromSelectBox(products)
  }

  return { getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndLeafProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveLeafAndLeafProducts, calculateTotalValue }
}