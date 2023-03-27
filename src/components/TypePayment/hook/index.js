import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";

import { SAVE_ALL_TYPES_PAYMENTS_LEAF } from "../../Nfe/store/reducers/LeafReducers";
import { SAVE_ALL_TYPES_PAYMENTS_SALE } from "../../Sale/store/reducers/SaleReducers";
import TypePaymentService from "../../../services/TypePaymentService"

import { toast } from "react-toastify";
import { INITIAL_STATE_TYPE_PAYMENT } from "../initalStates"

export function UseTypePayment() {
  const dispatch = useDispatch()
  const [typePayment, setTypePayment] = useState(INITIAL_STATE_TYPE_PAYMENT)
  const [typesPaymentsFromSelectBox, setTypesPaymentsFromSelectBox] = useState([])
  const [openLayouts, setOpenLayouts] = useState(false)
  const [confirmRemoveTypePayment, setConfirmRemoveTypePayment] = useState([false])

  useEffect(() => {
    findAll()
  }, [])

  const handleChange = (e) => {
    setTypePayment({ ...typePayment, tipo: e.target.value })
  }

  const handleOpenLayouts = () => {
    setOpenLayouts(state => !state)
    clear()
  }

  const handleOpenArea = (id) => {
    handleOpenLayouts()
    findById(id)
  }

  const save = async () => {
    try {
      const id = await TypePaymentService.save(typePayment)
      setTypePayment({ ...typePayment, id })

      await findAll()
      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao salvar", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const update = async () => {
    try {
      await TypePaymentService.update(typePayment)
      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao atualizar", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveOrUpdate = async () => {
    typePayment.id ? update() : save()
  }

  const findAll = async () => {
    try {
      const allTypePayments = await TypePaymentService.findAll()
      setTypesPaymentsFromSelectBox(allTypePayments)
      dispatch(SAVE_ALL_TYPES_PAYMENTS_LEAF(allTypePayments))
      dispatch(SAVE_ALL_TYPES_PAYMENTS_SALE(allTypePayments))
    } catch (error) {
      toast.error("Ocorreu um erro ao Buscar todas as formas de pagamento", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findById = async (id) => {
    try {
      const allTypePayments = await TypePaymentService.findById(id)
      setTypePayment(allTypePayments)
    } catch (error) {
      toast.error("Ocorreu um erro ao buscar essa forma de pagamento", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteTypePayments = async (index) => {
    try {
      const id = typesPaymentsFromSelectBox[index].id
      await TypePaymentService.deleteTypePayments(id)
    } catch (error) {
      toast.error("Ocorreu um erro ao Deletar", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const clear = () => {
    setTypePayment(INITIAL_STATE_TYPE_PAYMENT)
  }

  const handleChangeConfirmRemoveTypePayment = (e, index) => {
    const newConfirmRemoveTypePayment = [...confirmRemoveTypePayment]
    newConfirmRemoveTypePayment[index] = e.target.checked

    setConfirmRemoveTypePayment(newConfirmRemoveTypePayment)
  }

  const cancelRemoveTypePayment = (index) => {
    const newConfirmRemoveTypePayment = [...confirmRemoveTypePayment]
    newConfirmRemoveTypePayment[index] = false

    setConfirmRemoveTypePayment(newConfirmRemoveTypePayment)
  }

  const removeConfirmedBillsToList = (index) => {
    const newConfirmRemoveTypePayment = [...confirmRemoveTypePayment]
    newConfirmRemoveTypePayment.splice(index, 1)

    setConfirmRemoveTypePayment(newConfirmRemoveTypePayment)
  }

  const removeTypePaymentFromList = async (index) => {
    const newTypesPayments = [...typesPaymentsFromSelectBox]

    newTypesPayments.splice(index, 1)

    deleteTypePayments(index)
    removeConfirmedBillsToList(index)
    setTypesPaymentsFromSelectBox(newTypesPayments)
  }

  return { openLayouts, handleOpenLayouts, confirmRemoveTypePayment, handleChangeConfirmRemoveTypePayment, removeTypePaymentFromList, cancelRemoveTypePayment, typesPaymentsFromSelectBox, handleChange, typePayment, handleSaveOrUpdate, clear, handleOpenArea }
} 