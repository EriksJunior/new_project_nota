import { useDispatch, useSelector } from "react-redux";
import { SAVE_LEAF } from "../store/reducers/LeafReducers";

import LeafService from "../../../services/LeafService";
import { validadeLeaf } from "../validate";
import { Masks } from "../../../utils/masks/Masks";

import { toast } from "react-toastify";


export function UseLeaf() {
  const dispatch = useDispatch()
  const pedido = useSelector(state => state.leaf.pedido)
  const cliente = useSelector(state => state.leaf.cliente)
  const { maskCurrency } = Masks()

  const handleChangePedido = (e) => {
    dispatch(SAVE_LEAF({ ...pedido, [e.target.name]: e.target.value }))
  }

  const handleChangeFreightAndOthers = (e) => {
    dispatch(SAVE_LEAF({ ...pedido, [e.target.name]: maskCurrency(e.target.value) }))
  };

  const saveLeaf = async (dataPedido) => {
    try {
      validadeLeaf(dataPedido)

      const formattedMonetaryValuesLeaf = convertMonetaryValuesToFloat(dataPedido)

      const id = await LeafService.save(formattedMonetaryValuesLeaf)
      dispatch(SAVE_LEAF({ ...dataPedido, id: id }))

      toast("Documento fiscal salvo! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });

      return id
    } catch (error) {
      toast.warning(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const updateLeaf = async (dataPedido) => {
    try {
      validadeLeaf(dataPedido)

      await LeafService.update(dataPedido)

      return toast("Documento fiscal atualizado! ✅", {
        position: toast.POSITION.TOP_RIGHT
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  const handleSaveLeaf = async () => {
    if (!pedido.id) {
      const id = await saveLeaf({ ...pedido, idCliente: cliente.id })
      return id
    } else {
      await updateLeaf({ ...pedido, idCliente: cliente.id })
    }
  }

  const convertMonetaryValuesToFloat = (leaf) => {
    const formattedFrete = leaf.frete.replace(".", "").replace(".", "").replace(",", ".")
    const formattedDespesasAcessorias = leaf.frete.replace(".", "").replace(".", "").replace(",", ".")
    const formattedTotal = leaf.total.replace(".", "").replace(".", "").replace(",", ".")

    return { ...leaf, frete: formattedFrete, despesas_acessorias: formattedDespesasAcessorias, total: formattedTotal }
  }

  const calculateTotalLeafBasedProducts = (dataPedido, dataProducts) => {
    const formattedSubtotal = dataProducts.map((prod) => {
      const subtotal = prod.subtotal.replace(".", "").replace(",", ".").replace(",", ".")
      const desconto = prod.desconto.replace(".", "").replace(",", ".").replace(",", ".")
      const quantidade = prod.quantidade

      return (parseFloat(subtotal) * quantidade) - desconto
    })

    const totalValuesProducts = formattedSubtotal.reduce((oldValue, value) => parseFloat(oldValue) + parseFloat(value))
    const totalMonetary = totalValuesProducts.toLocaleString("pt-BR", { minimumFractionDigits: 2 })

    dispatch(SAVE_LEAF({ ...dataPedido, total: totalMonetary }))
  }


  return { handleChangePedido, handleSaveLeaf, handleChangeFreightAndOthers, calculateTotalLeafBasedProducts }
}