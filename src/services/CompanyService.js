import { api } from '../utils/configs/api';
class CompanyService {
    async save(dataCompany){
        const { data } = await api.post('/company', dataCompany)
        return data
    }

    async update(dataCompany) {
        await api.put(`/company/${dataCompany.id}`, dataCompany)
      }
}

export default new CompanyService()