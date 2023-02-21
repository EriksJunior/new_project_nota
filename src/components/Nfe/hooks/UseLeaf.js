import { useDispatch, useSelector } from "react-redux";
import { SAVE_LEAF } from "../store/reducers/LeafReducers";

import LeafService from "../../../services/LeafService";
import { validadeLeaf } from "../validate";

import { toast } from "react-toastify";


export function UseLeaf() {
  const dispatch = useDispatch()
  const pedido = useSelector(state => state.leaf.pedido)
  const cliente = useSelector(state => state.leaf.cliente)

  const handleChangePedido = (e) => {
    dispatch(SAVE_LEAF({ ...pedido, [e.currentTarget.name]: e.currentTarget.value }))
  }

  const saveLeaf = async (pedido) => {
    try {
      validadeLeaf(pedido)
      
      const id = await LeafService.save(pedido)
      dispatch(SAVE_LEAF({ ...pedido, id: id }))

      toast("Documento fiscal salvo! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });

      return id
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const updateLeaf = async (pedido) => {
    try {
      validadeLeaf(pedido)

      await LeafService.update(pedido)

      return toast("Documento fiscal atualizado! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveLeaf = async (pedido) => {
    if (!pedido.id) {
      const id = await saveLeaf({ ...pedido, idCliente: cliente.id })
      return id
    } else {
      await updateLeaf(pedido)
    }
  }


  return { handleChangePedido, handleSaveLeaf }
}