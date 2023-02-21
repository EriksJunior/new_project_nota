import { api } from '../utils/configs/api';

class BillService{
  async save(bill) {
    const result = await api.post("/bills", bill)
    console.log(result)
  }
}

export default new BillService()