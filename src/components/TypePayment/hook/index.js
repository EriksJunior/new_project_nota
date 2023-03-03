import { useState } from "react"

export function UseTypePayment() {
  const [typesPayments, setTypePayments] = useState(["Eriks", "Jr", "Pb"])
  const [openLayouts, setOpenLayouts] = useState(false)
  const [confirmRemoveTypePayment, setConfirmRemoveTypePayment] = useState([false])

  const handleOpenLayouts = () => {
    setOpenLayouts(state => !state)
  }

  const save = () => {

  }

  const findAll = () => {

  }

  const deleteTypePayments = () => {
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
    const newTypesPayments = [...typesPayments]

    newTypesPayments.splice(index, 1)

    removeConfirmedBillsToList(index)
    return setTypePayments(newTypesPayments)
  }



  return { openLayouts, handleOpenLayouts, confirmRemoveTypePayment, handleChangeConfirmRemoveTypePayment, removeTypePaymentFromList, cancelRemoveTypePayment, typesPayments }
} 