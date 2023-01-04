import { createContext } from "react";
import { UseCliente } from "../../hooks/useCliente";

const ClientContext = createContext({})

function ClientProvider({ children }) {
  const { handleChange, enableTab, activeButtonTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteClient, client, handleChangeSearchClient, openAreaCustomer, handleOpenAreaCustomer } = UseCliente()

  return (
    <ClientContext.Provider value={{ handleChange, enableTab, activeButtonTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteClient, client, handleChangeSearchClient, openAreaCustomer, handleOpenAreaCustomer }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }