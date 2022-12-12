import { api } from "../utils/configs/api";
import { PedidoLeaf, ProdutosLeaf, ICancelLeaf } from "../interface/ILeaf";
class LeafService {
  async save(nota: PedidoLeaf) {
    const { data } = await api.post('/nota', nota)
    return data
  }

  async update(nota: PedidoLeaf) {
    await api.put(`/nota/${nota.id}`, nota)
  }

  async sendLeaf(id: string) {
    const { data } = await api.get(`/nota/send/${id}`)
    return data
  }

  async findLeafById(id: string) {
    const { data } = await api.get(`/nota/${id}`)
    return data
  }

  async searchLeaf(text: string, filter: string, page: string, startDate: string, endDate: string) {
    const { data } = await api.get(`/nota/?q=${text}&type=${filter}&page=${page}&startDate=${startDate}&endDate=${endDate}`)
    return data
  }

  async cancelLeaf(dataCancelamento: ICancelLeaf, idNota: string) {
    const { data } = await api.put(`/nota/cancel/nota/${idNota}`, dataCancelamento)
    return data
  }

  async deleteLeafAndProducts(id: string) {
    await api.delete(`/nota-item/delete-all/${id}`)
  }

  async addProduct(product: ProdutosLeaf) {
    await api.post('/nota-item', product)
  }

  async findLeafProductsByIdNota(id: string) {
    const { data } = await api.get(`/nota-item/${id}`)
    return data
  }

  async deleteProduct(id: string) {
    await api.delete(`/nota-item/${id}`)
  }
}

export default new LeafService()