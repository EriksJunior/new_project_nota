import { api } from "../utils/configs/api";
class ProductsOfSaleService {
  async save(productsSale, formattedProduct) {
    const { data: { id } } = await api.post('/products-of-sale', formattedProduct)
    return { ...productsSale, id: id }
  }

  async update(productsSale) {
    await api.put(`/products-of-sale/${productsSale.id}`, productsSale)
  }

  async delete(id) {
    await api.delete(`/products-of-sale/${id}`)
  }

  async getFromSelectBox() {
    const { data: { data } } = await api.get('/products-of-sale')
    return data
  }

  async findById(id) {
    const { data } = await api.get(`/products-of-sale/${id}`)
    return data
  }

  async search(q, page) {
    const { data } = await api.get(`/products-of-sale?q=${q}&page=${page}`)
    return data
  }
}

export default new ProductsOfSaleService()