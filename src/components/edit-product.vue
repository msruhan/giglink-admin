<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <div class="flex flex-col gap-6 max-w-4xl mx-auto py-8">
                <div class="flex flex-col gap-2 items-start">
                    <h2 class="text-2xl font-bold text-violet-700 mb-2">Upload Produk</h2>
                    <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block">
                        <li class="inline breadcrumb-item text-[15px] font-semibold text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                            <router-link to="/">Giglink</router-link>
                        </li>
                        <li class="inline breadcrumb-item text-[15px] font-semibold text-slate-900 dark:text-white" aria-current="page">Upload Produk</li>
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
                        <h3 class="text-lg font-semibold mb-4 text-violet-600">Foto Produk</h3>
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
                    <form @submit.prevent="submitProduct">
                        <div class="grid grid-cols-12 gap-6">
                            <div class="col-span-12">
                                <label class="font-semibold">Judul <span class="text-red-600">*</span></label>
                                <input v-model="form.title" name="judul" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Judul Produk">
                            </div>
                            <div class="md:col-span-6 col-span-12">
                                <label class="font-semibold">Harga <span class="text-red-600">*</span></label>
                                <input v-model.number="form.price" name="harga" type="number" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Harga">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Kondisi</label>
                                <div class="flex gap-8 mt-2">
                                    <label class="flex items-center gap-2">
                                        <input type="radio" name="kondisi" v-model="form.kondisi" value="Baru" class="accent-violet-600" />
                                        <span class="font-medium">Baru</span>
                                    </label>
                                    <label class="flex items-center gap-2">
                                        <input type="radio" name="kondisi" v-model="form.kondisi" value="Bekas" class="accent-violet-600" />
                                        <span class="font-medium">Bekas</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Deskripsi Barang</label>
                                <textarea v-model="form.description" name="description" class="form-input w-full text-[15px] py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Deskripsi Barang"></textarea>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Kelengkapan</label>
                                <textarea v-model="form.kelengkapan" name="kelengkapan" class="form-input w-full text-[15px] py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Kelengkapan"></textarea>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Kekurangan</label>
                                <textarea v-model="form.kekurangan" name="kekurangan" class="form-input w-full text-[15px] py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Kekurangan"></textarea>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Chipset</label>
                                <input v-model="form.spesification.chipset" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Chipset">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Layar</label>
                                <input v-model="form.spesification.layar" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Layar">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Kamera</label>
                                <input v-model="form.spesification.kamera" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Kamera">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Baterai</label>
                                <input v-model="form.spesification.baterai" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Baterai">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Warna</label>
                                <input v-model="form.spesification.warna" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Warna">
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Info Penting</label>
                                <textarea v-model="form.info" name="info_penting" class="form-input w-full text-[15px] py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Info Penting"></textarea>
                            </div>
                            <div class="md:col-span-6 col-span-12">
                                <label class="font-semibold">Kapasitas</label>
                                <div class="flex flex-wrap gap-6 mt-2">
                                    <label v-for="opt in ['256 GB', '512 GB', '1 TB', '2 TB']" :key="opt" class="flex items-center gap-2">
                                        <input type="checkbox" :value="opt" v-model="form.kapasitas" class="accent-violet-600" />
                                        <span class="font-medium">{{ opt }}</span>
                                    </label>
                                </div>
                            </div>
                            <div class="col-span-12">
                                <label class="font-semibold">Pilih Penjual</label>
                                <input v-model="form.penjual" name="penjual" type="text" class="form-input w-full text-[15px] py-2 px-3 h-12 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Nama Penjual">

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
import { useRoute } from 'vue-router';
import { useProductStore } from '../stores/storeProduct';
import { useUserStore } from '../stores/storeUser';
export default {
    data() {
        return {
            toggle: true,
            product: null,
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
            },
        };
    },
    async created() {
        const route = useRoute();
        const productStore = useProductStore();
        const id = route.params.id;
        if (id) {
            const data = await productStore.getDetailProducts(id);
            this.product = data;
            if (data) {
                // Prefill form fields
                this.form.title = data.title || '';
                this.form.description = data.description || '';
                this.form.kondisi = data.kondisi || '';
                this.form.kelengkapan = data.kelengkapan || '';
                this.form.kekurangan = data.kekurangan || '';
                                // Kapasitas: support string "256 GB,512 GB" or array
                                if (Array.isArray(data.kapasitas)) {
                                    this.form.kapasitas = data.kapasitas;
                                } else if (typeof data.kapasitas === 'string') {
                                    this.form.kapasitas = data.kapasitas.split(',').map(k => k.trim()).filter(Boolean);
                                } else {
                                    this.form.kapasitas = [];
                                }
                this.form.penjual = data.penjual || '';
                this.form.whatsapp = data.whatsapp || '';
                this.form.sellerid = data.seller_id || '';
                this.form.spesification = data.spesification || { chipset: '', layar: '', kamera: '', baterai: '', warna: '' };
                this.form.pembayaran = data.pembayaran || { rekber: 'NO', tokped: 'NO', shopee: 'NO', tiktok: 'NO' };
                this.form.info = data.info || '';
                this.form.price = data.price || '';
                // Set image previews
                this.imageSrcList = [data.image_url_1, data.image_url_2, data.image_url_3, data.image_url_4].map(x => x || null);

                // Set selectedPembayaran for auto-check
                const pembayaran = data.pembayaran || {};
                this.selectedPembayaran = [];
                if (pembayaran.rekber === 'YES') this.selectedPembayaran.push('Rekber');
                if (pembayaran.tokped === 'YES') this.selectedPembayaran.push('Tokopedia');
                if (pembayaran.shopee === 'YES') this.selectedPembayaran.push('Shopee');
                if (pembayaran.tiktok === 'YES') this.selectedPembayaran.push('Tiktok');
            }
        }
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
            if (!files || files.length === 0) return;
            let fileIdx = 0;
            for (let i = 0; i < 4 && fileIdx < files.length; i++) {
                // Cari slot kosong (tidak ada file baru & tidak ada gambar lama)
                if (!this.imageFiles[i] && !this.imageSrcList[i]) {
                    this.imageFiles[i] = files[fileIdx];
                    this.imageSrcList[i] = URL.createObjectURL(files[fileIdx]);
                    fileIdx++;
                }
            }
            // Jika semua slot kosong sudah terisi, sisa file diabaikan
        },
        removeImage(idx) {
            this.imageFiles[idx] = null;
            this.imageSrcList[idx] = null;
        },
        async submitProduct() {
            this.isLoading = true;
            const formData = new FormData();
            formData.append('title', this.form.title);
            formData.append('description', this.form.description);
            formData.append('kondisi', this.form.kondisi);
            formData.append('kelengkapan', this.form.kelengkapan);
            formData.append('kekurangan', this.form.kekurangan);
            // Kapasitas harus string (misal: "256 GB,512 GB")
            formData.append('kapasitas', Array.isArray(this.form.kapasitas) ? this.form.kapasitas.join(',') : (this.form.kapasitas || ''));
            formData.append('penjual', this.form.penjual);
            formData.append('whatsapp', this.form.whatsapp);
            // Pastikan sellerid tidak kosong/null
            formData.append('sellerid', this.form.sellerid ? String(this.form.sellerid) : '');
            // Kirim spesification sebagai JSON string
            formData.append('spesification', JSON.stringify(this.form.spesification));
            formData.append('info', this.form.info);
            formData.append('price', this.form.price);
            formData.append('pembayaran', JSON.stringify(this.form.pembayaran));
            // Only upload images if replaced or deleted
            for (let i = 0; i < 4; i++) {
                if (this.imageFiles[i]) {
                    // New image selected, upload file
                    formData.append(`image_url_${i+1}`, this.imageFiles[i]);
                } else if (!this.imageSrcList[i] && this.product && this.product[`image_url_${i+1}`]) {
                    // Image deleted, send empty string to remove
                    formData.append(`image_url_${i+1}`, '');
                } else if (this.imageSrcList[i] && this.product && this.imageSrcList[i] === this.product[`image_url_${i+1}`]) {
                    // Image unchanged, send original URL
                    formData.append(`image_url_${i+1}`, this.product[`image_url_${i+1}`]);
                }
            }
            try {
                const store = useProductStore();
                const id = this.product?.id;
                if (!id) {
                    this.showPopup('ID produk tidak ditemukan!', false);
                    this.isLoading = false;
                    return;
                }
                await store.editProduct(id, formData);
                if (store.error) {
                    this.showPopup('Gagal upload produk!\n' + store.error, false);
                    console.error('Upload error:', store.error);
                } else {
                    this.showPopup('Produk berhasil diupload!', true);
                    this.resetForm();
                }
            } catch (e) {
                this.showPopup('Gagal upload produk!', false);
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
        // async 'form.seller'(newId) {
        //     if (!newId) return;
        //     const userStore = useUserStore();
        //     const detail = await userStore.getDetailUsers(newId);
        //     if (detail && detail.whatsapp) {
        //         this.form.whatsapp = detail.whatsapp;
        //         this.form.sellerid = detail.id;
        //         this.form.penjual = detail.name;
        //     } else {
        //         this.form.whatsapp = '';
        //         this.form.sellerid = '';
        //         this.form.penjual = '';
        //     }
        // }
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
