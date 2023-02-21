import { useDispatch, useSelector } from "react-redux";

import BillService from "../../../services/BillService";

export function UseBill() {
  const bill = useSelector(state => state.leaf.parcela)

  const save = async () => {
    const id = await BillService.save(bill)
    console.log(id)
  }

  return { save }
}