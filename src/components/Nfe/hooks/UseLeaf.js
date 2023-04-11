import { useRef, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_LEAF, SAVE_CUSTOMER, SAVE_BILL, SAVE_PRODUCTS } from "../store/reducers/LeafReducers";
import { DateTime } from 'luxon'

import { GlobalContext } from "../../../context/Global/global";
import { UseCustomer } from "./UseCustomer";

import LeafService from "../../../services/LeafService";
import { INITIAL_VALUE_PEDIDO, INITIAL_STATE_CLIENTE_NFE, INITIAL_VALUE_PRODUTOS, INITIAL_STATE_PARCELA_NFE } from "../initialStates"

import { validadeLeaf } from "../validate";
import { Masks } from "../../../utils/masks/Masks";
import { toast } from "react-toastify";
import ProductLeafService from "../../../services/ProductLeafService";
import BillService from "../../../services/BillService";

export function UseLeaf() {
  const { loading, setLoading } = useContext(GlobalContext)
  const { findCustomerById } = UseCustomer()

  const [openModal, setOpenModal] = useState("hide")
  const [openModalCancelLeaf, setOpenModalCancelLeaf] = useState("hide")
  const [openModalReturnedLeaf, setOpenModalReturnedLeaf] = useState("hide")
  const [dataSearchLeaf, setDataSearchLeaf] = useState([])
  const [openLayouts, setOpenLayouts] = useState(false)
  const [openAreaLeaf, setOpenAreaLeaf] = useState(false)


  const refValorTotalPedido = useRef("")
  const refTotalDescontoPedido = useRef("")
  const refDescriptionCancelLeaf = useRef("")

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

  const findById = async (id) => {
    try {
      const leaf = await LeafService.findLeafById(id)
      const data = await handleAllDataLeafAfterEdit(leaf)

      dispatch(SAVE_LEAF(data.leaf))
      dispatch(SAVE_PRODUCTS(data.products))
      dispatch(SAVE_BILL(data.bills))
      await findCustomerById(leaf.idCliente)
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleAllDataLeafAfterEdit = async (leaf) => {
    const leafFormatted = handleLeafAfterEdit(leaf)
    const productsFormatted = await handleProductsLeafAfterEdit(leaf.id)
    const billsFormatted = await handleBillsLeafAfterEdit(leaf.id)

    return { leaf: leafFormatted, products: productsFormatted, bills: billsFormatted }
  }

  const handleProductsLeafAfterEdit = async (idLeaf) => {
    const { noteItem } = await findLeafProductsByIdNota(idLeaf)

    return noteItem.map((prod) => {
      const formattedDiscountProd = prod.desconto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
      const formattedSubtotal = prod.subtotal.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
      const formattedTotal = prod.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })

      return {
        ...prod,
        desconto: formattedDiscountProd,
        subtotal: formattedSubtotal,
        total: formattedTotal
      }
    })
  }

  const handleLeafAfterEdit = (leaf) => {
    const formattedDate = leaf.data_nfe.split(" ")[0]

    return {
      id: String(leaf.id),
      operacao: String(leaf.operacao),
      natureza_operacao: String(leaf.natureza_operacao),
      modelo: String(leaf.modelo), //2 para NFC-e
      ambiente: String(leaf.ambiente), //2 para Homologação
      idCliente: String(leaf.idCliente),
      finalidade: String(leaf.finalidade),
      url_notificacao: String(leaf.url_notificacao),
      data_nfe: DateTime.fromISO(formattedDate).setLocale("fr").toFormat("yyyy-MM-dd"),
      id_webmania: String(leaf.id_webmania),
      response: {
        chave: String(leaf.response.chave),
        danfe: String(leaf.response.danfe),
        danfe_etiqueta: String(leaf.response.danfe_etiqueta),
        danfe_simples: String(leaf.response.danfe_simples),
        log: leaf.response.log,
        modelo: String(leaf.response.modelo),
        motivo: String(leaf.response.motivo),
        nfe: String(leaf.response.nfe),
        serie: String(leaf.response.serie),
        status: String(leaf.response.status),
        uuid: String(leaf.response.uuid),
        xml: String(leaf.response.xml)
      },
      response_cancelamento: String(leaf.response_cancelamento),
      pagamento: String(leaf.pagamento),
      forma_pagamento: String(leaf.forma_pagamento),
      presenca: String(leaf.presenca),
      modalidade_frete: String(leaf.modalidade_frete),
      frete: maskCurrency(String(leaf.frete)),
      desconto: String(leaf.desconto),
      total: String(leaf.total),
      intermediador: leaf.intermediador || "",
      cnpj_intermediador: leaf.cnpj_intermediador || "",
      id_intermediador: leaf.id_intermediador || "",
      despesas_acessorias: maskCurrency(String(leaf.despesas_acessorias)),
      informacoes_fisco: leaf.informacoes_fisco || "",
      informacoes_complementares: leaf.informacoes_complementares || "",
      status: String(leaf.status),
    }
  }

  const handleBillsLeafAfterEdit = async (idLeaf) => {
    const bills = await BillService.findByIdLeaf(idLeaf)

    return bills.map((bill) => {
      const formattedDate = bill.data.split(" ")[0]
      return {
        ...bill,
        data: DateTime.fromISO(formattedDate).setLocale("fr").toFormat("yyyy-MM-dd")
      }
    })
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
    const formattedDespesasAcessorias = leaf.despesas_acessorias.replace(".", "").replace(".", "").replace(",", ".")
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
    const formattedFrete = String(pedido.frete).replace(".", "").replace(",", ".").replace(",", ".")

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
        return toast.warning("Documento fiscal já emitido!", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

      setLoading(true)
      const result = await LeafService.sendLeaf(pedido.id)

      if (result) {
        dispatch(SAVE_LEAF({ ...pedido, response: result.dataWebMania, status: result.status }))
        toast("Documento fiscal Emitido! ✅", {
          position: toast.POSITION.TOP_RIGHT
        });
      }
    } catch (error) {
      toast.warning(error.response.data.message || "Ocorreu um erro ao emitir o documento fiscal! ", {
        position: toast.POSITION.TOP_RIGHT
      });
    } finally {
      setLoading(false)
    }
  }

  const cancelLeaf = async (idLeaf) => {
    try {
      const dataCancelLeaf = {
        chave: pedido.response.chave,
        motivo: refDescriptionCancelLeaf.current.value
      }

      const { status } = await LeafService.cancelLeaf(dataCancelLeaf, idLeaf)
      dispatch(SAVE_LEAF({ ...pedido, status }))
    } catch (error) {
      console.log(error)
    }
  }

  const enbleModalCancelLeaf = () => {
    setOpenModalCancelLeaf("show")
    refDescriptionCancelLeaf.current.value = ""
  }

  const enbleModalReturnedLeaf = () => {
    setOpenModalReturnedLeaf("show")
  }

  const handleSendLeafAndFind = async () => {
    await handleSaveLeaf()
    await sendLeaf()
  }


  const handleEditLeaf = async (id) => {
    setOpenLayouts(true)
    await findById(id)
  }

  const handleNewLeaf = () => {
    setOpenLayouts(true)
  }

  // const handleOpenAreaLeaf = async (id) => {
  //   setOpenAreaLeaf(true)
  //   await findById(id)
  // }

  const switchBetweenComponents = () => {
    setOpenAreaLeaf(false)
    setOpenLayouts(false)
    clearAllInputs()
  }

  const clearAllInputs = () => {
    dispatch(SAVE_LEAF(INITIAL_VALUE_PEDIDO))
    dispatch(SAVE_PRODUCTS([INITIAL_VALUE_PRODUTOS]))
    dispatch(SAVE_CUSTOMER(INITIAL_STATE_CLIENTE_NFE))
    dispatch(SAVE_BILL([INITIAL_STATE_PARCELA_NFE]))
  }

  const findLeafProductsByIdNota = async (idLeaf) => {
    return await ProductLeafService.findLeafProductsByIdNota(idLeaf)
  }

  const formatNfeReferenciada = (value) => {
    if(pedido.nfe_referenciada) return value.replace(/ /g, '')
    return value
  }

  const enableBtnConfirmDevolution = () => {
    if(String(pedido.finalidade) === "4" && String(pedido.operacao) === "0" && pedido.nfe_referenciada && pedido.nfe_referenciada.length === 44) {
      return true
    }
    
    return false
  }

  return { handleChangePedido, handleSaveLeaf, handleChangeFreightAndOthers, calculateTotalLeafBasedProducts, calculateTotalDiscountLeaf, refValorTotalPedido, refTotalDescontoPedido, openModal, setOpenModal, openModalCancelLeaf, setOpenModalCancelLeaf, openModalReturnedLeaf, setOpenModalReturnedLeaf, handleSendLeafAndFind, cancelLeaf, enbleModalCancelLeaf, enbleModalReturnedLeaf, loading, searchLeaf, dataSearchLeaf, handleNewLeaf, switchBetweenComponents, handleEditLeaf, openLayouts, openAreaLeaf, refDescriptionCancelLeaf, clearAllInputs, formatNfeReferenciada, enableBtnConfirmDevolution}
}