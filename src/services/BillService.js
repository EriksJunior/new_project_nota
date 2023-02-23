import { api } from '../utils/configs/api';

class BillService {
  async save(bill) {
    const { data: { id } } = await api.post("/bills", bill)
    return { ...bill, id: id }
  }
}

export default new BillService()