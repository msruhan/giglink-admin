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
    async editLicense(id: string | number, formData: FormData) {
      this.loading = true;
      this.error = null;
      this.success = false;
      try {
        const token = localStorage.getItem('jwt_token');
        const response = await axios.patch(
          `http://localhost:5050/api/licenses/${id}`,
          formData,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
              // Jangan set Content-Type, biarkan axios yang handle
            },
          }
        );
        this.success = true;
        return response.data;
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan';
        return null;
      } finally {
        this.loading = false;
      }
    },

    async deleteLicense(id: string | number) {
      this.loading = true;
      this.error = null;
      this.success = false;
      try {
        const token = localStorage.getItem('jwt_token');
        const response = await axios.delete(`http://localhost:5050/api/licenses/${id}`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
            },
          }
        );
        this.success = true;
        return response.data;
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan';
        return null;
      } finally {
        this.loading = false;
      }
    },
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

    async postLicense(formData: FormData) {
      this.loading = true;
      this.error = null;
      this.success = false;
      try {
        const token = localStorage.getItem('jwt_token');
        const response = await axios.post(
          'http://localhost:5050/api/licenses',
          formData,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
              // Jangan set Content-Type, biarkan axios yang handle
            },
          }
        );
        this.success = true;
        return response.data;
      } catch (err: any) {
        this.error = err.response?.data?.message || err.message || 'Terjadi kesalahan';
        return null;
      } finally {
        this.loading = false;
      }
    },
  },
})