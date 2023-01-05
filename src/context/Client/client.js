import { createContext } from "react";
import { UseCliente } from "../../hooks/useCliente";

const ClientContext = createContext({})

function ClientProvider({ children }) {
  const { handleChange, enableTab, activeButtonTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteCustomer, client, handleChangeSearchClient, openAreaCustomer, handleOpenAreaCustomer,  openLayouts, handleOpenLayouts, handleNewCustomer } = UseCliente()

  return (
    <ClientContext.Provider value={{ handleChange, enableTab, activeButtonTab, clearAllInputs, findById, handleSaveOrUpdate, returnedClient, search, searchClient, setSearch, deleteCustomer, client, handleChangeSearchClient, openAreaCustomer, handleOpenAreaCustomer, openLayouts, handleOpenLayouts, handleNewCustomer }}>
      {children}
    </ClientContext.Provider>
  )
}


export { ClientProvider, ClientContext }