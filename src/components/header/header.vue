<template>
    <!-- Top Header -->
    <div class="top-header">
        <div class="header-bar flex justify-between">
            <div class="flex items-center space-x-1">
                <!-- Logo -->
                <a href="#" class="xl:hidden block me-2">
                    <img src="../../assets/images/logo-icon-32.png" class="md:hidden block" alt="">
                    <span class="md:block hidden">
                        <img src="../../assets/images/logo-dark.png" class="inline-block dark:hidden" alt="">
                        <img src="../../assets/images/logo-light.png" class="hidden dark:inline-block" alt="">
                    </span>
                </a>
                <!-- Logo -->

                <!-- show or close sidebar -->
                <a @click="customeClick" id="close-sidebar" class="btn btn-icon btn-sm rounded-full inline-flex bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white" href="javascript:void(0)">
                    <i data-feather="menu" class="size-4"></i>
                </a>
                <!-- show or close sidebar -->

                <!-- Searchbar -->
                <div class="ps-1.5">
                    <div class="form-icon relative sm:block hidden">
                        <i class="uil uil-search absolute top-1/2 -translate-y-1/2 start-3"></i>
                        <input type="text" class="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search...">
                    </div>
                </div>
                <!-- Searchbar -->
            </div>

            <ul class="list-none mb-0 space-x-1">
                <!-- Notification Dropdown -->
                <li class="dropdown inline-block relative me-1">
                    <button ref="dropdownToggle" @click="dropdownOpen = !dropdownOpen" class="dropdown-toggle btn btn-icon btn-sm rounded-full inline-flex bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white" type="button">
                        <i data-feather="bell" class="size-4"></i>
                        <span class="absolute top-0 end-0 flex items-center justify-center bg-emerald-600 text-white text-[10px] font-bold rounded-full size-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-emerald-600 after:top-0 after:end-0 after:rounded-full after:animate-ping"></span>
                    </button>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700"
                        v-show="dropdownOpen">
                        <span class="px-4 py-4 flex justify-between">
                            <span class="font-semibold">Notifications</span>
                            <span class="flex items-center justify-center bg-emerald-600/20 text-emerald-600 text-[10px] font-bold rounded-full w-5 max-h-5 ms-1">3</span>
                        </span>
                        <ul class="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800" data-simplebar>
                            <li>
                                <a href="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex">
                                        <div class="size-10 rounded-full shadow shadow-violet-600/10 dark:shadow-gray-700 bg-violet-600/10 dark:bg-slate-800 text-violet-600 dark:text-white flex items-center justify-center">
                                            <i data-feather="shopping-cart" class="size-4"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block">Order Complete</span>
                                            <small class="text-slate-400">15 min ago</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex">
                                        <img src="../../assets/images/client/04.jpg"
                                            class="size-10 rounded-full shadow dark:shadow-gray-700" alt="">
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block"><span class="font-bold">Message</span> from Luis</span>
                                            <small class="text-slate-400">1 hour ago</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex">
                                        <div class="size-10 rounded-full shadow shadow-violet-600/10 dark:shadow-gray-700 bg-violet-600/10 dark:bg-slate-800 text-violet-600 dark:text-white flex items-center justify-center">
                                            <i data-feather="dollar-sign" class="size-4"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block"><span class="font-bold">Received Bid</span></span>
                                            <small class="text-slate-400">2 hour ago</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex">
                                        <div class="size-10 rounded-full shadow shadow-violet-600/10 dark:shadow-gray-700 bg-violet-600/10 dark:bg-slate-800 text-violet-600 dark:text-white flex items-center justify-center">
                                            <i data-feather="truck" class="size-4"></i>
                                        </div>
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block">Please check your activities</span>
                                            <small class="text-slate-400">Yesterday</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#!" class="block font-medium py-1.5 px-4">
                                    <div class="flex">
                                        <img src="../../assets/images/client/05.jpg" class="size-10 rounded-full shadow dark:shadow-gray-700" alt="">
                                        <div class="ms-2">
                                            <span class="text-[15px] font-semibold block"><span class="font-bold">Cally</span> started following you</span>
                                            <small class="text-slate-400">2 days ago</small>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li><!--end dropdown-->
                <!-- Notification Dropdown -->

                <!-- Wallet -->
                <li class="inline-block mb-0">
                    <a @click="connect" id="connectWallet" class="btn btn-icon btn-sm rounded-full inline-flex bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i class="uil uil-wallet"></i></a> <VueMetamask ref="metamask" :initConnect="false" />
                </li>
                <!-- Wallet -->

                <!-- User/Profile Dropdown -->
                <li class="dropdown inline-block relative">
                    <button ref="dropdownToggle2" @click="dropdownOpen2 = !dropdownOpen2" class="dropdown-toggle items-center" type="button">
                        <span class="btn btn-icon btn-sm rounded-full inline-flex bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white ms-1"><img src="../../assets/images/client/05.jpg" class="rounded-full" alt=""></span>
                    </button>
                    <!-- Dropdown menu -->
                    <div class="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-48 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"  v-show="dropdownOpen2">
                        <div class="relative">
                            <div class="py-8 bg-gradient-to-tr from-violet-600 to-red-600"></div>
                            <div class="absolute px-4 -bottom-7 start-0">
                                <div class="flex items-end">
                                    <img src="../../assets/images/client/05.jpg" class="rounded-full w-10 h-10 shadow dark:shadow-gray-700" alt="">

                                    <span class="font-semibold text-[15px] ms-1">Jenny Jimenez</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-10 px-4">
                            <h5 class="font-semibold text-[15px]">Wallet:</h5>
                            <div class="flex items-center justify-between">
                                <span class="text-[13px] text-slate-400">qhut0...hfteh45</span>
                                <a href="" class="text-violet-600"><i class="uil uil-copy"></i></a>
                            </div>
                        </div>

                        <div class="mt-4 px-4">
                            <h5 class="text-[15px]">Balance: <span class="text-violet-600 font-semibold">0.00045ETH</span></h5>
                        </div>

                        <ul class="py-2 text-start">
                            <li>
                                <router-link to="/creator-profile" class="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"><i  class="uil uil-user text-[16px] align-middle me-1"></i> Profile</router-link>
                            </li>
                            <li>
                                <router-link to="/creator-profile-setting"  class="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600"><i class="uil uil-setting text-[16px] align-middle me-1"></i> Settings</router-link>
                            </li>
                            <li class="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                            <li>
                                <a href="#" @click.prevent="handleLogout" class="block text-[14px] font-semibold py-1.5 px-4 hover:text-violet-600">
                                    <i class="uil uil-sign-out-alt text-[16px] align-middle me-1"></i> Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </li><!--end dropdown-->
                <!-- User/Profile Dropdown -->
            </ul>
        </div>
    </div>
    <!-- Top Header -->
