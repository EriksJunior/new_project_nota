import { createContext } from "react";
import { UseCliente } from "../../hooks/useCliente";

const ClientContext = createContext({})

function ClientProvider({ children }) {
  const { handleChange, alterTab, setAlterTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteClient, client, handleChangeSearchClient } = UseCliente()

  return (
    <ClientContext.Provider value={{ handleChange, alterTab, setAlterTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteClient, client, handleChangeSearchClient }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }