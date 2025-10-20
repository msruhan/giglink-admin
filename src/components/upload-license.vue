<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <div class="flex flex-col gap-6 max-w-4xl mx-auto py-8">
                <div class="flex flex-col gap-2 items-start">
                    <h2 class="text-2xl font-bold text-violet-700 mb-2">Upload License</h2>
                    <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block">
                        <li class="inline breadcrumb-item text-[15px] font-semibold text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                            <router-link to="/">Giglink</router-link>
                        </li>
                        <li class="inline breadcrumb-item text-[15px] font-semibold text-slate-900 dark:text-white" aria-current="page">Upload License</li>
                    </ul>
                </div>
                <div class="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 flex flex-col gap-8">
                    <transition name="fade">
                        <div v-if="popupVisible" class="fixed z-50 left-0 top-0 w-full h-full flex items-center justify-center" style="background:rgba(0,0,0,0.2)">
                            <div :class="['rounded-xl px-8 py-6 shadow-lg text-center', popupSuccess ? 'bg-green-500 text-white' : 'bg-red-500 text-white']">
                                <div class="text-lg font-bold mb-2">{{ popupSuccess ? 'Sukses' : 'Gagal' }}</div>
                                <div class="text-base">{{ popupMessage }}</div>
                            </div>
                        </div>
                    </transition>
                    <div>
                        <h3 class="text-lg font-semibold mb-4 text-violet-600">Foto License</h3>
                        <div class="preview-box grid grid-cols-2 gap-4 mb-4">
                            <div v-for="(src, idx) in imageSrcList" :key="idx"
                                class="relative flex justify-center items-center rounded-lg shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center h-32"
                                draggable="true"
                                @dragstart="onDragStart(idx)"
                                @dragover.prevent
                                @drop="onDrop(idx)"
                            >
                                <img v-if="src" class="preview-content max-h-28 cursor-pointer transition duration-200 hover:scale-105" :src="src" alt="Foto Produk" @click="openPreview(src)">
                                <span v-else class="text-xs">Belum ada foto</span>
                                <span v-if="src && idx === 0" class="absolute left-2 top-2 bg-violet-600 text-white text-xs px-2 py-1 rounded shadow font-semibold">Gambar Utama</span>
                                <button v-if="src" type="button" @click.stop="removeImage(idx)" class="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-700">&times;</button>
                            </div>
                        </div>
                        <div v-if="showPreview" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
                            <div class="relative">
                                <img :src="previewSrc" alt="Preview Besar" class="max-h-[80vh] max-w-[90vw] rounded-xl shadow-2xl border-4 border-white">
                                <button @click="closePreview" class="absolute top-2 right-2 bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl hover:bg-red-800">&times;</button>
                            </div>
                        </div>
                        <input ref="fileInput" type="file" id="input-file" name="input-file" accept="image/*" multiple @change="loadFiles" hidden>
                        <label class="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full mt-4 cursor-pointer transition duration-200" for="input-file">Pilih Foto</label>
                    </div>
                    <hr class="my-4 border-gray-200 dark:border-gray-700">
                    <form @submit.prevent="submitLicense">
                        <div class="grid grid-cols-12 gap-6">
                            <div class="col-span-12">
                                <label class="font-semibold">Judul <span class="text-red-600">*</span></label>
                                <input v-model="form.title" name="judul" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Judul License">
                            </div>
                            <div class="md:col-span-6 col-span-12">
                                <label class="font-semibold">Harga <span class="text-red-600">*</span></label>
                                <input v-model.number="form.price" name="harga" type="number" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Harga">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Tipe Lisensi</label>
                                <div class="flex gap-8 mt-2">
                                    <label class="flex items-center gap-2">
                                        <input type="radio" name="license_type" v-model="form.license_type" value="aktivasi" class="accent-violet-600" />
                                        <span class="font-medium">Aktivasi</span>
                                    </label>
                                    <label class="flex items-center gap-2">
                                        <input type="radio" name="license_type" v-model="form.license_type" value="credit" class="accent-violet-600" />
                                        <span class="font-medium">Credit</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Deskripsi</label>
                                <textarea v-model="form.description" name="description" class="form-input w-full text-[15px] py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Deskripsi Barang"></textarea>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Fitur</label>
                                <textarea v-model="form.feature" name="feature" class="form-input w-full text-[15px] py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Fitur"></textarea>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Info Penting</label>
                                <textarea v-model="form.info" name="info_penting" class="form-input w-full text-[15px] py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Info Penting"></textarea>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Pilih Penjual</label>
                                <select v-model="form.seller" name="nama_penjual" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Pilih Penjual">
                                    <option value="" disabled>Pilih Penjual</option>
                                    <option v-for="user in users" :key="user.id" :value="user.id">{{ user.name }}</option>
                                </select>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Whatsapp Penjual</label>
                                <input v-model="form.whatsapp" name="whatsapp_penjual" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Nomor Whatsapp Penjual">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Pembayaran</label>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                  <label v-for="opt in ['Rekber', 'Tokopedia', 'Shopee', 'Tiktok']" :key="opt" class="flex items-center gap-2">
                                    <input type="checkbox" :value="opt" v-model="selectedPembayaran" class="accent-violet-600" />
                                    <span class="font-medium">{{ opt }}</span>
                                  </label>
                                </div>
                            </div>
                            <div class="col-span-12 flex justify-end">
                                <button type="submit" class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-xl px-8 py-3 font-semibold transition duration-200" :disabled="isLoading">
                                  <span v-if="isLoading">
                                    <svg class="animate-spin h-5 w-5 inline-block mr-2" viewBox="0 0 24 24">
                                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
                                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                                    </svg>
                                    Mengupload...
                                  </span>
                                  <span v-else>Upload Produk</span>
                                </button>
                            </div>
                                    </div>
                                </form>
                            </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useLicenseStore } from '../stores/storeLicense';
