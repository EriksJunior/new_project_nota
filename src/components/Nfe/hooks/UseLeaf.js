import { useState, useCallback } from "react"
// import { UseCustomer } from "./UseCustomer";
import { UseProduct } from "./UseProduct"

import { INITIAL_VALUE_PEDIDO } from "../initialStates";

export function UseLeaf() {
  const { saveLeafProducts } = UseProduct()
  const [pedido, setPedido] = useState(INITIAL_VALUE_PEDIDO)

  const handleChangePedido = useCallback((e) => {
    setPedido({ ...pedido, [e.currentTarget.name]: e.currentTarget.value })
  }, [pedido])

  const handleSave = async () => {
    // await saveLeaf()
    // await saveLeafProducts()
  }

  const saveLeaf = async () => {
    //chamar serviço para salvar pedido
  }

  return { pedido, handleChangePedido }
}