import { api } from "../utils/configs/api";

class ProductLeafService {
  async deleteLeafAndProducts(id) {
    await api.delete(`/nota-item/delete-all/${id}`)
  }

  async save(product) {
    const { data: { id } } = await api.post('/nota-item', product)
    return { ...product, id: id }
  }

  async remove(id) {
    await api.delete(`/nota-item/${id}`)
  }

  async findLeafProductsByIdNota(id) {
    const { data } = await api.get(`/nota-item/${id}`)
    return data
  }
}

export default new ProductLeafService()