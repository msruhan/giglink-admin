<template>

    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <div>
                    <h5 class="text-lg font-semibold">Auction Items</h5>

                    <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1">
                        <li
                            class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                            <router-link to="/">Giglink</router-link>
                        </li>
                        <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                            aria-current="page">Auction Items</li>
                    </ul>
                </div>

                <div>
                    <router-link to="/upload-work"
                        class="btn btn-icon btn-sm rounded-full bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-700 dark:hover:bg-gray-600 border border-gray-800/5 dark:border-gray-700 text-slate-900 dark:text-white"><i
                            data-feather="plus" class="size-4"></i></router-link>
                </div>
            </div>

            <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div v-for="item in products" :key="item.id"
                    class="group relative overflow-hidden p-2 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                    <div class="relative overflow-hidden">
                        <div class="relative overflow-hidden rounded-lg">
                            <img :src="item.mainimage"
                                class="rounded-lg shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                                alt="">
                        </div>

                        <div
                            class="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                            <router-link :to="{ name: 'item-detail', params: { id: item.id } }"
                                class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                                    class="mdi mdi-lightning-bolt"></i> Buy Now</router-link>
                        </div>

                        <div class="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <a href="javascript:void(0)"
                                class="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                                    class="mdi mdi-plus"></i></a>
                        </div>

                        <div
                            class="absolute bottom-2 start-0 end-0 mx-auto text-center bg-gradient-to-r from-violet-600 to-red-600 text-white inline-table text-lg px-3 rounded-full">
                            <i class="uil uil-clock align-middle me-1"></i> <small id="auction-item-2"
                                class="font-bold">{{
                    item.remaining?.days + " : " + item.remaining?.hours + " : " +
                    item.remaining?.minutes + " : " + item.remaining?.seconds }}</small>
                        </div>
                    </div>

                    <div class="mt-3">
                        <div class="flex items-center">
                            <img :src="item.image" class="rounded-full size-8" alt="">
                            <router-link to="/creator-profile"
                                class="ms-2 text-[15px] font-medium text-slate-400 hover:text-violet-600">{{ item.name
                                }}</router-link>
                        </div>

                        <div class="my-3">
                            <router-link :to="{ name: 'item-detail', params: { id: item.id } }"
                                class="font-semibold hover:text-violet-600">{{ item.title }}</router-link>
                        </div>

                        <div
                            class="flex justify-between p-2 bg-gray-50 dark:bg-slate-800 rounded-lg shadow dark:shadow-gray-700">
                            <div>
                                <span class="text-[16px] font-medium text-slate-400 block">Price</span>
                                <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{
                    item.price
                }}</span>
                            </div>

                            <div>
                                <span class="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                                <span class="text-[16px] font-semibold block"><i class="mdi mdi-ethereum"></i> {{
                        item.highest
                    }}</span>
                            </div>
                        </div>
                    </div>
                </div><!--end content-->
            </div>
            <!-- End Content -->

            <pagination />
        </div>


    </div><!--end container-->



</template>

<script>
import pagination from '@/components/pagination.vue'
export default {
    data() {
        return {
            products: [
                {
                    id: 1,
                    mainimage: require('../assets/images/items/1.jpg'),
                    image: require('../assets/images/avatar/1.jpg'),
                    name: '@StreetBoy',
                    title: 'Genuine Undead #3902',
                    price: '3.5 ETH',
                    date: 'March 29, 2026 6:0:0',
                    highest: '3.55 ETH',
                    showdate: false
                },
                {
                    id: 2,
                    mainimage: require('../assets/images/items/2.gif'),
                    image: require('../assets/images/avatar/2.jpg'),
                    name: '@CutieGirl',
                    title: 'Windchime #768',
                    price: '3.5 ETH',
                    date: 'August 29, 2025 6:0:0',
                    highest: '3.55 ETH',
                    showdate: true
                },
                {
                    id: 3,
                    mainimage: require('../assets/images/items/2.jpg'),
                    image: require('../assets/images/items/3.gif'),
                    name: '@ButterFly',
                    title: 'Probably A Label #3277',
                    price: '3.5 ETH',
                    date: 'Julay 29, 2025 6:0:0',
                    highest: '3.55 ETH',
                    showdate: false
                },
                {
                    id: 4,
                    mainimage: require('../assets/images/items/3.jpg'),
                    image: require('../assets/images/avatar/3.jpg'),
                    name: '@NorseQueen',
                    title: 'Probably A Label #1711',
                    price: '3.5 ETH',
                    date: 'January 29, 2026 6:0:0',
                    highest: '3.55 ETH',
                    showdate: false
                },
                {
                    id: 5,
                    mainimage: require('../assets/images/items/3.gif'),
                    image: require('../assets/images/avatar/4.jpg'),
                    name: '@BigBull',
                    title: 'Shibuya Scramble Punks',
                    price: '3.5 ETH',
                    date: 'January 29, 2025 6:0:0',
                    highest: '3.55 ETH',
                    showdate: false
                },
                {
                    id: 6,
                    mainimage: require('../assets/images/items/4.jpg'),
                    image: require('../assets/images/avatar/5.jpg'),
                    name: '@Angel',
                    title: 'Probably A Label #650',
                    price: '3.5 ETH',
                    date: 'March 29, 2025 6:0:0',
                    highest: '3.55 ETH',
                    showdate: false
                },
                {
                    id: 7,
                    mainimage: require('../assets/images/items/5.jpg'),
                    image: require('../assets/images/avatar/6.jpg'),
                    name: '@CrazyAnyone',
                    title: 'Looki#0147',
                    price: '3.5 ETH',
                    date: 'January 29, 2026 6:0:0',
                    highest: '3.55 ETH',
                    showdate: true
                },
                {
                    id: 8,
                    mainimage: require('../assets/images/items/6.jpg'),
                    image: require('../assets/images/items/5.gif'),
                    name: '@Princess',
                    title: 'Poob #285',
                    price: '3.5 ETH',
                    date: 'August 29, 2025 6:0:0',
                    highest: '3.55 ETH',
                    showdate: false
                },
                {
                    id: 16,
                    mainimage: require('../assets/images/items/10.jpg'),
                    image: require('../assets/images/avatar/6.jpg'),
                    name: '@CrazyAnyone',
                    title: 'Looki#0147',
                    price: '3.5 ETH',
                    date: 'January 29, 2026 6:0:0',
                    highest: '3.55 ETH',
                    showdate: true
                },
                {
                    id: 17,
                    mainimage: require('../assets/images/items/12.jpg'),
                    image: require('../assets/images/items/5.gif'),
                    name: '@Princess',
                    title: 'Poob #285',
                    price: '3.5 ETH',
                    date: 'August 29, 2025 6:0:0',
                    highest: '3.55 ETH',
                    showdate: false
                },
            ]
        }
    },
    components: {
        pagination
    },
    mounted() {
        const interval = setInterval(() => {
            this.remainingDays();
        }, 100);
        return () => clearInterval(interval);
    },
    methods: {
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
        remainingDays() {
            const formattedData = this.products.map((item) => ({
                ...item,
                remaining: this.tickTock(item.date),
            }));
            this.products = formattedData;

        },
    }
}

</script>

<style lang="scss" scoped></style>