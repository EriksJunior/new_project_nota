import { createContext } from "react";
import { UseInfoFiscale } from "../../hooks/useInfoFiscale";

const InfoFiscaleContext = createContext({})

function InfoFiscaleProvider({ children }) {
  const { handleComponentDisplay, enable, setEnable, infoFiscale, setInfoFiscale, additionalData, handleChangeAdditionalData, icms, setIcms, handleChangeIcms, aliquotaMva, handleChangeAliquotaMva, ipi, handleChangeIpi, pis, handleChangePis, cofins, handleChangeCofins, issqn, handleChangeIssqn, handleSaveOrUpdate, objectIcms, enableIssqn, setEnableIssqn, refs } = UseInfoFiscale()

  return (
    <InfoFiscaleContext.Provider value={{ handleComponentDisplay, enable, setEnable, infoFiscale, setInfoFiscale, additionalData, handleChangeAdditionalData, icms, setIcms, handleChangeIcms, aliquotaMva, handleChangeAliquotaMva, ipi, handleChangeIpi, pis, handleChangePis, cofins, handleChangeCofins, issqn, handleChangeIssqn, handleSaveOrUpdate, objectIcms, enableIssqn, setEnableIssqn, refs }}>
      {children}
    </InfoFiscaleContext.Provider>
  )
}

export { InfoFiscaleProvider, InfoFiscaleContext }