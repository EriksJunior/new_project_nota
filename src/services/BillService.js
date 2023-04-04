import { api } from '../utils/configs/api';

class BillService {
  async save(bill) {
    const { data: { id } } = await api.post("/bills", bill)
    return { ...bill, id: id }
  }

  async delete(id) {
    await api.delete(`/bills/${id}`)
  }

  async findByIdLeaf(idLeaf) {
    const { data } = await api.get(`/bills/nota/${idLeaf}`)
    return data
  }
}

export default new BillService()