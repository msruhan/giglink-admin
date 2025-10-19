<template>
    <div v-if="licenseDetail" class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">{{ licenseDetail.title }}</h5>
                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">License Detail</li>
                </ul>
            </div>
            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div class="lg:col-span-5">
                    <img :src="licenseDetail.image_url_1" class="rounded-md shadow dark:shadow-gray-700 w-full" alt="">
                    <!-- ...tambahkan info lain jika perlu... -->
                </div>
                <div class="lg:col-span-7">
                    <h5 class="md:text-2xl text-xl font-semibold">{{ licenseDetail.title }}</h5>
                    <span class="font-medium text-slate-400 block mt-2">By: <router-link to="/creator-profile" class="text-violet-600">{{ licenseDetail.seller_name }}</router-link></span>
                    <p class="text-slate-400 mt-4">{{ licenseDetail.description }}</p>
                    <div class="mt-4">
                        <span class="text-lg font-medium text-slate-400 block">Market Price</span>
                        <span class="tmd:text-2xl text-xl font-semibold block mt-2"><i class="mdi mdi-ethereum"></i> {{ formatRupiah(licenseDetail.price) }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="text-center py-16 text-slate-400">Loading...</div>
</template>

<script>
import { useLicenseStore } from '@/stores/storeLicense'
export default {
    data() {
        return {
            licenseDetail: null,
        }
    },
    async created() {
        await this.fetchLicenseDetail()
    },
    watch: {
        '$route.params.id': {
            immediate: false,
            handler() {
                this.fetchLicenseDetail()
            }
        }
    },
    methods: {
        async fetchLicenseDetail() {
            const licenseStore = useLicenseStore()
            const id = this.$route.params.id
            this.licenseDetail = await licenseStore.getDetailLicenses(id)
        },
        formatRupiah(value) {
            if (!value) return '-';
            return Number(value).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
        },
    }
}
</script>

<style lang="scss" scoped></style>