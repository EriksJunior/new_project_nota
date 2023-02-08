import { createContext } from "react";
import { useGlobal } from "../../hooks/useGlobal";

const GlobalContext = createContext({})

function GlobalProvider({ children }) {
  const { loading, setLoading } = useGlobal()

  return (
    <GlobalContext.Provider value={{ loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, GlobalContext }