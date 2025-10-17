/* eslint-disable */
import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('authStore', {
  state: () => ({
    loading: false,
    error: null as string | null,
    token: null as string | null,
    user: null as any,
    success: false,
  }),
  actions: {
    async login(email: string, password: string) {
      this.loading = true
      this.error = null
      this.success = false
      try {
        const response = await axios.post('http://localhost:5050/api/auth/login', { email, password })
        this.token = response.data.token
        this.user = response.data.user
        this.success = true
        // Optionally, store token in localStorage for persistence
        console.log('Token yang akan disimpan:', this.token)
        localStorage.setItem('jwt_token', this.token || '')
        console.log('Token sudah disimpan')
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan'
        this.token = null
        this.user = null
      } finally {
        this.loading = false
      }
    },
    async logout() {
      try {
        const token = this.token || localStorage.getItem('jwt_token')
        if (token) {
          await axios.post('http://localhost:5050/api/auth/logout', {}, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
        }
      } catch (err) {
        console.error('Logout error:', err)
      } finally {
        this.token = null
        this.user = null
        this.success = false
        localStorage.removeItem('jwt_token')
      }
    },
    // Add register, forgotPassword, etc. here as needed
  },
})