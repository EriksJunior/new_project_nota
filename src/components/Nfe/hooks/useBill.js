import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SAVE_BILL } from "../store/reducers/LeafReducers";

import BillService from "../../../services/BillService";
import { INITIAL_STATE_PARCELA_NFE } from "../initialStates";

export function UseBill() {
  const [confirmRemoveBill, setConfirmRemoveBill] = useState([false])
  const bills = useSelector(state => state.leaf.parcela)
  const dispatch = useDispatch()

  const saveLeafBill = async () => {
    const id = await BillService.save(bills)
    console.log(id)
  }

  const addBillToList = async () => {
    dispatch(SAVE_BILL([...bills, INITIAL_STATE_PARCELA_NFE]))
    setConfirmRemoveBill([...confirmRemoveBill, false])
  }

  const handleChangeBill = (e, index) => {
    dispatch(SAVE_BILL(
      bills.map((bill, i) => {
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
    const newBills = [...bills]

    if (bills.length > 1) {
      newBills.splice(index, 1)
      console.log(newBills)

      // removeConfirmedBillsToList(index)
      return dispatch(SAVE_BILL(newBills))
    }

    dispatch(SAVE_BILL([INITIAL_STATE_PARCELA_NFE]))
  }



  return { saveLeafBill, addBillToList, confirmRemoveBill, removeBillFromList, handleChangeConfirmRemoveBill, cancelRemoveBill, handleChangeBill }
}