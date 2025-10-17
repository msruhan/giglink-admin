import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('storeUser', {
  state: () => ({
    loading: false,
    error: null as string | null,
    success: false,
    users: [] as any[],
  }),
  actions: {
    async getUsers() {
      console.log('Fetching users...')
      this.loading = true
      this.error = null
      this.success = false
      try {
        const token = localStorage.getItem('jwt_token')
        const response = await axios.get('http://localhost:5050/api/users', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        this.users = response.data
        this.success = true
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan'
      } finally {
        this.loading = false
      }
    },

    async getDetailUsers(id: string | number) {
      console.log('Fetching user detail...', id)
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.get(`http://localhost:5050/api/users/${id}`)
        // response.data adalah detail pengguna
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