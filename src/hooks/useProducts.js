import { useCallback, useState } from 'react';

import { INITIAL_STATE_PRODUCT, INITIAL_STATE_SEARCH } from '../initialStates/product';
import ProductServices from '../services/ProductService';

import { toast } from "react-toastify";

export function UseProducts() {
  const [produtos, setProdutos] = useState(INITIAL_STATE_PRODUCT);
  const [search, setSearch] = useState(INITIAL_STATE_SEARCH)
  const [returnedProduct, setReturnedProduct] = useState([])

  const handleChange = useCallback((e) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }, [produtos]);

  const handleChangeSearchProduct = useCallback((e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }, [search])

  const handleChangeMonetaryValues = useCallback((e) => {
    let value = e.currentTarget.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d)(\d{2})$/, "$1,$2");
    value = value.replace(/(?=(\d{3})+(\D))\B/g, ".");
    e.currentTarget.value = value

    setProdutos({ ...produtos, [e.target.name]: e.currentTarget.value })
  }, [produtos]);

  const saveProducts = async () => {
    try {
      const formatedValues = formatValue()

      const result = await ProductServices.save({ ...produtos, valor: formatedValues.valor, valorVenda: formatedValues.valorVenda })
      setProdutos({ ...produtos, id: result.id })

      toast("Produto salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.response.data.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const update = async () => {
    try {
      const formatValueTotal = formatValue()
      await ProductServices.update({ ...produtos, valor: formatValueTotal.valor, valorVenda: formatValueTotal.valorVenda });
      toast("Produto atualizado com sucesso!✅", {
        position: toast.POSITION.TOP_RIGHT
      })
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  const formatValue = () => {
    const valor = produtos.valor.toString().replace(".", "").replace(",", ".").replace(",", ".")
    const valorVenda = produtos.valorVenda.toString().replace(".", "").replace(",", ".").replace(",", ".")
    return { valor, valorVenda }
  }

  const deleteProduct = async (id) => {
    try {
      await ProductServices.delete(id)
      await searchProduct()
      toast("Produto deletado com sucesso!", {
        position: toast.POSITION.TOP_RIGHT
      })
    } catch (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT
      })
    }
  }

  const searchProduct = async () => {
    try {
      const result = await ProductServices.search(search.text, search.page)
      setReturnedProduct(result.data)
    } catch (error) {
      toast.error("Ocorreu um problema 😮", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findById = async (id) => {
    try {
      const result = await ProductServices.findById(id)
      const formatedValor = result.valor.toLocaleString("pr-BR", { minimumFractionDigits: 2 })
      const formatedValorVenda = result.valorVenda.toLocaleString("pr-BR", { minimumFractionDigits: 2 })

      setProdutos({ ...result, valor: formatedValor, valorVenda: formatedValorVenda })
    } catch (error) {
      toast.error("Ocorreu um problema 😮", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveOrUpdate = async () => {
    produtos?.id === "" ? saveProducts() : update()
  }

  const clearInputs = () => {
    setProdutos(INITIAL_STATE_PRODUCT)
  }

  const handleOpenAreaProduct = async (id) => {
    await findById(id)
  }

  return { produtos, deleteProduct, clearInputs, search, setSearch, searchProduct, returnedProduct, handleChange, findById, handleSaveOrUpdate, handleChangeSearchProduct, handleChangeMonetaryValues, handleOpenAreaProduct }
}
