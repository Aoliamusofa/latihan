import api from '~/services/api'

export const state = () => ({
  categories: [],
  items: [],
})

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_ITEMS(state, items) {
    state.items = items
  },
}

export const actions = {
  async fetchCategories({ commit }) {
    const { data } = await api.getCategories()
    commit('SET_CATEGORIES', data)
  },
  async fetchItems({ commit }, categoryId) {
    const { data } = await api.getItems(categoryId)
    commit('SET_ITEMS', data)
  },
  async addCategory({ dispatch }, category) {
    await api.addCategory(category)
    dispatch('fetchCategories')
  },
  async updateCategory({ dispatch }, { id, category }) {
    await api.updateCategory(id, category)
    dispatch('fetchCategories')
  },
  async deleteCategory({ dispatch }, id) {
    await api.deleteCategory(id)
    dispatch('fetchCategories')
  },
  async addItem({ dispatch }, { categoryId, item }) {
    await api.addItem(categoryId, item)
    dispatch('fetchItems', categoryId)
  },
  async updateItem({ dispatch }, { categoryId, id, item }) {
    await api.updateItem(categoryId, id, item)
    dispatch('fetchItems', categoryId)
  },
  async deleteItem({ dispatch }, { categoryId, id }) {
    await api.deleteItem(categoryId, id)
    dispatch('fetchItems', categoryId)
  },
}