</template>

<script>
import feather from 'feather-icons'
import vClickOutside from 'v-click-outside';
import VueMetamask from 'vue-metamask';
import { useAuthStore } from '@/stores/authStore'

export default {
    props: ['customeClick'],
    directives: {
        clickOutside: vClickOutside.directive,
    },
    data() {
        return {
            dropdownOpen: false,
            dropdownOpen2: false,
            metamask: null,
            isActive: false
        }
    },
    components:{
        VueMetamask
    },
    mounted() {
        document.addEventListener('click', this.handleClickOutside);
        document.addEventListener('click', this.handleClickOutside2);
        feather.replace(),
        this.scrollToTop()
    },
    unmounted() {
        document.removeEventListener('click', this.handleClickOutside);
        document.removeEventListener('click', this.handleClickOutside2);
    },
    methods: {
        handleClickOutside(event) {
            if (!this.$refs.dropdownToggle.contains(event.target)) {
                this.dropdownOpen = false;
            }
        },
        handleClickOutside2(event) {
            if (!this.$refs.dropdownToggle2.contains(event.target)) {
                this.dropdownOpen2 = false;
            }
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },
        connect() {
            if (window.ethereum) {
                window.ethereum.enable().then(() => {
                }).catch((error) => {
                    console.error(error);
                });
            } else {
                this.toggles();
                // const metaMaskInstallLink = "https://metamask.io/download/";
                // window.open(metaMaskInstallLink, "_blank");
            }
        },

        toggles() {
            this.isActive = !this.isActive;
        },
        async handleLogout() {
            const authStore = useAuthStore()
            await authStore.logout()
            this.$router.push('/login')
        },
    }
}
</script>

<style lang="scss" scoped></style>