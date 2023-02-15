import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { SAVE_CUSTOMER, SAVE_LEAF } from "../store/reducers/LeafReducers"
import { INITIAL_STATE_CLIENTE_NFE } from "../initialStates";

import CustomerService from "../../../services/CustomerService"

import { toast } from "react-toastify";

export function UseCustomer() {
  const [customersFromSelectBox, setCustomersFromSelectBox] = useState([])

  const dispatch = useDispatch()
  const customer = useSelector(state => state.leaf.cliente)

  const handleChangeIdCustomer = (e) => {
    if (!e.currentTarget.value) {
      dispatch(SAVE_CUSTOMER({ ...customer }))
    }

    dispatch(SAVE_CUSTOMER({ ...customer, id: e.currentTarget.value }))
  }
 
  const handleChangeCustomer = (e) => {
    dispatch(SAVE_CUSTOMER({ ...customer, [e.currentTarget.name]: e.currentTarget.value }))
  }

  const handleChangeIdCustomerAndList = async (e) => {
    handleChangeIdCustomer(e)

    const idCustomer = e.currentTarget.value
    await findCustomerById(idCustomer)
  }

  const updateCustomer = async () => {
    try {
      if (!customer.id) {
        return toast.warning("Selecione um cliente!", {
          position: toast.POSITION.TOP_RIGHT
        });
      }

      await CustomerService.update(customer)
      toast("Dados atualizados! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error("Ocorreu um erro ao atualizar o cliente!", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const getCustomersFromSelectBox = async () => {
    const customers = await CustomerService.getFromSelectBox()
    setCustomersFromSelectBox(customers)
  }

  const findCustomerById = async (id) => {
    if (!id) {
      return dispatch(SAVE_CUSTOMER(INITIAL_STATE_CLIENTE_NFE))
    }

    const newCustomer = await CustomerService.findById(id)
    const stringConsumidorFinal = String(customer.consumidor_final)

    dispatch(SAVE_CUSTOMER({ ...newCustomer, consumidor_final: stringConsumidorFinal }))
  }

  return { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, customer, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer }
}