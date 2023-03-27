import { useState } from "react";
import { UseSale } from "./UseSale";

import { useDispatch, useSelector } from "react-redux";
import { SAVE_BILL } from "../store/reducers/SaleReducers";

import { toast } from "react-toastify";

import BillService from "../../../services/BillService";
import { validateBillSale } from "../validate";
import { INITIAL_STATE_PARCELA } from "../initialStates";

export function UseBill() {
  const { handleSaveOrUpdateSale } = UseSale()
  const [confirmRemoveBill, setConfirmRemoveBill] = useState([false])

  const parcelas = useSelector(state => state.sale.parcela)
  const cliente = useSelector(state => state.sale.cliente)
  const pedido = useSelector(state => state.sale.pedido)

  const dispatch = useDispatch()

  const saveLeafBill = async (idLeaf) => {
    try {
      const newBills = handleWithBillsBeforeSave(parcelas, idLeaf)

      const bills = await Promise.all(newBills.map((bill) => {
        if (bill.id) {
          return bill
        }

        if (!bill.data || !bill.valorTotal) {
          return bill
        }

        return BillService.save(bill)
      }))

      dispatch(SAVE_BILL(bills))

      // return toast("Parcelas salvas! ✅", {
      //   position: toast.POSITION.TOP_RIGHT
      // });
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }

  }


  const handleSaveSaleAndSaleBills = async () => {
    if (pedido.id) {
      return await saveLeafBill(pedido.id)
    }

    const idVenda = await handleSaveOrUpdateSale()
    if (idVenda) await saveLeafBill(idVenda)
  }

  const handleWithBillsBeforeSave = (bills, idSale) => {
    const newBills = bills.map((bill) => {
      return {
        ...bill,
        idCliente: cliente.id,
        idVenda: idSale
      }
    })

    const billsFilled = newBills.filter(bill => !bill.data || !bill.valorTotal)

    if (billsFilled.length) {
      const result = billsFilled.map((bill) => {
        return validateBillSale(bill)
      })

      toast.warning(result[0], {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    return newBills
  }

  const addBillToList = async () => {
    dispatch(SAVE_BILL([...parcelas, INITIAL_STATE_PARCELA]))
    setConfirmRemoveBill([...confirmRemoveBill, false])
  }

  const handleChangeBill = (e, index) => {
    dispatch(SAVE_BILL(
      parcelas.map((bill, i) => {
        if (i === index) {
          return { ...bill, [e.target.name]: e.target.value };
        }
        return bill;
      })
    ))
  }

  const handleChangeConfirmRemoveBill = (e, index) => {
    const newConfirmRemoveBill = [...confirmRemoveBill]
    newConfirmRemoveBill[index] = e.target.checked

    setConfirmRemoveBill(newConfirmRemoveBill)
  }

  const removeConfirmedBillsToList = (index) => {
    const newConfirmRemoveBill = [...confirmRemoveBill]
    newConfirmRemoveBill.splice(index, 1)

    setConfirmRemoveBill(newConfirmRemoveBill)
  }

  const cancelRemoveBill = (index) => {
    const newConfirmRemoveBill = [...confirmRemoveBill]
    newConfirmRemoveBill[index] = false

    setConfirmRemoveBill(newConfirmRemoveBill)
  }

  const removeBillFromList = (index) => {
    const newBills = [...parcelas]

    if (parcelas.length > 1) {
      newBills.splice(index, 1)

      removeConfirmedBillsToList(index)
      return dispatch(SAVE_BILL(newBills))
    }

    dispatch(SAVE_BILL([INITIAL_STATE_PARCELA]))
  }



  return { handleSaveSaleAndSaleBills, addBillToList, confirmRemoveBill, removeBillFromList, handleChangeConfirmRemoveBill, cancelRemoveBill, handleChangeBill }
}