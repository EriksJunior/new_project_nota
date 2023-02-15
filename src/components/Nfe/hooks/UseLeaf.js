import { useDispatch, useSelector } from "react-redux";
import { SAVE_LEAF } from "../store/reducers/LeafReducers";

import { UseProduct } from "./UseProduct";

import LeafService from "../../../services/LeafService";

import { toast } from "react-toastify";


export function UseLeaf() {
  const { saveLeafProducts } = UseProduct()
  const dispatch = useDispatch()
  const pedido = useSelector(state => state.leaf.pedido)
  const cliente = useSelector(state => state.leaf.cliente)
  const produtos = useSelector(state => state.leaf.produto)

  const handleChangePedido = (e) => {
    dispatch(SAVE_LEAF({ ...pedido, [e.currentTarget.name]: e.currentTarget.value }))
  }

  const saveLeaf = async (pedido) => {
    try {
      const id = await LeafService.save(pedido)
      dispatch(SAVE_LEAF({ ...pedido, id: id }))
    } catch (error) {
      toast.error(error.response.data, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const updateLeaf = async (pedido) => {
    await LeafService.update(pedido)
  }

  const handleSave = async () => {
    if (!pedido.id) {
      await saveLeaf({ ...pedido, idCliente: cliente.id })
      await saveLeafProducts(produtos)
    } else {
      await updateLeaf(pedido)
    }
  }

  return { handleChangePedido, handleSave }
}