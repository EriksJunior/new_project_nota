import { createContext } from "react";
import { UseInfoFiscale } from "../../hooks/useInfoFiscale";

const InfoFiscaleContext = createContext({})

function InfoFiscaleProvider({ children }) {
  const { handleComponentDisplay, enable, setEnable, infoFiscale, setInfoFiscale, icms, setIcms, handleChangeIcms, aliquotaMva, handleChangeAliquotaMva, teste } = UseInfoFiscale()

  return (
    <InfoFiscaleContext.Provider value={{ handleComponentDisplay, enable, setEnable, infoFiscale, setInfoFiscale, icms, setIcms, handleChangeIcms, aliquotaMva, handleChangeAliquotaMva, teste }}>
      {children}
    </InfoFiscaleContext.Provider>
  )
}

export { InfoFiscaleProvider, InfoFiscaleContext }