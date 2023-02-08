import { useState, useCallback } from "react"

import { INITIAL_STATE_CLIENTE_NFE } from "../initialStates"
import CustomerService from "../../../services/CustomerService"

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

  const getCustomersFromSelectBox = async () => {
    const customers = await CustomerService.getFromSelectBox()
    setCustomersFromSelectBox(customers)
  }

  const findCustomerById = async (id) => {
    const customer = await CustomerService.findById(id)
    setCustomer(customer)
  }

  return { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, customer, handleChangeIdCustomerAndList, handleChangeCustomer }
}