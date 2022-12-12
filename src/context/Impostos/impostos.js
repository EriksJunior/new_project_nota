import { createContext } from "react";
import { UseImpostos } from "../../hooks/useImpostos";


const ImpostosContext = createContext({})

function ImpostosProvider({ children }) {
  const { impostos , setImpostos, icms , setIcms , ipi , setIpi , pis , setPis , cofins , setCofins , issqn , setIssqn , handleChange , handleChangeIcms , handleChangeIpi , handleChangePis , handleChangeCofins , handleChangeIssqn , handleSaveOrUpdate , findAll , clearInputs } = UseImpostos()

  return (
    <ImpostosContext.Provider value={{ impostos , setImpostos , icms , setIcms , ipi , setIpi , pis , setPis , cofins , setCofins , issqn , setIssqn , handleChange , handleChangeIcms , handleChangeIpi , handleChangePis , handleChangeCofins , handleChangeIssqn , handleSaveOrUpdate , findAll , clearInputs }}>
      {children}
    </ImpostosContext.Provider>
  )
}

export { ImpostosProvider , ImpostosContext }