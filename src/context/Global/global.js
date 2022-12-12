import { createContext } from "react";
import { useGlobal } from "../../hooks/useGlobal";

const GlobalContext = createContext({})

function GlobalProvider({ children }) {
  const { client, setClient, getClientesFromSelectBox, clientSelectBox, produtos, setProdutos, getProductsFromSelectBox, produtoSelectBox, loading, setLoading } = useGlobal()

  return (
    <GlobalContext.Provider value={{client, setClient, getClientesFromSelectBox, clientSelectBox, produtos, setProdutos, getProductsFromSelectBox, produtoSelectBox, loading, setLoading}}>
      {children}
    </GlobalContext.Provider>
  )
} 

export {GlobalProvider, GlobalContext}