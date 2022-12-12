import { api } from '../utils/configs/api';

class ClienteService {
  async save(dataCliente) {
    const { data } = await api.post('/customers', dataCliente)
    return data
  }

  async update(dataCliente) {
    await api.put(`/customers/${dataCliente.id}`, dataCliente)
  }

  async delete(id) {
    await api.delete(`/customers/${id}`)
  }

  async getFromSelectBox() {
    const { data } = await api.get('/customers/combobox')
    return data
  }

  async findById(id) {
    const { data } = await api.get(`/customers/${id}`)
    return data
  }

  async search(q, page) {
    const { data } = await api.get(`customers?q=${q}&page=${page}`)
    return data
  }
}

export default new ClienteService()