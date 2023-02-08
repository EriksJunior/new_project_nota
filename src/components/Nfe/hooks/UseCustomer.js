import { useState, useCallback } from "react"

import { INITIAL_STATE_CLIENTE_NFE } from "../initialStates"
import CustomerService from "../../../services/CustomerService"

export function UseCustomer() {
  const [customer, setCustomer] = useState(INITIAL_STATE_CLIENTE_NFE)
  const [customersFromSelectBox, setCustomersFromSelectBox] = useState([])

  const handleChangeIdCustomer = useCallback((e) => {
    setCustomer({ ...customer, id: e.currentTarget.value })
  }, [customer])

  const handleChangeCustomerAndList = async (e) => {
    handleChangeIdCustomer(e)

    const idCustomer = e.currentTarget.value
    await findCustomerById(idCustomer)
  }

  const getCustomersFromSelectBox = async () => {
    const customers = await CustomerService.getFromSelectBox()
    setCustomersFromSelectBox(customers)
  }

  const findCustomerById = async (id) => {
    console.log(id)
    const customer = await CustomerService.findById(id)
    console.log(customer, 'lkfdsjlkjdsfkdsjfl')
  }

  return { getCustomersFromSelectBox, customersFromSelectBox, findCustomerById, customer, handleChangeCustomerAndList }
}