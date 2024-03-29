import { useState, useCallback, useEffect } from 'react';

import { INITIAL_STATE_CLIENTE, INITIAL_STATE_SEARCH } from '../initalStates';
import CustomerService from '../../../services/CustomerService'

import { toast } from "react-toastify";

export function UseCliente() {
  const [client, setClient] = useState(INITIAL_STATE_CLIENTE);
  const [search, setSearch] = useState(INITIAL_STATE_SEARCH)
  const [returnedClient, setReturnedClient] = useState([])
  const [openLayouts, setOpenLayouts] = useState(false)
  const [openAreaCustomer, setOpenAreaCustomer] = useState(false)

  useEffect(() => {
    searchClient()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  const handleChange = useCallback((e) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }, [client]);

  const handleChangeSearchClient = useCallback((e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }, [search])

  const save = async () => {
    try {
      const result = await CustomerService.save(client)
      setClient({ ...client, id: result.id })

      await searchClient()
      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const update = async () => {
    try {
      await CustomerService.update(client)

      await searchClient()
      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteCustomer = async (id) => {
    try {
      await CustomerService.delete(id)
      await searchClient()
      setOpenAreaCustomer(false)

      toast("Registro deletado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findById = async (id) => {
    try {
      const result = await CustomerService.findById(id)
      setClient(result)
    } catch (error) {
      return toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchClient = async () => {
    try {
      const result = await CustomerService.search(search.text, search.page)
      setReturnedClient(result.data)
    } catch (error) {
      return toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveOrUpdate = async () => {
    client?.id === "" ? save() : update()
  }

  const clearAllInputs = () => {
    setClient(INITIAL_STATE_CLIENTE)
  }

  const handleEditCustomer = async () => {
    setOpenLayouts(true)
    await findById(client.id)
  }

  const handleOpenAreaCustomer = async (id) => {
    setOpenAreaCustomer(true)
    await findById(id)
  }

  const switchBetweenComponents = () => {
    setOpenAreaCustomer(false)
    setOpenLayouts(false)
    clearAllInputs()
  }

  const handleNewCustomer = () => {
    setOpenLayouts(true)
    clearAllInputs()
  }


  return { search, setSearch, searchClient, findById, returnedClient, clearAllInputs, handleChange, handleChangeSearchClient, handleSaveOrUpdate, deleteCustomer, client, openAreaCustomer, handleOpenAreaCustomer, openLayouts, switchBetweenComponents, handleNewCustomer, handleEditCustomer }
}