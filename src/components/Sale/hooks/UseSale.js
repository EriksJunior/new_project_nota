import { useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_BILL, SAVE_CUSTOMER, SAVE_PRODUCTS, SAVE_SALE } from "../store/reducers/SaleReducers";
import { UseCustomer } from "./UseCustomer";

import { GlobalContext } from "../../../context/Global/global";
import SaleService from "../../../services/SaleService";

import { INITIAL_STATE_CLIENTE, INITIAL_VALUE_PRODUTOS, INITIAL_VALUE_PEDIDO, INITIAL_STATE_PARCELA } from "../initialStates"

import { validadeSale } from "../validate";
import { toast } from "react-toastify";

export function UseSale() {
  const { loading, setLoading } = useContext(GlobalContext)
  const refTotalSale = useRef("")
  const refTotalDiscountSale = useRef("")
  const [openModal, setOpenModal] = useState("hide")
  const [dataSearchSale, setDataSearchSale] = useState([])
  const [openAreaSale, setOpenAreaSale] = useState(false)
  const [openLayouts, setOpenLayouts] = useState(false)

  const dispatch = useDispatch()
  const pedido = useSelector(state => state.sale.pedido)
  const cliente = useSelector(state => state.sale.cliente)
  const produtos = useSelector(state => state.sale.produto)

  const { findCustomerById } = UseCustomer()

  const handleChangeSale = (e) => {
    dispatch(SAVE_SALE({ ...pedido, [e.target.name]: e.target.value }))
  }

  const saveSale = async (sale) => {
    try {
      validadeSale(sale)

      // const formattedSale = convertMonetaryValuesToFloat(sale)
      setLoading(true)
      const id = await SaleService.save(sale)
      dispatch(SAVE_SALE({ ...sale, id: id }))

      toast("Pedido salvo! ✅", {
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

  const updateSale = async (sale) => {
    try {
      validadeSale(sale)
      // const formattedMonetaryValuesLeaf = convertMonetaryValuesToFloat({ ...sale })
      setLoading(true)
      await SaleService.update(sale)

      return toast("Pedido atualizado! ✅", {
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

  const findById = async (id) => {
    try {
      const sale = await SaleService.findById(id)
      const newSale = { ...sale }
      Reflect.deleteProperty(newSale, 'bills')
      Reflect.deleteProperty(newSale, 'products')
      dispatch(SAVE_SALE(newSale))

      const newProducs = sale.products.map((prod) => {
        const formattedSubtotal = (prod.valorTotal / prod.quantidade).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        const formattedTotal = prod.valorTotal.toLocaleString('pt-br', { minimumFractionDigits: 2 })
        const formattedDiscount= prod.desconto.toLocaleString('pt-br', { minimumFractionDigits: 2 })

        return {
          ...prod,
          valorTotal: formattedTotal,
          subtotal: formattedSubtotal,
          desconto: formattedDiscount
        }
      })
      calculateTotalSaleBasedProducts()

      dispatch(SAVE_PRODUCTS(newProducs))
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteSale = async (id) => {
    try {
      await SaleService.delete(id)
      await searchSale()
      setOpenAreaSale(false)

      toast("Registro deletado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchSale = async (text, filter, page, startDate, endDate) => {
    const sales = await SaleService.search(text, filter, page, startDate, endDate)
    setDataSearchSale(sales)
  }

  const handleSaveOrUpdateSale = async () => {
    if (!pedido.id) {
      const id = await saveSale({ ...pedido, idCliente: cliente.id })
      return id
    } else {
      await updateSale({ ...pedido, idCliente: cliente.id })
    }
  }

  // const convertMonetaryValuesToFloat = (sale) => {
  //   console.log(sale);
  //   const formattedTotal = sale.valorTotal.replace(".", "").replace(".", "").replace(",", ".")

  //   return { ...sale, valorTotal: formattedTotal }
  // }

  const calculateTotalSaleBasedProducts = () => {
    const formattedTotal = produtos.map((prod) => {
      const total = String(prod.valorTotal).length > 7 ? String(prod.valorTotal).replace(".", "").replace(".", "").replace(".", "").replace(",", ".") : String(prod.valorTotal).replace(",", ".")
      const subtotal = total / prod.quantidade
      const desconto = String(prod.desconto).length > 7 ? String(prod.desconto).replace(".", "").replace(".", "").replace(".", "").replace(",", ".") : String(prod.desconto).replace(",", ".")
      const quantidade = prod.quantidade

      return (parseFloat(subtotal) * quantidade) - desconto
    }, 0)
    const totalValuesProducts = formattedTotal.reduce((oldValue, value) => oldValue + value, 0)
    return totalValuesProducts.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }

  const calculateTotalDiscountSale = () => {
    const formattedDiscount = produtos.map((prod) => {
      const desconto = String(prod.desconto).length > 7 ? String(prod.desconto).replace(".", "").replace(".", "").replace(".", "").replace(",", ".") : String(prod.desconto).replace(",", ".")

      return parseFloat(desconto)
    }, 0)
    
    const totalDiscount = formattedDiscount.reduce((oldValue, value) => oldValue + value, 0)
    return totalDiscount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }

  const handleEditSale = async () => {
    setOpenLayouts(true)
    findCustomerById(pedido.idCliente)
  }

  const handleNewSale = () => {
    setOpenLayouts(true)
  }

  const handleOpenAreaSale = async (id) => {
    setOpenAreaSale(true)
    await findById(id)
  }

  const switchBetweenComponents = () => {
    setOpenAreaSale(false)
    setOpenLayouts(false)
    clearAllInputs()
  }

  const clearAllInputs = () => {
    dispatch(SAVE_SALE(INITIAL_VALUE_PEDIDO))
    dispatch(SAVE_PRODUCTS([INITIAL_VALUE_PRODUTOS]))
    dispatch(SAVE_CUSTOMER(INITIAL_STATE_CLIENTE))
    dispatch(SAVE_BILL([INITIAL_STATE_PARCELA]))
  }

  return { handleChangeSale, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotalDiscountSale, openModal, setOpenModal, searchSale, dataSearchSale, openLayouts, handleNewSale, switchBetweenComponents, handleOpenAreaSale, openAreaSale, handleEditSale, deleteSale }
}