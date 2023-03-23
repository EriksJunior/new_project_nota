import { useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_PRODUCTS, SAVE_SALE } from "../store/reducers/SaleReducers";

import { GlobalContext } from "../../../context/Global/global";
import SaleService from "../../../services/SaleService";

import { validadeSale } from "../validate";
import { toast } from "react-toastify";

export function UseSale() {
  const { loading, setLoading } = useContext(GlobalContext)
  const refTotalSale = useRef("")
  const refTotaDiscountSale = useRef("")
  const [openModal, setOpenModal] = useState("hide")
  const [dataSearchSale, setDataSearchSale] = useState([])
  const [openAreaSale, setOpenAreaSale] = useState(false)
  const [openLayouts, setOpenLayouts] = useState(false)

  const dispatch = useDispatch()
  const pedido = useSelector(state => state.sale.pedido)
  const cliente = useSelector(state => state.sale.cliente)
  const produtos = useSelector(state => state.sale.produto)

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

  const updateSale = async (sale) => {
    try {
      validadeSale(sale)

      // const formattedMonetaryValuesLeaf = convertMonetaryValuesToFloat({ ...sale })
      setLoading(true)
      await SaleService.update(sale)

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

  // const findById = async (id) => {
  //   try {
  //     const sale = await SaleService.findById(id)
  //     const newSale = { ...sale }
  //     Reflect.deleteProperty(newSale, 'bills')
  //     Reflect.deleteProperty(newSale, 'products')
  //     dispatch(SAVE_SALE(newSale))

  //     const newProducs = sale.products.map((prod) => {
  //       return {
  //         ...prod, 
  //         subtotal: prod.valorTotal / prod.quantidade
  //       }
  //     })
  //     dispatch(SAVE_PRODUCTS(newProducs))
  //     // dispatch(SAVE_PRODUCTS({ ...sale.products, subtotal: sale.valorTotal / sale.quantidade }))
  //   } catch (error) {
  //     toast.warning(error.message, {
  //       position: toast.POSITION.TOP_RIGHT
  //     });
  //   }
  // }

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
      const subtotal = String(prod.subtotal).replace(".", "").replace(",", ".").replace(",", ".")
      const desconto = String(prod.desconto).replace(".", "").replace(",", ".").replace(",", ".")
      const quantidade = prod.quantidade

      return (parseFloat(subtotal) * quantidade) - desconto
    }, 0)

    const totalValuesProducts = formattedTotal.reduce((oldValue, value) => oldValue + value, 0)

    return totalValuesProducts.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }

  const calculateTotalDiscountSale = () => {
    const formattedDiscount = produtos.map((prod) => {
      const desconto = String(prod?.desconto).replace(".", "").replace(",", ".").replace(",", ".")

      return parseFloat(desconto)
    }, 0)

    const totalDiscount = formattedDiscount.reduce((oldValue, value) => oldValue + value, 0)
    return totalDiscount.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
  }

  const handleEditSale = async () => {
    setOpenLayouts(true)
    // await findById(pedido.id)
  }

  const handleNewSale = () => {
    setOpenLayouts(true)
  }

  const handleOpenAreaSale = async (id) => {
    setOpenAreaSale(true)
    // await findById(id)
  }

  const switchBetweenComponents = () => {
    setOpenAreaSale(false)
    setOpenLayouts(false)
    // clearAllInputs()
  }

  return { handleChangeSale, handleSaveOrUpdateSale, calculateTotalSaleBasedProducts, calculateTotalDiscountSale, refTotalSale, refTotaDiscountSale, openModal, setOpenModal, searchSale, dataSearchSale, openLayouts, handleNewSale, switchBetweenComponents, handleOpenAreaSale, openAreaSale, handleEditSale, deleteSale }
}