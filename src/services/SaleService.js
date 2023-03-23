import { api } from "../utils/configs/api";
class SaleService {
  async save(nota) {
    const { data: { id } } = await api.post('/sales', nota)
    return id
  }

  async update(nota) {
    await api.put(`/nota/${nota.id}`, nota)
  }

  async findById(id) {
    const { data } = await api.get(`/sales/${id}`)
    return data
  }

  async search(text, filter, page, startDate, endDate) {
    const { data: { data } } = await api.get(`/sales/?q=${text}&type=${filter}&page=${page}&startDate=${startDate}&endDate=${endDate}`)
    return data
  }

  async delete(dataCancelamento, idNota) {
    const { data } = await api.put(`/sales/cancel/nota/${idNota}`, dataCancelamento)
    return data
  }
}

export default new SaleService()