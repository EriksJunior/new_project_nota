import { api } from "../utils/configs/api";

class InfoFiscaleService {
    async save(dataInfoFiscale) {
        const { data } = await api.post('/impostos', dataInfoFiscale)
        return data
    }

    async update(dataInfoFiscale) {
        await api.put(`/impostos/${dataInfoFiscale.id}`, dataInfoFiscale)
    }

    async findById(id) {
        const { data } = await api.get(`/impostos/${id}`)
        return data
    }

    async delete(id, classeImposto) {
        const { data } = await api.delete(`/impostos/${id}?classImposto=${classeImposto}`)
        return data
    }

    async findAllRefs() {
        const { data: { data } } = await api.get('/impostos')
        return data
    }
}

export default new InfoFiscaleService()