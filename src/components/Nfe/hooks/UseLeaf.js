import { useDispatch, useSelector } from "react-redux";
import { SAVE_LEAF } from "../store/reducers/LeafReducers";

import { UseProduct } from "./UseProduct";

import LeafService from "../../../services/LeafService";

export function UseLeaf() {
  const { saveLeafProducts } = UseProduct()

  const dispatch = useDispatch()
  const pedido = useSelector(state => state.leaf.pedido)
  const produtos = useSelector(state => state.leaf.produto)
  const cliente = useSelector(state => state.leaf.cliente)

  const handleChangePedido = (e) => {
    dispatch(SAVE_LEAF({ ...pedido, [e.currentTarget.name]: e.currentTarget.value }))
  }

  const saveLeaf = async (pedido) => {
    console.log({...pedido, idCliente: cliente.id})
    // const result = await LeafService.save(pedido)
    // console.log(result)
  }

  const handleSave = async () => {
    await saveLeaf(pedido)
    await saveLeafProducts(produtos)
  }

  return { handleChangePedido, handleSave }
}