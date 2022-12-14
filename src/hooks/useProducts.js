import { useCallback, useContext, useState } from 'react';

import { INITIAL_STATE_PRODUCT, INITIAL_STATE_SEARCH } from '../initialStates/product';
import ProductServices from '../../services/ProductService';

import { toast } from "react-toastify";
import { GlobalContext } from '../context/global/global';



export function UseProducts() {
  const { produtos, setProdutos, getProductsFromSelectBox } = useContext(GlobalContext)
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(INITIAL_STATE_SEARCH)
  const [returnedProduct, setReturnedProduct] = useState([])
  const [alterTab, setAlterTab] = useState("Pesquisar")

  const handleClose = () => {
    setShow(false)
    setAlterTab("Pesquisar")
    clearInputs()
  };
  const handleShow = () => {
    setShow(true)
    setAlterTab("Pesquisar")
    clearInputs()
  };


  const handleChange = useCallback((e) => {
    setProdutos({ ...produtos, [e.target.name]: e.target.value })
  }, [produtos]);

  const saveProducts = async () => {
    try {
      const result = await ProductServices.save(produtos)
      setProdutos({
        ...produtos,
        id: result.id,
        valor: produtos.valor.toString().replace(".", "").replace(".", "").replace(",", "."),
        valorVenda: produtos.valorVenda.toString().replace(".", "").replace(".", "").replace(",", ".")
      })
      
      toast("Produto salvo com sucesso! ✅",
        { position: toast.POSITION.TOP_RIGHT });
    } catch (error) {
      toast.error(error,
        { position: toast.POSITION.TOP_RIGHT })
    }
  }

  const update = async () => {
    try {
      const formatValueTotal = formatValue()
      await ProductServices.update({...produtos , valor: formatValueTotal.valor, valorVenda: formatValueTotal.valorVenda});
      toast("Produto atualizado com sucesso!✅",
        { position: toast.POSITION.TOP_RIGHT })
    } catch (error) {
      toast.error(error,
        { position: toast.POSITION.TOP_RIGHT })
    }
  }

  const formatValue = () => {
    let valor = produtos.valor.toString().replace(".", "").replace(",", ".")
    let valorVenda = produtos.valorVenda.toString().replace(".","").replace(",",".")
    return{valor , valorVenda}
  }

  const deleteProduct = async (id) => {
    try {
      await ProductServices.delete(id)
      await searchProduct()
      getProductsFromSelectBox()
      toast("Produto deletado com sucesso!",
        { position: toast.POSITION.TOP_RIGHT })
    } catch (error) {
      toast.error(error,
        { position: toast.POSITION.TOP_RIGHT })
    }
  }

  const searchProduct = async () => {
    try {
      const result = await ProductServices.search(search.text, search.page)
      setReturnedProduct(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  const findById = async (id) => {
    try {
      const result = await ProductServices.findById(id)
      setProdutos(result)
      setAlterTab("Cadastro")
    } catch (error) {
      return (error)
    }
  }

  const handleSaveOrUpdate = async () => {
    produtos?.id === "" ? saveProducts() : update()
  }

  const clearInputs = () => {
    setProdutos(INITIAL_STATE_PRODUCT)
  }

  return { deleteProduct, alterTab, setAlterTab, clearInputs, search, setSearch, searchProduct, returnedProduct, handleShow, handleClose, handleChange, findById, handleSaveOrUpdate, show }
}