import { useUserStore } from '../stores/storeUser';
export default {
    data() {
        return {
            imageSrcList: [null, null, null, null],
            imageFiles: [null, null, null, null],
            showPreview: false,
            previewSrc: '',
            popupVisible: false,
            popupMessage: '',
            popupSuccess: true,
            isLoading: false,
            dragIndex: null,
            selectedPembayaran: [],
            users: [],
            form: {
                title: '',
                description: '',
                kondisi: '',
                kelengkapan: '',
                kekurangan: '',
                kapasitas: [],
                penjual: '',
                spesification: {
                    chipset: '',
                    layar: '',
                    kamera: '',
                    baterai: '',
                    warna: '',
                },
                pembayaran: {
                    rekber: 'NO',
                    tokped: 'NO',
                    shopee: 'NO',
                    tiktok: 'NO',
                },
                info: '',
                price: '',
                feature: '',      // fitur (features)
                license_type: '',       // tipe (Aktivasi/Credit)
                sellerid: '',   // seller id
                whatsapp: '',   // seller whatsapp
                seller: '',     // for v-model in select
            },
        };
    },
    async mounted() {
        // Ambil daftar user dari storeUser
        const userStore = useUserStore();
        await userStore.getUsers();
        this.users = userStore.users;
    },
    methods: {
        loadFiles(event) {
            const files = event.target.files;
            for (let i = 0; i < 4; i++) {
                if (files && files[i]) {
                    this.imageFiles[i] = files[i];
                    this.imageSrcList[i] = URL.createObjectURL(files[i]);
                } else {
                    this.imageFiles[i] = null;
                    this.imageSrcList[i] = null;
                }
            }
        },
        removeImage(idx) {
            this.imageFiles[idx] = null;
            this.imageSrcList[idx] = null;
        },
        async submitLicense() {
            this.isLoading = true;
            const formData = new FormData();
            formData.append('title', this.form.title);
            formData.append('price', this.form.price);
            formData.append('description', this.form.description);
            formData.append('feature', this.form.feature);
            formData.append('info', this.form.info);
            formData.append('penjual', this.form.penjual); 
            formData.append('whatsapp', this.form.whatsapp);
            formData.append('sellerid', this.form.sellerid);
            formData.append('license_type', this.form.license_type);
            // Kirim fitur sebagai JSON string
            formData.append('pembayaran', JSON.stringify(this.form.pembayaran));
            for (let i = 0; i < 4; i++) {
                if (this.imageFiles[i]) {
                    formData.append(`image_url_${i+1}`, this.imageFiles[i]);
                }
            }
            try {
                const store = useLicenseStore();
                await store.postLicense(formData);
                if (store.error) {
                    this.showPopup('Gagal upload lisensi!\n' + store.error, false);
                    console.error('Upload error:', store.error);
                } else {
                    this.showPopup('Lisensi berhasil diupload!', true);
                    this.resetForm();
                }
            } catch (e) {
                this.showPopup('Gagal upload lisensi!', false);
                console.error('Exception saat upload:', e);
            } finally {
                this.isLoading = false;
            }
        },

        resetForm() {
            this.form = {
                title: '',
                description: '',
                kondisi: '',
                kelengkapan: '',
                kekurangan: '',
                kapasitas: [],
                penjual: '',
                pembayaran: {
                    rekber: 'NO',
                    tokped: 'NO',
                    shopee: 'NO',
                    tiktok: 'NO',
                },
                info: '',
                price: '',
                feature: '',      // fitur (features)
                license_type: '',       // tipe (Aktivasi/Credit)
                sellerid: '',   // seller id
                whatsapp: '',   // seller whatsapp
                seller: '',     // for v-model in select
            };
            this.imageFiles = [null, null, null, null];
            this.imageSrcList = [null, null, null, null];
            this.selectedPembayaran = [];
        },
        showPopup(message, isSuccess) {
            this.popupMessage = message;
            this.popupSuccess = isSuccess;
            this.popupVisible = true;
            setTimeout(() => {
                this.popupVisible = false;
            }, 2500);
        },
        openPreview(src) {
            this.previewSrc = src;
            this.showPreview = true;
        },
        closePreview() {
            this.showPreview = false;
            this.previewSrc = '';
        },
        onDragStart(idx) {
            this.dragIndex = idx;
        },
        onDrop(idx) {
            if (this.dragIndex === null || this.dragIndex === idx) return;
            // Swap imageSrcList
            const tempSrc = this.imageSrcList[this.dragIndex];
            this.imageSrcList[this.dragIndex] = this.imageSrcList[idx];
            this.imageSrcList[idx] = tempSrc;
            // Swap imageFiles
            const tempFile = this.imageFiles[this.dragIndex];
            this.imageFiles[this.dragIndex] = this.imageFiles[idx];
            this.imageFiles[idx] = tempFile;
            this.dragIndex = null;
        },
    },
    watch: {
        selectedPembayaran(newVal) {
            this.form.pembayaran.rekber = newVal.includes('Rekber') ? 'YES' : 'NO';
            this.form.pembayaran.tokped = newVal.includes('Tokopedia') ? 'YES' : 'NO';
            this.form.pembayaran.shopee = newVal.includes('Shopee') ? 'YES' : 'NO';
            this.form.pembayaran.tiktok = newVal.includes('Tiktok') ? 'YES' : 'NO';
        },
        async 'form.seller'(newId) {
            if (!newId) return;
            const userStore = useUserStore();
            const detail = await userStore.getDetailUsers(newId);
            if (detail && detail.whatsapp) {
                this.form.whatsapp = detail.whatsapp;
                this.form.sellerid = detail.id;
                this.form.penjual = detail.name;
            } else {
                this.form.whatsapp = '';
                this.form.sellerid = '';
                this.form.penjual = '';
            }
        }
    }
};
</script>

<style lang="scss" scoped>
/* Popup fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;

}
</style>
