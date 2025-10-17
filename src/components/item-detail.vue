<template>
    <div v-if="productDetail" class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">{{ productDetail.title }}</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li
                        class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                        aria-current="page">Item Detail</li>
                </ul>
            </div>

            <div class="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div class="lg:col-span-5">
                    <img :src="productDetail.image_url"
                        class="rounded-md shadow dark:shadow-gray-700 w-full" alt="">

                    <div class="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 mt-[30px] p-6">
                        <div>
                            <span class="font-medium text-slate-400 block mb-1">Contract Address</span>
                            <a href=""
                                class="font-medium text-violet-600 underline block">1fsvtgju51ntgeryimghf6ty7o9n3r3er246</a>
                        </div>

                        <div class="mt-4">
                            <span class="font-medium text-slate-400 block mb-1">Token ID</span>
                            <span class="font-medium block">458342529342930944</span>
                        </div>

                        <div class="mt-4">
                            <span class="font-medium text-slate-400 block mb-1">Blockchain</span>
                            <span class="font-medium block">ETH</span>
                        </div>

                        <div class="mt-4">
                            <span class="font-medium text-slate-400 block mb-1">Deposit & Withdraw</span>
                            <span class="font-medium block">Unsupported</span>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="lg:col-span-7">
                    <h5 class="md:text-2xl text-xl font-semibold">{{ productDetail.title }}</h5>

                    <span class="font-medium text-slate-400 block mt-2">From this collection: <router-link
                            to="/creator-profile" class="text-violet-600">{{ productDetail.seller_name }}</router-link></span>

                    <p class="text-slate-400 mt-4">{{ productDetail.description }}</p>

                    <div class="mt-4">
                        <span class="text-lg font-medium text-slate-400 block">Market Price</span>
                        <span class="tmd:text-2xl text-xl font-semibold block mt-2"><i class="mdi mdi-ethereum"></i>
                            {{ formatRupiah(productDetail.price) }}</span>
                    </div>

                    <div class="mt-6">
                        <a @click="toggle" href="javascript:void(0)" data-modal-toggle="NftBid"
                            class="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white me-2"><i
                                class="mdi mdi-gavel"></i> Bid Now</a>
                        <a @click="toggle2" href="javascript:void(0)" data-modal-toggle="NftBuynow"
                            class="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                                class="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div class="md:flex p-6 bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700 mt-6">
                        <div class="md:w-1/2">
                            <div class="flex items-center">
                                <div class="relative inline-block">
                                    <img :src="productDetail.image_url" class="h-16 rounded-md" alt="">
                                    <i
                                        class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                </div>

                                <div class="ms-3">
                                    <router-link to="/creator-profile"
                                        class="font-semibold block hover:text-violet-600">{{ productDetail.seller_name }}</router-link>
                                    <span class="text-slate-400 text-[16px] block mt-1">Seller</span>
                                </div>
                            </div>
                        </div>

                        <div class="md:w-1/2 md:mt-0 mt-4">
                            <div class="flex items-center">
                                <div class="relative inline-block">
                                    <img src="../assets/images/avatar/1.jpg" class="h-16 rounded-md" alt="">
                                    <i
                                        class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                </div>

                                <div class="ms-3">
                                    <router-link to="/creator-profile"
                                        class="font-semibold block hover:text-violet-600">Michael Williams</router-link>
                                    <span class="text-slate-400 text-[16px] block mt-1">Seller</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 mt-8">
                        <ul class="md:w-fit w-full flex-wrap justify-center text-center p-3 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md"
                            id="myTab" data-tabs-toggle="#StarterContent" role="tablist">
                            <li role="presentation" class="md:inline-block block md:w-fit w-full me-1">
                                <button @click="toggles(1)"
                                    :class="isActiveIndex === 1 ? 'text-white bg-violet-600' : 'dark:hover:bg-slate-800 hover:text-violet-600  hover:bg-gray-50 dark:hover:text-white'"
                                    class="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out"
                                    id="wednesday-tab" data-tabs-target="#wednesday" type="button" role="tab"
                                    aria-controls="wednesday" aria-selected="true">Bids</button>
                            </li>
                            <li role="presentation" class="md:inline-block block md:w-fit w-full">
                                <button @click="toggles(2)"
                                    :class="isActiveIndex === 2 ? 'text-white bg-violet-600 ' : 'dark:hover:bg-slate-800 hover:text-violet-600  hover:bg-gray-50 dark:hover:text-white'"
                                    class="px-6 py-2 font-semibold rounded-md w-full transition-all duration-500 ease-in-out"
                                    id="thursday-tab" data-tabs-target="#thursday" type="button" role="tab"
                                    aria-controls="thursday" aria-selected="false">Activity</button>
                            </li>
                        </ul>

                        <div id="StarterContent" class="mt-6">
                            <div :class="isActiveIndex === 1 ? '' : 'hidden'" id="wednesday" role="tabpanel"
                                aria-labelledby="wednesday-tab">
                                <div class="grid grid-cols-1">
                                    <div class="flex items-center">
                                        <div class="relative inline-block">
                                            <img src="../assets/images/items/2.gif" class="h-16 rounded-md" alt="">
                                            <i
                                                class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                        </div>

                                        <div class="ms-3">
                                            <h6 class="font-semibold">2 WETH <span class="text-slate-400">by</span> <a
                                                    href=""
                                                    class="hover:text-violet-600 duration-500 ease-in-out">0xe849fa28a...ea14</a>
                                            </h6>
                                            <span class="text-slate-400 text-[16px]">6 hours ago</span>
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-4">
                                        <div class="relative inline-block">
                                            <img src="../assets/images/items/1.jpg" class="h-16 rounded-md" alt="">
                                            <i
                                                class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                        </div>

                                        <div class="ms-3">
                                            <h6 class="font-semibold">0.001 WETH <span class="text-slate-400">by</span>
                                                <a href=""
                                                    class="hover:text-violet-600 duration-500 ease-in-out">VOTwear</a>
                                            </h6>
                                            <span class="text-slate-400 text-[16px]">6 hours ago</span>
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-4">
                                        <div class="relative inline-block">
                                            <img src="../assets/images/items/2.jpg" class="h-16 rounded-md" alt="">
                                            <i
                                                class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                        </div>

                                        <div class="ms-3">
                                            <h6 class="font-semibold">1.225 WETH <span class="text-slate-400">by</span>
                                                <a href=""
                                                    class="hover:text-violet-600 duration-500 ease-in-out">PandaOne</a>
                                            </h6>
                                            <span class="text-slate-400 text-[16px]">6 hours ago</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div :class="isActiveIndex === 2 ? '' : 'hidden'" id="thursday" role="tabpanel"
                                aria-labelledby="thursday-tab">
                                <div class="grid grid-cols-1">
                                    <div class="flex items-center">
                                        <div class="relative inline-block">
                                            <img src="../assets/images/items/1.gif" class="h-20 rounded-md" alt="">
                                            <i
                                                class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                        </div>

                                        <span class="content ms-3">
                                            <a href="" class="hover:text-violet-600 font-semibold block">Digital Art
                                                Collection</a>
                                            <span class="text-slate-400 block text-[16px] mt-1">Started Following <a
                                                    href=""
                                                    class="font-semibold hover:text-violet-600">@Panda</a></span>

                                            <span class="text-slate-400 block text-[16px]">1 hours ago</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->
            </div><!--end grid-->
            <!-- End Content -->
        </div>
    </div><!--end container-->

    <!-- Start Modal -->
    <div id="NftBid" :class="isActive ? 'fixed' : 'hidden'" tabindex="-1"
        class="z-50  flex items-center justify-center overflow-hidden m-auto bg-gray-900 bg-opacity-50 dark:bg-opacity-80 inset-0">
        <div class="relative w-full h-auto max-w-md p-4">
            <div class="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h5 class="text-xl font-semibold">Place a Bid</h5>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="NftBid">
                        <svg @click="toggle" class="size-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-6">
                    <form class="text-start">
                        <div class="grid grid-cols-1">
                            <div class="mb-4">
                                <label class="font-semibold" for="number">Your Bid Price:</label>
                                <input name="etherium" id="number" type="number"
                                    class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                                    placeholder="00.00 ETH">
                            </div>

                            <div class="mb-4">
                                <label class="font-semibold" for="number2">Enter Your QTY:</label>
                                <input name="quantity" id="number2" type="number"
                                    class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                                    placeholder="0">
                                <span class="text-slate-400 text-sm"><span
                                        class="text-slate-900 dark:text-white mt-1">Note:</span> Max. Qty 5</span>
                            </div>
                        </div>
                    </form>

                    <div class="pt-4 border-t dark:border-t-gray-800">
                        <div class="flex justify-between">
                            <p class="font-semibold text-sm"> You must bid at least:</p>
                            <p class="text-sm text-violet-600 font-semibold"> 1.22 ETH </p>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="font-semibold text-sm"> Service free:</p>
                            <p class="text-sm text-violet-600 font-semibold"> 0.05 ETH </p>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="font-semibold text-sm"> Total bid amount:</p>
                            <p class="text-sm text-violet-600 font-semibold"> 1.27 ETH </p>
                        </div>
                    </div>

                    <div class="mt-4">
                        <a href="javascript:void(0)" data-modal-toggle="NftBid"
                            class="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white w-full"><i
                                class="mdi mdi-gavel"></i> Place a Bid</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="NftBuynow" :class="isActive2 ? 'fixed' : 'hidden'" tabindex="-1"
        class="z-50 overflow-hidden inset-0 m-auto flex justify-center items-center">
        <div class="relative w-full h-auto max-w-md p-4">
            <div class="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                <div class="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                    <h5 class="text-xl font-semibold">Checkout</h5>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="NftBuynow">
                        <svg @click="toggle2" class="size-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <div class="p-6">
                    <form class="text-start">
                        <div class="grid grid-cols-1">
                            <div class="mb-4">
                                <label class="font-semibold" for="number3">Your Price:</label>
                                <input name="etherium" id="number3" type="number"
                                    class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                                    placeholder="00.00 ETH">
                            </div>
                        </div>
                    </form>

                    <div class="pt-4 border-t dark:border-t-gray-800">
                        <div class="flex justify-between">
                            <p class="font-semibold text-sm"> You must bid at least:</p>
                            <p class="text-sm text-violet-600 font-semibold"> 1.22 ETH </p>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="font-semibold text-sm"> Service free:</p>
                            <p class="text-sm text-violet-600 font-semibold"> 0.05 ETH </p>
                        </div>
                        <div class="flex justify-between mt-1">
                            <p class="font-semibold text-sm"> Total bid amount:</p>
                            <p class="text-sm text-violet-600 font-semibold"> 1.27 ETH </p>
                        </div>
                    </div>

                    <div class="flex items-center p-4 bg-red-600/10 text-red-600 mt-4 rounded-lg">
                        <i class="uil uil-exclamation-octagon text-3xl"></i>

                        <div class="ms-2">
                            <span class="block font-semibold">This creator is not verified</span>
                            <span class="block">Purchase this item at your own risk</span>
                        </div>
                    </div>

                    <div class="mt-4">
                        <a href="javascript:void(0)" data-modal-toggle="NftBuynow"
                            class="btn rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white w-full"><i
                                class="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Modal -->
</template>

<script>
import { useProductStore } from '@/stores/storeProduct'
import image from '../assets/images/items/item-detail.gif'
import image2 from '../assets/images/avatar/1.jpg'
export default {
    data() {
        return {
            image,
            image2,
            isActiveIndex: 1,
            isActive: false,
            isActive2: false,
            productDetail: null,
        }
    },
    async created() {
        await this.fetchProductDetail()
    },
    watch: {
        '$route.params.id': {
            immediate: false,
            handler() {
                this.fetchProductDetail()
            }
        }
    },
    methods: {
        toggles(Number) {
            this.isActiveIndex = Number
        },
        toggle() {
            this.isActive = !this.isActive
        },
        toggle2() {
            this.isActive2 = !this.isActive2
        },
        async fetchProductDetail() {
            const productStore = useProductStore()
            const id = this.$route.params.id
            this.productDetail = await productStore.getDetailProducts(id)
        },
        formatRupiah(value) {
            if (!value) return '-';
            return Number(value).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 });
        },
    },
    mounted() {
        this.id = this.$route.params.id;
        this.data = this.datas.find((item) => item.id === parseInt(this.id))
    },
}
</script>

<style lang="scss" scoped></style>