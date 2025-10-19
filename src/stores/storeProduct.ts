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
    async postProduct(formData: FormData) {
      this.loading = true;
      this.error = null;
      this.success = false;
      try {
        const token = localStorage.getItem('jwt_token');
        const response = await axios.post(
          'http://localhost:5050/api/products',
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

    async editProduct(id: string | number, formData: FormData) {
      this.loading = true;
      this.error = null;
      this.success = false;
      try {
        const token = localStorage.getItem('jwt_token');
        const response = await axios.patch(
          `http://localhost:5050/api/products/${id}`,
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

    async deleteProduct(id: string | number) {
      this.loading = true;
      this.error = null;
      this.success = false;
      try {
        const token = localStorage.getItem('jwt_token');
        const response = await axios.delete(`http://localhost:5050/api/products/${id}`,
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
},
})