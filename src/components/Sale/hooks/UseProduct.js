import { useState } from "react"
import { UseSale } from "./UseSale"

import { useDispatch, useSelector } from "react-redux"
import { SAVE_PRODUCTS } from "../store/reducers/SaleReducers"

import { toast } from "react-toastify";

import ProductsOfSaleService from "../../../services/ProductsOfSaleService";
import ProductServices from "../../../services/ProductService"
import { validateProductSale } from "../validate";
import { Masks } from "../../../utils/masks/Masks";
import { INITIAL_VALUE_PRODUTOS } from "../initialStates"

export function UseProduct() {
  const { handleSaveOrUpdateSale } = UseSale()
  const [productsFromSelectBox, setProductsFromSelectBox] = useState([])
  const dispatch = useDispatch()
  const pedido = useSelector(state => state.sale.pedido)
  const produtos = useSelector(state => state.sale.produto)
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
          return { ...product, valorTotal: formattedTotal };
        }
        return product;
      })
    ))
  }

  const addProductInTable = () => {
    dispatch(SAVE_PRODUCTS([...produtos, INITIAL_VALUE_PRODUTOS]))
  }

  const saveProductsSale = async (idSale) => {
    try {
      const products = await Promise.all(produtos.map((product) => {
        if (product.id) {
          return product
        }

        if (handleWithProductsBeforeSave({ ...product, idVenda: idSale })) {
          return product
        }
        
        const formattedProduct = handleValuesBeforeSave(product, idSale)
        return ProductsOfSaleService.save(product, formattedProduct)
      }))

      dispatch(SAVE_PRODUCTS(products))
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleValuesBeforeSave = (product, idVenda) => {
    const newProduct = {...product, idVenda}
    const formattedTotal = newProduct.valorTotal.replace(".", "").replace(".", "").replace(",", ".")
    const formattedDiscount = newProduct.desconto.replace(".", "").replace(".", "").replace(",", ".")
    Reflect.deleteProperty(newProduct, 'subtotal')


    return {...newProduct, valorTotal: formattedTotal, desconto: formattedDiscount}
  }

  const handleSaveSaleAndSaleProducts = async () => {
    if (pedido.id) {
      return await saveProductsSale(pedido.id)
    }


    const idSale = await handleSaveOrUpdateSale(pedido)
    if (idSale) await saveProductsSale(idSale)
  }

  const removeProductInTable = (index) => {
    const newProducts = [...produtos]

    if (newProducts.length > 1) {
      newProducts.splice(index, 1)
      return dispatch(SAVE_PRODUCTS(newProducts))
    }

    dispatch(SAVE_PRODUCTS([INITIAL_VALUE_PRODUTOS]))
  }

  const removeLeafProducts = async (idProductSale) => {
    await ProductsOfSaleService.delete(idProductSale)
  }

  const handleRemoveProductInTableAndSaleProducts = async (index, idProductSale) => {
    if (!produtos[index].id) {
      return removeProductInTable(index)
    }

    await removeLeafProducts(idProductSale)
    removeProductInTable(index)
  }

  const getProcuctsFromSelectBox = async () => {
    const products = await ProductServices.getFromSelectBox()
    setProductsFromSelectBox(products)
  }

  const handleWithProductsBeforeSave = (product) => {
    const productsFilled = !product.idProduto || !product.valorTotal || !product.quantidade || !product.desconto //refatorar, realizar uma forma dinamica de fazer isso

    if (productsFilled) {
      const result = validateProductSale(product)

      toast.warning(result, {
        position: toast.POSITION.TOP_RIGHT
      });

      return true
    }

    return false
  }

  return { getProcuctsFromSelectBox, productsFromSelectBox, addProductInTable, handleRemoveProductInTableAndSaleProducts, handleChangeProducts, handleChangeMonetaryValues, handleSaveSaleAndSaleProducts, calculateTotalValue }
}