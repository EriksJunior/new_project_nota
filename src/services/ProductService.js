import { api } from "../utils/configs/api";
class ProductServices {
    async save(dataProducts) {
        const { data } = await api.post('/products', dataProducts)
        return data
    }

    async update(dataProducts) {
        await api.put(`/products/${dataProducts.id}`, dataProducts)
    }

    async delete(id) {
        await api.delete(`/products/${id}`)
    }

    async getFromSelectBox() {
        const { data: { data } } = await api.get('/products')
        return data
    }

    async findById(id) {
        const { data } = await api.get(`/products/${id}`)
        return data
    }

    async search(q, page) {
        const { data } = await api.get(`/products?q=${q}&page=${page}`)
        return data
    }
}

export default new ProductServices()