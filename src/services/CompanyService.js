import { api } from '../utils/configs/api';
import { ICompany } from '../interface/ICompany';

class CompanyService {
    async save(dataCompany: ICompany){
        const { data } = await api.post('/company', dataCompany)
        return data
    }

    async update(dataCompany: ICompany) {
        await api.put(`/company/${dataCompany.id}`, dataCompany)
      }
}

export default new CompanyService()