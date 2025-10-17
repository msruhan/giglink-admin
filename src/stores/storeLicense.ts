import { defineStore } from 'pinia'
import axios from 'axios'

export const useLicenseStore = defineStore('storeLicense', {
  state: () => ({
    loading: false,
    error: null as string | null,
    success: false,
    licenses: [] as any[],
  }),
  actions: {
    async getLicenses() {
      console.log('Fetching licenses...')
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get('http://localhost:5050/api/licenses')
        this.licenses = response.data
        this.success = true
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan'
      } finally {
        this.loading = false
      }
    },

    async getDetailLicenses(id: string | number) {
      console.log('Fetching license detail...', id)
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get(`http://localhost:5050/api/licenses/${id}`)
        // response.data adalah detail lisensi
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