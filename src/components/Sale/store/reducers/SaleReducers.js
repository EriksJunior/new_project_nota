import { INITIAL_VALUE_PEDIDO, INITIAL_STATE_CLIENTE_NFE, INITIAL_VALUE_PRODUTOS, INITIAL_STATE_FATURA_NFE, INITIAL_STATE_PARCELA_NFE } from "../../initialStates"
import { INITIAL_STATE_TYPE_PAYMENT } from "../../../TypePayment/initalStates";
import { createSlice } from "@reduxjs/toolkit";

export const SaleReducer = createSlice({
  name: "nfe",
  initialState: {
    pedido: INITIAL_VALUE_PEDIDO,
    cliente: INITIAL_STATE_CLIENTE_NFE,
    produto: [INITIAL_VALUE_PRODUTOS],
    fatura: INITIAL_STATE_FATURA_NFE,
    parcela: [INITIAL_STATE_PARCELA_NFE],
    tiposDePagementos: [INITIAL_STATE_TYPE_PAYMENT]
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
    SAVE_BILL: (state, action) => {
      state.parcela = action.payload
    },
    SAVE_ALL_TYPES_PAYMENTS: (state, action) => {
      state.tiposDePagementos = action.payload
    }
  }
})

export const { SAVE_CUSTOMER, SAVE_LEAF, SAVE_PRODUCTS, SAVE_BILL, SAVE_ALL_TYPES_PAYMENTS } = SaleReducer.actions

export default SaleReducer.reducer