import { api } from "../utils/configs/api";

class ProductLeafService {
  async deleteLeafAndProducts(id) {
    await api.delete(`/nota-item/delete-all/${id}`)
  }

  async save(product) {
    const formattedSubtotal = product.subtotal.replace(".", "").replace(".", "").replace(",", ".")
    const formattedTotal = product.total.replace(".", "").replace(".", "").replace(",", ".")
    const formattedDesconto = product.desconto.replace(".", "").replace(".", "").replace(",", ".")

    const { data: { id } } = await api.post('/nota-item', { ...product, subtotal: formattedSubtotal, total: formattedTotal, desconto: formattedDesconto })
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