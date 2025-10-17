<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Connect Wallet</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li
                        class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                        aria-current="page">Wallet</li>
                </ul>
            </div>

            <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div v-for="item in datas" :key="item"
                    class="group relative rounded-xl bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 p-6 text-center mt-10 hover:shadow-md dark:hover:shadow-gray-800 transition-all duration-500">
                    <div class="relative -mt-16">
                        <img :src="item.image"
                            class="bg-white dark:bg-slate-900 size-20 rounded-full shadow-md dark:shadow-gray-800 mx-auto p-3"
                            alt="">

                        <h5 class="text-lg font-semibold mt-5">{{ item.name }}</h5>

                        <p class="text-slate-400 mt-3">{{ item.title }} <a href="javascript:void(0)"
                                data-modal-toggle="loginform"
                                class="btn btn-link text-violet-600 hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">here
                                <i class="uil uil-arrow-right"></i></a></p>
                    </div>
                </div><!--end content-->
            </div>
            <!-- End Content -->
        </div>
    </div><!--end container-->

</template>

<script>

export default {
    data() {
        return {
            datas: [
                {
                    image: require('../assets/images/wallet/metamask.png'),
                    name: 'MetaMask',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/alpha.png'),
                    name: 'Alpha',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/binance.png'),
                    name: 'Binance',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/bitski.png'),
                    name: 'Bitski',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/coinbase.png'),
                    name: 'Coinbase',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/enjin.png'),
                    name: 'Enjin',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/formatic.png'),
                    name: 'Formatic',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/pionex.png'),
                    name: 'Pionex',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/torus.png'),
                    name: 'Torus',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
                {
                    image: require('../assets/images/wallet/trustwallet.png'),
                    name: 'Trustwallet',
                    title: 'Learn about how to get the wallet and much more clicking'
                },
            ]
        }
    },
}

</script>

<style lang="scss" scoped></style>