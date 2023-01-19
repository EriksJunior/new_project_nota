import { createContext } from "react";
import { UseInfoFiscale } from "../../hooks/useInfoFiscale";

const InfoFiscaleContext = createContext({})

function InfoFiscaleProvider({ children }) {
  const { enable, setEnable, infoFiscale, setInfoFiscale } = UseInfoFiscale()

  return (
    <InfoFiscaleContext.Provider value={{ enable, setEnable,  infoFiscale, setInfoFiscale }}>
      {children}
    </InfoFiscaleContext.Provider>
  )
}

export { InfoFiscaleProvider, InfoFiscaleContext }