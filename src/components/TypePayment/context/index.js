import { createContext } from "react";
import { UseTypePayment } from "../hook";

const TypePaymentContext = createContext({})

function TypePaymentProvider({ children }) {
  const { openLayouts, handleOpenLayouts, confirmRemoveTypePayment, handleChangeConfirmRemoveTypePayment, cancelRemoveTypePayment, removeTypePaymentFromList, typesPayments  } = UseTypePayment()

  return (
    <TypePaymentContext.Provider value={{ openLayouts, handleOpenLayouts, confirmRemoveTypePayment, handleChangeConfirmRemoveTypePayment, cancelRemoveTypePayment, removeTypePaymentFromList, typesPayments  }}>
      {children}
    </TypePaymentContext.Provider>
  )
}

export { TypePaymentProvider, TypePaymentContext }