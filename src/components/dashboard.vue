<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <div>
                    <h5 class="font-semibold text-2xl mb-1">Welcome!</h5>
                    <h5 class="font-medium text-base text-slate-400">Jenny Jimenez</h5>
                </div>
                <span class="text-slate-400">My balance: <span class="font-semibold text-emerald-600">$ 45,578.032</span></span>
            </div>

            <div class="grid lg:grid-cols-12 gap-6 mt-6">
                <div class="xl:col-span-8 lg:col-span-12">
                    <div class="grid grid-cols-1 gap-6">
                        <div class="relative overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900 p-2">
                            <div id="tradingview_123"></div>
                            <ethusd />
                        </div>

                        <exploreitem />

                    </div>
                </div>

                <div class="xl:col-span-4 lg:col-span-12">
                    <div class="grid xl:grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="relative table w-full py-16 px-6 overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-[url('../../assets/images/bg/bg1.jpg')] bg-bottom bg-no-repeat">
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
                            <div class="relative z-1">
                                <h1 class="font-bold leading-snug text-white text-4xl">Discover rate <br> collection or
                                    <span class="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Arts & NFTs</span>
                                </h1>

                                <div class="mt-6">
                                    <router-link to="/explore" class="btn btn-sm bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full me-2">Explore Now</router-link>
                                    <router-link to="/upload-work" class="btn btn-sm bg-transparent hover:bg-violet-600 border-violet-600 text-violet-600 hover:text-white rounded-full">Sell Now</router-link>
                                </div>
                            </div>
                        </div>

                        <creators />
                    </div>
                    <recently />
                </div>

            </div>
            <!-- End Content -->
        </div>
    </div><!--end container-->
</template>

<script>
import exploreitem from '@/components/explore-item.vue';
import creators from '@/components/top-creators.vue';
import ethusd from '@/components/ethusd-chart.vue';
import recently from '@/components/recently-added.vue'
export default {

    data() {
        return {

        }
    },

    components: {
        exploreitem,
        creators,
        ethusd,
        recently
    },

}
</script>

<style lang="scss" scoped></style>