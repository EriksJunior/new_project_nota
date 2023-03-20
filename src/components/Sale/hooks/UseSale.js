import { useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_SALE } from "../store/reducers/SaleReducers";

import { GlobalContext } from "../../../context/Global/global";
import SaleService from "../../../services/SaleService";

import { validadeSale } from "../validate";
import { Masks } from "../../../utils/masks/Masks";
import { toast } from "react-toastify";

export function UseSale() {
  const { loading, setLoading } = useContext(GlobalContext)
  const refTotalSale = useRef("")
  const refTotaDiscountSale = useRef("")
  const [openModal, setOpenModal] = useState("hide")

  const dispatch = useDispatch()
  const pedido = useSelector(state => state.sale.pedido)
  const cliente = useSelector(state => state.sale.cliente)
  const produtos = useSelector(state => state.sale.produto)

  const { maskCurrency } = Masks()
  const handleChangeSale = (e) => {
    dispatch(SAVE_SALE({ ...pedido, [e.target.name]: e.target.value }))
  }

  const saveSale = async (dataPedido) => {
    try {
      validadeSale(dataPedido)

      const formattedMonetaryValuesLeaf = convertMonetaryValuesToFloat(dataPedido)
      setLoading(true)
      const id = await SaleService.save(formattedMonetaryValuesLeaf)
      dispatch(SAVE_SALE({ ...dataPedido, id: id }))

      toast("Documento fiscal salvo! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });

      return id
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    finally {
      setLoading(false)
    }
  }

  const updateSale = async (dataPedido) => {
    try {
      validadeSale(dataPedido)
      const totalDesconto = refTotaDiscountSale.current.value
      const total = refTotalSale.current.value

      const formattedMonetaryValuesLeaf = convertMonetaryValuesToFloat({ ...dataPedido, total: total, desconto: totalDesconto })
      setLoading(true)
      await SaleService.update(formattedMonetaryValuesLeaf)

      return toast("Documento fiscal atualizado! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    finally {
      setLoading(false)
    }
  }

  const findById = async () => {
    try {
      const leaf = await SaleService.findById(pedido.id)
      dispatch(SAVE_SALE({ ...pedido, response: leaf.response, status: leaf.status }))
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchLeaf = async () => {
    const leafs = await SaleService.search()
    console.log(leafs)
  }

  const handleSaveOrUpdateSale = async () => {
    if (!pedido.id) {
      const id = await saveSale({ ...pedido, idCliente: cliente.id })
      return id
    } else {
      await updateSale({ ...pedido, idCliente: cliente.id })
    }
  }

  const convertMonetaryValuesToFloat = (leaf) => {
    const formattedFrete = leaf.frete.replace(".", "").replace(".", "").replace(",", ".")
    const formattedDespesasAcessorias = leaf.frete.replace(".", "").replace(".", "").replace(",", ".")
    const formattedTotal = leaf.total.replace(".", "").replace(".", "").replace(",", ".")
    const formattedDesconto = leaf.desconto.replace(".", "").replace(".", "").replace(",", ".")

    return { ...leaf, frete: formattedFrete, despesas_acessorias: formattedDespesasAcessorias, total: formattedTotal, desconto: formattedDesconto }
  }

  const calculateTotalSaleBasedProducts = () => {
    const formattedTotal = produtos.map((prod) => {
      const subtotal = prod.subtotal.replace(".", "").replace(",", ".").replace(",", ".")
      const desconto = prod.desconto.replace(".", "").replace(",", ".").replace(",", ".")
      const quantidade = prod.quantidade

      return (parseFloat(subtotal) * quantidade) - desconto
    }, 0)

    const totalValuesProducts = formattedTotal.reduce((oldValue, value) => oldValue + value, 0)

    return totalValuesProducts.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }

  const calculateTotalDiscountSale = () => {
    const formattedDiscount = produtos.map((prod) => {
      const desconto = prod.desconto.replace(".", "").replace(",", ".").replace(",", ".")

      return parseFloat(desconto)
    }, 0)

    const totalDiscount = formattedDiscount.reduce((oldValue, value) => oldValue + value, 0)
    return totalDiscount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }



  return { handleChangeSale, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotaDiscountSale, openModal, setOpenModal }
}