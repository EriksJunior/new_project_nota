import { useState, useEffect } from "react";
import { UseLeaf } from "./UseLeaf";

import { useDispatch, useSelector } from "react-redux";
import { SAVE_BILL } from "../store/reducers/LeafReducers";

import { toast } from "react-toastify";

import BillService from "../../../services/BillService";
import { validateLeafBill } from "../validate";
import { INITIAL_STATE_PARCELA_NFE } from "../initialStates";

export function UseBill() {
  const { handleSaveLeaf } = UseLeaf()
  const [confirmRemoveBill, setConfirmRemoveBill] = useState([false])

  const parcelas = useSelector(state => state.leaf.parcela)
  const cliente = useSelector(state => state.leaf.cliente)
  const pedido = useSelector(state => state.leaf.pedido)

  const dispatch = useDispatch()

  useEffect(() => {
    const newConfirmRemoveBill = parcelas.map(() => {
      return false
    })

    setConfirmRemoveBill([...confirmRemoveBill, ...newConfirmRemoveBill])
  }, [parcelas])  // eslint-disable-line react-hooks/exhaustive-deps

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


  const handleSaveLeafAndLeafBills = async () => {
    if (pedido.id) {
      return await saveLeafBill(pedido.id)
    }

    const idNota = await handleSaveLeaf(pedido)
    if (idNota) await saveLeafBill(idNota)
  }

  const handleWithBillsBeforeSave = (bills, idLeaf) => {
    const newBills = bills.map((bill) => {
      return {
        ...bill,
        idCliente: cliente.id,
        idNota: idLeaf
      }
    })

    const billsFilled = newBills.filter(bill => !bill.data || !bill.valorTotal)

    if (billsFilled.length) {
      const result = billsFilled.map((bill) => {
        return validateLeafBill(bill)
      })

      toast.warning(result[0], {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    return newBills
  }

  const addBillToList = async () => {
    dispatch(SAVE_BILL([...parcelas, INITIAL_STATE_PARCELA_NFE]))

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

    dispatch(SAVE_BILL([INITIAL_STATE_PARCELA_NFE]))
  }



  return { handleSaveLeafAndLeafBills, addBillToList, confirmRemoveBill, setConfirmRemoveBill, removeBillFromList, handleChangeConfirmRemoveBill, cancelRemoveBill, handleChangeBill }
}