import { defineStore } from 'pinia'
import axios from 'axios'

export const useTechnicianStore = defineStore('storeTechnician', {
  state: () => ({
    loading: false,
    error: null as string | null,
    success: false,
    technicians: [] as any[],
  }),
  actions: {
    async getTechnicians() {
      console.log('Fetching technicians...')
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get('http://localhost:5050/api/technicians')
        this.technicians = response.data
        this.success = true
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan'
      } finally {
        this.loading = false
      }
    },

    async getDetailTechnicians(id: string | number) {
      console.log('Fetching technician detail...', id)
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get(`http://localhost:5050/api/technicians/${id}`)
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