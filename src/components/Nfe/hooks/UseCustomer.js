import { useState, useCallback } from "react"

import { INITIAL_STATE_CLIENTE_NFE } from "../initialStates"
import CustomerService from "../../../services/CustomerService"

import { toast } from "react-toastify";

export function UseCustomer() {
  const [customer, setCustomer] = useState(INITIAL_STATE_CLIENTE_NFE)
  const [customersFromSelectBox, setCustomersFromSelectBox] = useState([])

  const handleChangeIdCustomer = useCallback((e) => {
    setCustomer({ ...customer, id: e.currentTarget.value })
  }, [customer])

  const handleChangeCustomer = useCallback((e) => {
    setCustomer({ ...customer, [e.currentTarget.name]: e.currentTarget.value })
  }, [customer])

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
    const customer = await CustomerService.findById(id)
    const stringConsumidorFinal = String(customer.consumidor_final)

    setCustomer({ ...customer, consumidor_final: stringConsumidorFinal })
  }

  return { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, customer, handleChangeIdCustomerAndList, handleChangeCustomer, updateCustomer }
}