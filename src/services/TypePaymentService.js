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

  async deleteTypePayments(data) {
    const { data: { id } } = await api.post('/payments', { data })
    return id
  }

}

export default new TypePaymentService()