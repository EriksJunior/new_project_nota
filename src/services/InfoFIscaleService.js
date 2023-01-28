import { api } from "../utils/configs/api";

class ImpostosService {
    async save(dataInfoFiscale) {
        const { data } = await api.post('/impostos', dataInfoFiscale)
        return data
    }

    async findAll(){
        const { data } = await api.get('/impostos')
        return data
    }
  }

  export default new ImpostosService()