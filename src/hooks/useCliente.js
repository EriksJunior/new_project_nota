import { useState, useCallback, useContext } from 'react';

import { INITIAL_STATE_CLIENTE, INITIAL_STATE_SEARCH } from '../initialStates/client';
import ClienteService from '../../services/ClienteService'
import { ICliente, ISearch } from '../../interface/ICliente';

import { toast } from "react-toastify";
import { GlobalContext } from '../context/global/global';

export function UseCliente() {
  const { client, setClient, getClientesFromSelectBox } = useContext(GlobalContext) as { client: ICliente, setClient: (value: ICliente) => void, getClientesFromSelectBox: () => void }

  const [show, setShow] = useState(false);
  const [search, setSearch] = useState<ISearch>(INITIAL_STATE_SEARCH)
  const [returnedClient, setReturnedClient] = useState<ICliente[]>()
  const [alterTab, setAlterTab] = useState<string>("pesquisar")

  const handleClose = () => {
    clearAllInputs()
    setShow(false)
    setAlterTab("pesquisar")
  };

  const handleShow = () => {
    clearAllInputs()
    setShow(true)
    setAlterTab("pesquisar")
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    setClient({ ...client, [e.target.name]: e.target.value })
  }, [client]);

  const save = async () => {
    try {
      const result = await ClienteService.save(client as ICliente)
      setClient({ ...client, id: result.id })

      toast("Salvo com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const update = async () => {
    try {
      await ClienteService.update(client as ICliente)

      toast("Atualizado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const deleteClient = async (id: string | undefined) => {
    try {
      await ClienteService.delete(id)
      await searchClient()
      getClientesFromSelectBox()
      toast("Registro deletado com sucesso! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error: any) {
      toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const findById = async (id: string | undefined) => {
    try {
      const result = await ClienteService.findById(id)
      setClient(result)
      setAlterTab('cadastro')
    } catch (error: any) {
      return toast.error(error?.response?.data?.erros, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const searchClient = async () => {
    try {
      const result = await ClienteService.search(search.text, search.page)
      setReturnedClient(result.data)
    } catch (error: any) {
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

  return { search, setSearch, alterTab, setAlterTab, searchClient, findById, returnedClient, clearAllInputs, handleShow, handleClose, handleChange, handleSaveOrUpdate, show, deleteClient }
}