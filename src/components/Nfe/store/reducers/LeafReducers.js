import { INITIAL_VALUE_PEDIDO, INITIAL_STATE_CLIENTE_NFE, INITIAL_VALUE_PRODUTOS } from "../../initialStates"
import { createSlice } from "@reduxjs/toolkit";

export const LeafReducer = createSlice({
  name: "nfe",
  initialState: {
    pedido: INITIAL_VALUE_PEDIDO,
    cliente: INITIAL_STATE_CLIENTE_NFE,
    produto: [INITIAL_VALUE_PRODUTOS]
  },
  reducers: {
    SAVE_CUSTOMER: (state, action) => {
      state.cliente = action.payload
    },
    SAVE_LEAF: (state, action) => {
      state.pedido = action.payload
    },
    SAVE_PRODUCTS: (state, action) => {
      state.produto = action.payload
    },
  }
})

export const { SAVE_CUSTOMER, SAVE_LEAF, SAVE_PRODUCTS } = LeafReducer.actions

export default LeafReducer.reducer