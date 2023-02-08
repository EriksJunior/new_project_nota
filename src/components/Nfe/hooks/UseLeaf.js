import { useState, useCallback } from "react"
// import { UseCustomer } from "./UseCustomer";
// import { UseProduct } from "./UseProduct"

import { INITIAL_VALUE_PEDIDO } from "../initialStates";

export function UseLeaf() {
  const [pedido, setPedido] = useState(INITIAL_VALUE_PEDIDO)

  const handleChangePedido = useCallback((e) => {
    setPedido({ ...pedido, [e.currentTarget.name]: e.currentTarget.value })
  }, [pedido])

  return { pedido, handleChangePedido }
}