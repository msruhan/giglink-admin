import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('storeProduct', {
  state: () => ({
    loading: false,
    error: null as string | null,
    success: false,
    products: [] as any[],
  }),
  actions: {
    async getProducts() {
      console.log('Fetching products...')
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get('http://localhost:5050/api/products')
        this.products = response.data
        this.success = true
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan'
      } finally {
        this.loading = false
      }
    },

    async getDetailProducts(id: string | number) {
      console.log('Fetching products detail...', id)
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get(`http://localhost:5050/api/products/${id}`)
        // response.data adalah detail teknisi
        return response.data
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan'
        return null
      } finally {
        this.loading = false
      }
    },
  },
})