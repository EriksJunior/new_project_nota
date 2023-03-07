import { api } from "../utils/configs/api";

class TypePaymentService {
  async save(dataTypePayments) {
    const { data: { id } } = await api.post('/payments', dataTypePayments)
    return id
  }

  async update(dataTypePayments) {
    await api.put(`/payments/${dataTypePayments.id}`, dataTypePayments)
  }

  async findAll() {
    const { data } = await api.get('/payments/combobox')
    return data
  }

  async findById(id) {
    const { data } = await api.get(`/payments/${id}`)
    return data[0]
  }

  async deleteTypePayments(id) {
    await api.delete(`/payments/${id}`)
  }

}

export default new TypePaymentService()