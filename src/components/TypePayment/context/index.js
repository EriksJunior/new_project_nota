import { createContext } from "react";
import { UseTypePayment } from "../hook";

const TypePaymentContext = createContext({})

function TypePaymentProvider({ children }) {
  const { handleOpenLayouts, openLayouts } = UseTypePayment()

  return (
    <TypePaymentContext.Provider value={{ handleOpenLayouts, openLayouts }}>
      {children}
    </TypePaymentContext.Provider>
  )
}

export { TypePaymentProvider, TypePaymentContext }