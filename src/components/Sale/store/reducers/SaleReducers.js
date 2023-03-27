import { INITIAL_VALUE_PEDIDO, INITIAL_STATE_CLIENTE, INITIAL_VALUE_PRODUTOS,  INITIAL_STATE_PARCELA } from "../../initialStates"
import { INITIAL_STATE_TYPE_PAYMENT } from "../../../TypePayment/initalStates";
import { createSlice } from "@reduxjs/toolkit";

export const SaleReducer = createSlice({
  name: "sale",
  initialState: {
    pedido: INITIAL_VALUE_PEDIDO,
    cliente: INITIAL_STATE_CLIENTE,
    produto: [INITIAL_VALUE_PRODUTOS],
    parcela: [INITIAL_STATE_PARCELA],
    tiposDePagementos: [INITIAL_STATE_TYPE_PAYMENT]
  },
  reducers: {
    SAVE_CUSTOMER: (state, action) => {
      state.cliente = action.payload
    },
    SAVE_SALE: (state, action) => {
      state.pedido = action.payload
    },
    SAVE_PRODUCTS: (state, action) => {
      state.produto = action.payload
    },
    SAVE_BILL: (state, action) => {
      state.parcela = action.payload
    },
    SAVE_ALL_TYPES_PAYMENTS: (state, action) => {
      state.tiposDePagementos = action.payload
    }
  }
})

export const { SAVE_CUSTOMER, SAVE_SALE, SAVE_PRODUCTS, SAVE_BILL, SAVE_ALL_TYPES_PAYMENTS } = SaleReducer.actions

export default SaleReducer.reducer