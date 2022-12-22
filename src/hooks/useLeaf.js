import { useState, useCallback, useEffect, useContext } from "react";
import { toast } from "react-toastify";

import LeafService from "../services/LeafService";
import { HandleErrorsLeaf } from "../utils/handleErrors/handleErrorsLeaf";

import { GlobalContext } from "../context/Global/global";

import { INITIAL_VALUE_PEDIDO, INITIAL_VALUE_PRODUTOS, INITIAL_VALUE_RESPONSE_WEBMANIA, INITIAL_STATE_SEARCH, INITIAL_VALUE_CANCEL_LEAF, INITIAL_VALUE_NAV_ITEMS } from "../initialStates/leaf";

export function UseLeaf() {
  const { clientSelectBox, loading, setLoading } = useContext(GlobalContext)
  const { handleErrorSendleaf, getErrorAndReturnFormattedError, } = HandleErrorsLeaf()

  const [pedido, setPedido] = useState(INITIAL_VALUE_PEDIDO)
  const [produtoLeaf, setProdutoLeaf] = useState(INITIAL_VALUE_PRODUTOS)
  const [returnedProductsLeaf, setReturnedProductsLeaf] = useState([])
  const [responseWebmania, setResponseWebmania] = useState(INITIAL_VALUE_RESPONSE_WEBMANIA)
  const [cpfCnpjCliente, setCpfCnpjCliente] = useState({ cpfCnpj: "" });
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(INITIAL_STATE_SEARCH)
  const [resultSearchLeaf, setResultSearchLeaf] = useState()
  const [cancel, setCancel] = useState(INITIAL_VALUE_CANCEL_LEAF)
  const [showModalCancelLeaf, setShowModalCanelLeaf] = useState(false);
  const [navItems, setNavItems] = useState(INITIAL_VALUE_NAV_ITEMS)


  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)
  const handleCloseModalCancelLeaf = () => setShowModalCanelLeaf(false);
  const handleShowModalCancelLeaf = () => setShowModalCanelLeaf(true);

  useEffect(() => {
    const result = clientSelectBox.filter((e) => e.id === pedido.idCliente)
    setCpfCnpjCliente({ ...cpfCnpjCliente, cpfCnpj: result[0]?.cpfCnpj })
  }, [pedido.idCliente])

  useEffect(() => {
    handleTotalValueGeneralLeafInformation()
  }, [returnedProductsLeaf])

  const handleChange = useCallback((e) => {
    setPedido({ ...pedido, [e.currentTarget.name]: e.currentTarget.value })
  }, [pedido])

  const handleChangeProductLeaf = useCallback((e) => {
    setProdutoLeaf({ ...produtoLeaf, [e.currentTarget.name]: e.currentTarget.value })
  }, [produtoLeaf])

  const handleChangeSeachLeaf = useCallback((e) => {
    setSearch({ ...search, [e.currentTarget.name]: e.currentTarget.value })
  }, [search])

  const handleChangeCancelLeaf = useCallback((e) => {
    setCancel({ ...cancel, [e.currentTarget.name]: e.currentTarget.value })
  }, [cancel])

  const handleRenderNavItem = (e) => {
    console.log(e)
    if (e === "cliente") {
      setNavItems({ ...navItems, cliente: true, produto: false, pedido: false, transporte: false })
      console.log(e, "cliente")
    }
    else if (e === "produto") {
      setNavItems({ ...navItems, produto: true, cliente: false, pedido: false, transporte: false })
      console.log(e, "produto")
    }
    else if (e === "pedido") {
      setNavItems({ ...navItems, pedido: true, produto: false, cliente: false, transporte: false })
      console.log(e, "pedido")
    }
    else if (e === "transporte") {
      setNavItems({ ...navItems, transporte: true, pedido: false, produto: false, cliente: false })
      console.log(e, "transporte")
    }
  }

  const saveLeaf = async () => {
    try {
      const totalsValues = formatTotalValuesPedido()

      const { id } = await LeafService.save({ ...pedido, ...totalsValues })
      setPedido({ ...pedido, id: id })

      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const updateLeaf = async (sendToast) => {
    try {
      const totalsValues = formatTotalValuesPedido()
      await LeafService.update({ ...pedido, ...totalsValues });

      if (sendToast)
        toast("Atualizado com sucesso! ✅", {
          position: toast.POSITION.TOP_RIGHT
        });
    } catch (error) {
      console.log(error)
      toast.error("Ocorreu um erro ao atualizar a nota", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const sendLeaf = async () => {
    try {
      if (handleErrorsLeaf().erro) {
        return toast.error(handleErrorsLeaf().message, {
          position: toast.POSITION.TOP_RIGHT
        });
      }
      setLoading(true)
      await LeafService.sendLeaf(pedido.id)
      await findLeafById(pedido.id)
      toast("Nota emitida com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      const returnedError = await getErrorAndReturnFormattedError(error)
      toast.error(returnedError, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    finally {
      setLoading(false)
    }
  }

  const cancelLeaf = async () => {
    try {
      setLoading(true)
      await LeafService.cancelLeaf({ ...cancel, chave: pedido.response.chave }, pedido.id)
      toast("Nota cancelada com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
      await findLeafById(pedido.id)
      handleCloseModalCancelLeaf()
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    } finally {
      setLoading(false)
    }
  }

  const findLeafById = async (id) => {
    try {
      const result = await LeafService.findLeafById(id)
      setPedido(result)
      await findLeafProductsByIdNota(id)
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchLeaf = async () => {
    const page = "1"
    const result = await LeafService.searchLeaf(search.text, search.filter, page, search.startDate, search.endDate)
    setResultSearchLeaf(result.data)
  }

  const deleteLeafAndProducts = async (id) => {
    await LeafService.deleteLeafAndProducts(id)
    await searchLeaf()
  }

  const handleSaveOrUpdate = async () => {
    pedido.id === "" ? await saveLeaf() : await updateLeaf(true)
  }

  const addProduct = async () => {
    try {
      await LeafService.addProduct({
        ...produtoLeaf,
        idNota: pedido.id,
        subtotal: produtoLeaf.subtotal.replace(".", "").replace(",", "."),
        total: produtoLeaf.total.replace(".", "").replace(",", "."),
        desconto: produtoLeaf.desconto.replace(".", "").replace(",", ".")
      })
      await findLeafProductsByIdNota(pedido.id)
      clearDataProducts()
      toast("Produto adicionado! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findLeafProductsByIdNota = async (id) => {
    try {
      const result = await LeafService.findLeafProductsByIdNota(id)
      setReturnedProductsLeaf(result.noteItem)
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteProduct = async (id) => {
    try {
      await LeafService.deleteProduct(id)
      await findLeafProductsByIdNota(pedido.id)

      toast("Produto removido! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const clearDataProducts = () => {
    setProdutoLeaf(INITIAL_VALUE_PRODUTOS)
  }

  const handleTotalValueGeneralLeafInformation = () => {
    const descontoTotal = returnedProductsLeaf.reduce((previousValue, newValue) => previousValue + parseFloat(newValue.desconto), 0)
    const totalProdutos = returnedProductsLeaf.reduce((previousValue, newValue) => previousValue + parseFloat(newValue.total), 0)
    let frete = pedido.frete.toString().replace(".", "").replace(".", "").replace(",", ".")

    if (frete === "") {
      frete = "0"
    }
    const totalPedido = totalProdutos + parseFloat(frete)

    setPedido({ ...pedido, desconto: descontoTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 }), total: totalPedido.toLocaleString('pt-br', { minimumFractionDigits: 2 }) })
  }

  const handleTotalValueProducts = () => {
    let quantidade = produtoLeaf.quantidade
    let subtotal = produtoLeaf.subtotal.replace(".", "").replace(",", ".")
    let desconto = produtoLeaf.desconto.replace(".", "").replace(",", ".")

    if (produtoLeaf.desconto === "") {
      desconto = "0"
    } if (produtoLeaf.subtotal === "") {
      subtotal = "0"
    } if (produtoLeaf.quantidade === "") {
      quantidade = "1"
    }

    const result = (parseInt(quantidade) * parseFloat(subtotal)) - parseFloat(desconto)
    setProdutoLeaf({ ...produtoLeaf, total: result.toLocaleString('pt-br', { minimumFractionDigits: 2 }) })
  }

  const formatTotalValuesPedido = () => {
    let desconto = pedido.desconto.toString().replace(".", "").replace(".", "").replace(",", ".")
    let outrasDespesas = pedido.despesas_acessorias.toString().replace(".", "").replace(".", "").replace(",", ".")
    let total = pedido.total.toString().replace(".", "").replace(".", "").replace(",", ".")
    let frete = pedido.frete.toString().replace(".", "").replace(".", "").replace(",", ".")


    return {
      desconto: desconto,
      total: total,
      frete: frete,
      despesas_acessorias: outrasDespesas,
    }
  }

  const handleErrorsLeaf = () => {
    const handleError = handleErrorSendleaf(returnedProductsLeaf)
    return handleError
  }

  return { pedido, setPedido, produtoLeaf, setProdutoLeaf, handleChange, handleChangeProductLeaf, responseWebmania, returnedProductsLeaf, handleSaveOrUpdate, addProduct, deleteProduct, cpfCnpjCliente, handleTotalValueProducts, sendLeaf, handleShow, handleClose, show, search, searchLeaf, handleChangeSeachLeaf, resultSearchLeaf, findLeafById, deleteLeafAndProducts, handleTotalValueGeneralLeafInformation, cancelLeaf, handleCloseModalCancelLeaf, handleShowModalCancelLeaf, showModalCancelLeaf, handleChangeCancelLeaf, loading, handleRenderNavItem, navItems }
}
