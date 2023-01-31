import { api } from "../utils/configs/api";

class InfoFiscaleService {
    async save(dataInfoFiscale) {
        const { data } = await api.post('/impostos', dataInfoFiscale)
        return data
    }

    async update(dataInfoFiscale) {
        await api.put(`/impostos/${dataInfoFiscale.id}`, dataInfoFiscale)
    }

    async findAll() {
        const { data } = await api.get('/impostos')
        return data
    }
}

export default new InfoFiscaleService()