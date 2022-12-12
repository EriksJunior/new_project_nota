import { useState } from "react";
import { MenuContext } from "../context/MenuContext";

export const MenuProvider = ({ children }) => {
  const [categoryId, setCategoryId] = useState('')
  const [productId, setProductId] = useState('')
  const [categoryAdditionalId, setCategoryAdditionalId] = useState('')

  return (
    <MenuContext.Provider value={{
      categoryId,
      setCategoryId,
      productId,
      setProductId,
      categoryAdditionalId, 
      setCategoryAdditionalId
    }}>
      {children}
    </MenuContext.Provider>
  )
}