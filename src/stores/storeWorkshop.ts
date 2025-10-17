import { defineStore } from 'pinia'
import axios from 'axios'

export const useWorkshopStore = defineStore('storeWorkshop', {
  state: () => ({
    loading: false,
    error: null as string | null,
    success: false,
    workshops: [] as any[],
  }),
  actions: {
    async getWorkshop() {
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get('http://localhost:5050/api/workshops')
        this.workshops = response.data
        this.success = true
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan'
      } finally {
        this.loading = false
      }
    },

    async getDetailWorkshops(id: string | number) {
      console.log('Fetching workshop detail...', id)
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get(`http://localhost:5050/api/workshops/${id}`)
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