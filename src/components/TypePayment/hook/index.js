import { useState, useEffect } from "react"
import TypePaymentService from "../../../services/TypePaymentService"
import { INITIAL_STATE_TYPE_PAYMENT } from "../initalStates"
import { toast } from "react-toastify";


export function UseTypePayment() {
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
  }

  const save = async () => {
    try {
      const id = await TypePaymentService.save(typePayment)
      setTypePayment({ ...typePayment, id })

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
    typePayment.id ? await update() : await save()
  }

  const findAll = async () => {
    const allTypePayments =  await TypePaymentService.findAll()
    setTypesPaymentsFromSelectBox(allTypePayments)
  }

  const deleteTypePayments = () => {
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

  const removeTypePaymentFromList = (index) => {
    const newTypesPayments = [...typesPaymentsFromSelectBox]

    newTypesPayments.splice(index, 1)

    removeConfirmedBillsToList(index)
    return setTypesPaymentsFromSelectBox(newTypesPayments)
  }



  return { openLayouts, handleOpenLayouts, confirmRemoveTypePayment, handleChangeConfirmRemoveTypePayment, removeTypePaymentFromList, cancelRemoveTypePayment, typesPaymentsFromSelectBox, handleChange, typePayment, handleSaveOrUpdate, clear }
} 