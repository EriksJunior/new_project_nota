import { useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_LEAF } from "../store/reducers/LeafReducers";

import { GlobalContext } from "../../../context/Global/global";
import LeafService from "../../../services/LeafService";

import { validadeLeaf } from "../validate";
import { Masks } from "../../../utils/masks/Masks";
import { toast } from "react-toastify";

export function UseLeaf() {
  const { loading, setLoading } = useContext(GlobalContext)
  const [openModal, setOpenModal] = useState("hide")
  const [dataSearchLeaf, setDataSearchLeaf] = useState("")
  const refValorTotalPedido = useRef("")
  const refTotalDescontoPedido = useRef("")

  const dispatch = useDispatch()
  const pedido = useSelector(state => state.leaf.pedido)
  const cliente = useSelector(state => state.leaf.cliente)
  const produtos = useSelector(state => state.leaf.produto)

  const { maskCurrency } = Masks()
  const handleChangePedido = (e) => {
    dispatch(SAVE_LEAF({ ...pedido, [e.target.name]: e.target.value }))
  }

  const handleChangeFreightAndOthers = (e) => {
    dispatch(SAVE_LEAF({ ...pedido, [e.target.name]: maskCurrency(e.target.value) }))
  };

  const saveLeaf = async (dataPedido) => {
    try {
      validadeLeaf(dataPedido)

      const formattedMonetaryValuesLeaf = convertMonetaryValuesToFloat(dataPedido)

      const id = await LeafService.save(formattedMonetaryValuesLeaf)
      dispatch(SAVE_LEAF({ ...dataPedido, id: id }))

      toast("Documento fiscal salvo! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });

      return id
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const updateLeaf = async (dataPedido) => {
    try {
      validadeLeaf(dataPedido)
      const totalDesconto = refTotalDescontoPedido.current.value
      const total = refValorTotalPedido.current.value

      const formattedMonetaryValuesLeaf = convertMonetaryValuesToFloat({ ...dataPedido, total: total, desconto: totalDesconto })

      await LeafService.update(formattedMonetaryValuesLeaf)

      return toast("Documento fiscal atualizado! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findById = async () => {
    try {
      const leaf = await LeafService.findLeafById(pedido.id)
      dispatch(SAVE_LEAF({ ...pedido, response: leaf.response, status: leaf.status }))
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchLeaf = async (text, filter, page, startDate, endDate) => {
    const leafs = await LeafService.searchLeaf(text, filter, page, startDate, endDate)
    setDataSearchLeaf(leafs)
  }

  const handleSaveLeaf = async () => {
    if (!pedido.id) {
      const id = await saveLeaf({ ...pedido, idCliente: cliente.id })
      return id
    } else {
      await updateLeaf({ ...pedido, idCliente: cliente.id })
    }
  }

  const convertMonetaryValuesToFloat = (leaf) => {
    const formattedFrete = leaf.frete.replace(".", "").replace(".", "").replace(",", ".")
    const formattedDespesasAcessorias = leaf.frete.replace(".", "").replace(".", "").replace(",", ".")
    const formattedTotal = leaf.total.replace(".", "").replace(".", "").replace(",", ".")
    const formattedDesconto = leaf.desconto.replace(".", "").replace(".", "").replace(",", ".")

    return { ...leaf, frete: formattedFrete, despesas_acessorias: formattedDespesasAcessorias, total: formattedTotal, desconto: formattedDesconto }
  }

  const calculateTotalLeafBasedProducts = () => {
    const formattedTotal = produtos.map((prod) => {
      const subtotal = prod.subtotal.replace(".", "").replace(",", ".").replace(",", ".")
      const desconto = prod.desconto.replace(".", "").replace(",", ".").replace(",", ".")
      const quantidade = prod.quantidade

      return (parseFloat(subtotal) * quantidade) - desconto
    }, 0)
    const formattedFrete = pedido.frete.replace(".", "").replace(",", ".").replace(",", ".")

    const totalValuesProducts = formattedTotal.reduce((oldValue, value) => oldValue + value, 0)
    const totalMonetary = totalValuesProducts + parseFloat(formattedFrete)

    return totalMonetary.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }

  const calculateTotalDiscountLeaf = () => {
    const formattedDiscount = produtos.map((prod) => {
      const desconto = prod.desconto.replace(".", "").replace(",", ".").replace(",", ".")

      return parseFloat(desconto)
    }, 0)

    const totalDiscount = formattedDiscount.reduce((oldValue, value) => oldValue + value, 0)
    return totalDiscount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }

  const sendLeaf = async () => {
    try {
      if (pedido.response.chave) {
        return
      }
      setLoading(true)
      await LeafService.sendLeaf(pedido.id)

      toast("Documento fiscal Emitido! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      console.log(error)
      toast("Ocorreu um erro ao emitir o documento fiscal! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } finally {
      setLoading(false)
    }
  }

  const handleSendLeafAndFind = async () => {
    await handleSaveLeaf()
    await sendLeaf()
    await findById()
  }

  return { handleChangePedido, handleSaveLeaf, handleChangeFreightAndOthers, calculateTotalLeafBasedProducts, calculateTotalDiscountLeaf, refValorTotalPedido, refTotalDescontoPedido, openModal, setOpenModal, handleSendLeafAndFind, loading, searchLeaf }
}