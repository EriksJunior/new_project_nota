import { api } from "../utils/configs/api";
class LeafService {
  async save(nota) {
    const { data: { id } } = await api.post('/nota', nota)
    return id
  }

  async update(nota) {
    await api.put(`/nota/${nota.id}`, nota)
  }

  async sendLeaf(id) {
    const { data } = await api.get(`/nota/send/${id}`)
    return data
  }

  async findLeafById(id) {
    const { data } = await api.get(`/nota/${id}`)
    return data
  }

  async searchLeaf(text, filter, page, startDate, endDate) {
    const { data: { data } } = await api.get(`/nota/?q=${text}&type=${filter}&page=${page}&startDate=${startDate}&endDate=${endDate}`)
    return data
  }

  async cancelLeaf(dataCancelamento, idNota) {
    const { data } = await api.put(`/nota/cancel/nota/${idNota}`, dataCancelamento)
    return data
  }
}

export default new LeafService()