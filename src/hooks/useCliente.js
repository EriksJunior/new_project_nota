import { useState, useCallback } from 'react';

import { INITIAL_STATE_CLIENTE, INITIAL_STATE_SEARCH } from '../initialStates/client';
import CustomerService from '../services/CustomerService'

import { toast } from "react-toastify";

export function UseCliente() {
  const [client, setClient] = useState(INITIAL_STATE_CLIENTE);
  const [search, setSearch] = useState(INITIAL_STATE_SEARCH)
  const [returnedClient, setReturnedClient] = useState([])

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

      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteClient = async (id) => {
    try {
      await CustomerService.delete(id)
      await searchClient()
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
      alterTab()
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

  const alterTab = () => {
    document.getElementById("pills-home-tab").click()
  }

  return { search, setSearch, searchClient, findById, returnedClient, clearAllInputs, handleChange, handleChangeSearchClient, handleSaveOrUpdate, deleteClient, client }
}