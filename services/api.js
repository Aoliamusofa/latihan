import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://664307293c01a059ea212f61.mockapi.io/api/v1',
})

export default {
  getCategories() {
    return apiClient.get('/kategori')
  },
  getCategory(id) {
    return apiClient.get(`/kategori/${id}`)
  },
  addCategory(category) {
    return apiClient.post('/kategori', category)
  },
  updateCategory(id, category) {
    return apiClient.put(`/kategori/${id}`, category)
  },
  deleteCategory(id) {
    return apiClient.delete(`/kategori/${id}`)
  },
  getItems(categoryId) {
    return apiClient.get(`/kategori/${categoryId}/barang`)
  },
  getItem(categoryId, id) {
    return apiClient.get(`/kategori/${categoryId}/barang/${id}`)
  },
  addItem(categoryId, item) {
    return apiClient.post(`/kategori/${categoryId}/barang`, item)
  },
  updateItem(categoryId, id, item) {
    return apiClient.put(`/kategori/${categoryId}/barang/${id}`, item)
  },
  deleteItem(categoryId, id) {
    return apiClient.delete(`/kategori/${categoryId}/barang/${id}`)
  },
}