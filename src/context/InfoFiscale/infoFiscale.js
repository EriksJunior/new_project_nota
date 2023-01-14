import { createContext } from "react";
import { UseInfoFiscale } from "../../hooks/useInfoFiscale";

const InfoFiscaleContext = createContext({})

function InfoFiscaleProvider({ children }) {
  const { enable, setEnable, handleComponentDisplay } = UseInfoFiscale()

  return (
    <InfoFiscaleContext.Provider value={{ enable, setEnable, handleComponentDisplay }}>
      {children}
    </InfoFiscaleContext.Provider>
  )
}

export { InfoFiscaleProvider, InfoFiscaleContext }