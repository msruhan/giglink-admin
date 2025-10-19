<template>
    <div>
        <div v-if="explore" class="container-fluid relative px-3">
            <div class="layout-specing">
                <!-- Start Content -->
                <div class="flex justify-between items-center">
                    <div>
                        <h5 class="text-lg font-semibold">Explore Items</h5>

                        <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1">
                            <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                                <router-link to="/">Giglink</router-link>
                            </li>
                            <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Explore Items</li>
                        </ul>
                    </div>

                    <div>
                        <router-link to="/upload-work" class="btn btn-icon btn-sm rounded-full bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-800/5 dark:border-gray-700 text-slate-900 dark:text-white"><i data-feather="plus" class="size-4"></i></router-link>
                    </div>
                </div>

                <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    <div v-for="product in filteredData" :key="product.id" class="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all  duration-500 hover:-mt-2 h-[420px] flex flex-col justify-between">
                        <div class="relative overflow-hidden">
                            <div class="relative overflow-hidden rounded-lg">
                                <img :src="product.image_url_1" class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500" alt="">
                            </div>

                            <div class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                                <router-link :to="{ name: 'license-detail', params: { id: product.id } }" class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-lightning-bolt"></i> Buy Now</router-link>
                            </div>

                            <div class="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <a href="javascript:void(0)" class="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="mdi mdi-plus"></i></a>
                            </div>

                            <div v-if="product.showdate === true" class="absolute  bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full justify-center">
                                <i class="uil uil-clock align-middle me-1 text-center"></i> <small id="auction-item-1" class="font-bold"> {{ product.remaining?.days + " : " +product.remaining?.hours + " : " + product.remaining?.minutes + " : " + product.remaining?.seconds }}</small>
                            </div>
                        </div>

                        <div class="mt-3 flex-1 flex flex-col justify-between">
                            <div class="flex items-center">
                                <img :src="product.image || require('../assets/images/avatar/6.jpg')" class="rounded-full size-8" alt="">
                                <router-link to="/creator-profile" class="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{{product.seller_name}}</router-link>
                            </div>

                            <div class="my-3">
                                <router-link :to="{ name: 'license-detail', params: { id: product.id } }" class="font-semibold hover:text-violet-600 truncate block max-w-full">{{ product.name}}</router-link>
                            </div>

                            <div class="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                                <div>
                                    <span class="text-[16px] font-medium text-slate-400 block">Harga</span>
                                    <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{ formatRupiah(product.price) }}</span>
                                </div>
                            </div>
                        </div>
                    </div><!--end content-->

                </div>

                <pagination />
                <!-- End Content -->
            </div>


        </div>
    </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import { useLicenseStore } from '@/stores/storeLicense'
export default {
    props: ({
        explore: {
            type: Boolean,
            required: true
        },
        explores: {
            type: Boolean,
            required: true
        }
    }),
    data() {
        return {
            selectedCategory: null,
            filteredData: [],
        }
    },
    components: {
        pagination
    },
    async created() {
        const licenseStore = useLicenseStore()
        await licenseStore.getLicenses()
        this.filteredData = licenseStore.licenses
    },
    methods: {
        remainingDays() {
            const formattedData = this.filteredData.map((item) => ({
                ...item,
                remaining: this.tickTock(item.date),
            }));
            this.filteredData = formattedData;
        },
        image: require('../assets/images/avatar/4.jpg'),
        tickTock(date) {
            let startDate = new Date(date);
            let currentDate = new Date();
            const diff = startDate.getTime() - currentDate.getTime();
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            return { hours, minutes, seconds, days }
        },
        matchCategory(category) {
            this.selectedCategory = category
            this.filteredData = this.selectedCategory ? this.filteredData.filter((item) => item.category === this.selectedCategory)
                : this.filteredData;
        },
        formatRupiah(value) {
            if (!value) return '-';
            return Number(value).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
        },
    }
}

</script>

<style lang="scss" scoped></style>