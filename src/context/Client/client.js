import { createContext } from "react";
import { UseCliente } from "../../hooks/useCliente";

const ClientContext = createContext({})

function ClientProvider({ children }) {
  const { handleChange, enableTab, activeTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteClient, client, handleChangeSearchClient, alterValueTab } = UseCliente()

  return (
    <ClientContext.Provider value={{ handleChange, enableTab, activeTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteClient, client, handleChangeSearchClient, alterValueTab }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }