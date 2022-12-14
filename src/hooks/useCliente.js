import { useState, useCallback } from 'react';

import { INITIAL_STATE_CLIENTE, INITIAL_STATE_SEARCH } from '../initialStates/client';
import ClienteService from '../services/ClienteService'

import { toast } from "react-toastify";

export function UseCliente() {
  const [client, setClient] = useState(INITIAL_STATE_CLIENTE);
  const [search, setSearch] = useState(INITIAL_STATE_SEARCH)
  const [returnedClient, setReturnedClient] = useState([])
  const [alterTab, setAlterTab] = useState("pesquisar")

  const handleChange = useCallback((e) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }, [client]);

  const handleChangeSearchClient = useCallback((e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }, [search])

  const save = async () => {
    try {
      const result = await ClienteService.save(client)
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
      await ClienteService.update(client)

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
      await ClienteService.delete(id)
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
      const result = await ClienteService.findById(id)
      setClient(result)
      setAlterTab('cadastro')
    } catch (error) {
      return toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchClient = async () => {
    try {
      const result = await ClienteService.search(search.text, search.page)
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

  return { search, setSearch, alterTab, setAlterTab, searchClient, findById, returnedClient, clearAllInputs, handleChange, handleChangeSearchClient, handleSaveOrUpdate, deleteClient, client }
}