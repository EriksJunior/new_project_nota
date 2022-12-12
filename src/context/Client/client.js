import { createContext } from "react";
import { UseCliente } from "../../hooks/useCliente";

const ClientContext = createContext({})

function ClientProvider({ children }) {
  const { handleChange, alterTab, setAlterTab, clearAllInputs, findById, handleSaveOrUpdate, handleClose, handleShow, returnedClient, search, searchClient, setSearch, show, deleteClient } = UseCliente()

  return (
    <ClientContext.Provider value={{ handleChange, alterTab, setAlterTab, clearAllInputs, findById, handleSaveOrUpdate, handleClose, handleShow, returnedClient, search, searchClient, setSearch, show, deleteClient }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }