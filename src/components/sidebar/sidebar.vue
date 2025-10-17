<template>
    <nav id="sidebar" class="sidebar-wrapper">
        <div class="sidebar-content">
            <div class="sidebar-brand">
                <router-link to="/">
                    <img src="../../assets/images/logo-dark.png" height="24" class="block dark:hidden" alt="">
                    <img src="../../assets/images/logo-light.png" height="24" class="hidden dark:block" alt="">
                </router-link>
            </div>

            <ul class="sidebar-menu border-t dark:border-white/10 border-gray-100" data-simplebar style="height: calc(100% - 70px);">
                <li :class="activeIndex === '/' ? 'active' : ''" class="">
                    <router-link to="/"><i data-feather="airplay" class="size-4 me-3"></i>Dashboard</router-link>
                </li>

                <li class="sidebar-dropdown" :class="['/exploreitem', '/explore', '/item-detail', '/upload-work'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/exploreitem' ? '' : '/exploreitem')"><i data-feather="image" class="size-4 me-3"></i>Explore Items</router-link>
                    <div class="sidebar-submenu" :class="['/exploreitem', '/explore', '/item-detail', '/upload-work'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/explore' ? 'active' : ''"><router-link to="/explore">Explore</router-link></li>
                            <li :class="activeIndex === '/item-detail' ? 'active' : ''"><router-link to="/item-detail">Item Detail</router-link></li>
                            <li :class="activeIndex === '/upload-work' ? 'active' : ''"><router-link to="/upload-work">Upload Item</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="" :class="activeIndex === '/auction' ? 'active' : ''">
                    <router-link to="/auction"><i data-feather="film" class="size-4 me-3"></i>Live Auction</router-link>
                </li>

                <li class="" :class="activeIndex === '/wallet' ? 'active' : ''">
                    <router-link to="/wallet"><i data-feather="wifi" class="size-4 me-3"></i>Connect Wallet</router-link>
                </li>

                <li class="" :class="activeIndex === '/collection' ? 'active' : ''">
                    <router-link to="/collection"><i data-feather="copy" class="size-4 me-3"></i>Collections</router-link>
                </li>

                <li class="sidebar-dropdown" :class="['/creator', '/creators', '/creator-profile', '/creator-profile-setting', '/become-creator'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/creator' ? '' : '/creator')"><i data-feather="users" class="size-4 me-3"></i>Creators</router-link>
                    <div class="sidebar-submenu" :class="['/creator', '/creators', '/creator-profile', '/creator-profile-setting', '/become-creator'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/creators' ? 'active' : ''"><router-link to="/creators">Creators</router-link></li>
                            <li :class="activeIndex === '/creator-profile' ? 'active' : ''"><router-link to="/creator-profile">Profile</router-link></li>
                            <li :class="activeIndex === '/creator-profile-setting' ? 'active' : ''"><router-link to="/creator-profile-setting">Profile Setting</router-link></li>
                            <li :class="activeIndex === '/become-creator' ? 'active' : ''"><router-link to="/become-creator">Become Creator</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/blogs', '/blog', '/blog-detail'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/blogs' ? '' : '/blogs')"><i data-feather="file-text" class="size-4 me-3"></i>Blog</router-link>
                    <div class="sidebar-submenu" :class="['/blogs', '/blog', '/blog-detail'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/blog' ? 'active' : ''"><router-link to="/blog">Blogs</router-link></li>
                            <li :class="activeIndex === '/blog-detail' ? 'active' : ''"><router-link to="/blog-detail">Blog Detail</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/pages', '/starter', '/faqs', '/privacy', '/terms'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/pages' ? '' : '/pages')"><i data-feather="file" class="size-4 me-3"></i>Pages</router-link>
                    <div class="sidebar-submenu" :class="['/pages', '/starter', '/faqs', '/privacy', '/terms'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/starter' ? 'active' : ''"><router-link to="/starter">Starter</router-link></li>
                            <li :class="activeIndex === '/faqs' ? 'active' : ''"><router-link to="/faqs">FAQs</router-link></li>
                            <li :class="activeIndex === '/privacy' ? 'active' : ''"><router-link to="/privacy">Privacy Policy</router-link></li>
                            <li :class="activeIndex === '/terms' ? 'active' : ''"><router-link to="/terms">Term & Condition</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/authentication', '/login', '/signup', '/signup-success', '/reset-password', '/lock-screen'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/authentication' ? '' : '/authentication')"><i data-feather="log-in" class="size-4 me-3"></i>Authentication</router-link>
                    <div class="sidebar-submenu" :class="['/authentication', '/login', '/signup', '/signup-sucess', '/reset-password', '/lock-screen'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/login' ? 'active' : ''"><router-link to="/login">Login</router-link></li>
                            <li :class="activeIndex === '/signup' ? 'active' : ''"><router-link to="/signup">Signup</router-link></li>
                            <li :class="activeIndex === '/signup-success' ? 'active' : ''"><router-link to="/signup-success">Signup Success</router-link></li>
                            <li :class="activeIndex === '/reset-password' ? 'active' : ''"><router-link to="/reset-password">Reset Password</router-link></li>
                            <li :class="activeIndex === '/lock-screen' ? 'active' : ''"><router-link to="/lock-screen">Lockscreen</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/miscellaneous', '/comingsoon', '/maintenance', '/error', '/thankyou'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/miscellaneous' ? '' : '/miscellaneous')"><i data-feather="layers" class="size-4 me-3"></i>Miscellaneous</router-link>
                    <div class="sidebar-submenu" :class="['/miscellaneous', '/comingsoon', '/maintenance', '/error', '/thankyou'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/comingsoon' ? 'active' : ''"><router-link to="/comingsoon">Comingsoon</router-link></li>
                            <li :class="activeIndex === '/maintenance' ? 'active' : ''"><router-link to="/maintenance">Maintenance</router-link></li>
                            <li :class="activeIndex === '/error' ? 'active' : ''"><router-link to="/error">Error</router-link></li>
                            <li :class="activeIndex === '/thankyou' ? 'active' : ''"><router-link to="/thankyou">Thank You</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="" :class="activeIndex === '/user-list' ? 'active' : ''">
                    <router-link to="/user-list"><i data-feather="users" class="size-4 me-3"></i>User Management</router-link>
                </li>

                <li class="sidebar-dropdown" :class="['/productitem', '/product-list', '/product-detail', '/upload-product'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/productitem' ? '' : '/productitem')"><i data-feather="package" class="size-4 me-3"></i>Produk</router-link>
                    <div class="sidebar-submenu" :class="['/productitem', '/product-list', '/product-detail', '/upload-product'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/product-list' ? 'active' : ''"><router-link to="/product-list">Daftar Produk</router-link></li>
                            <!-- <li :class="activeIndex === '/product-detail' ? 'active' : ''"><router-link to="/product-detail">Product Detail</router-link></li> -->
                            <li :class="activeIndex === '/upload-product' ? 'active' : ''"><router-link to="/upload-product">Upload Produk</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/licenseitem', '/license-list', '/license-detail', '/upload-license'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/licenseitem' ? '' : '/licenseitem')"><i data-feather="package" class="size-4 me-3"></i>Lisensi</router-link>
                    <div class="sidebar-submenu" :class="['/licenseitem', '/license-list', '/license-detail', '/upload-license'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/license-list' ? 'active' : ''"><router-link to="/license-list">Daftar Lisensi</router-link></li>
                            <!-- <li :class="activeIndex === '/license-detail' ? 'active' : ''"><router-link to="/license-detail">Lisensi Detail</router-link></li> -->
                            <li :class="activeIndex === '/upload-license' ? 'active' : ''"><router-link to="/upload-license">Upload Lisensi</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/workshopitem', '/workshop', '/workshop-detail', '/upload-workshop'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/workshopitem' ? '' : '/workshopitem')"><i data-feather="users" class="size-4 me-3"></i>Workshop</router-link>
                    <div class="sidebar-submenu" :class="['/workshopitem', '/workshop', '/workshop-detail', '/upload-workshop'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/workshop' ? 'active' : ''"><router-link to="/workshop">Daftar Workshop</router-link></li>
                            <!-- <li :class="activeIndex === '/workshop-detail' ? 'active' : ''"><router-link to="/workshop-detail">Workshop Detail</router-link></li> -->
                            <li :class="activeIndex === '/upload-workshop' ? 'active' : ''"><router-link to="/upload-workshop">Tambah Workshop</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="sidebar-dropdown" :class="['/technicianitem', '/technician', '/technician-detail', '/upload-technician'].includes(activeIndex) ? 'active' : ''">
                    <router-link to="" @click="submenu(openMenu === '/technicianitem' ? '' : '/technicianitem')"><i data-feather="users" class="size-4 me-3"></i>Teknisi</router-link>
                    <div class="sidebar-submenu" :class="['/technicianitem', '/technician', '/technician-detail', '/upload-technician'].includes(openMenu) ? 'block' : ''">
                        <ul>
                            <li :class="activeIndex === '/technician' ? 'active' : ''"><router-link to="/technician">Daftar Teknisi</router-link></li>
                            <!-- <li :class="activeIndex === '/technician-detail' ? 'active' : ''"><router-link to="/technician-detail">Technician Detail</router-link></li> -->
                            <li :class="activeIndex === '/upload-technician' ? 'active' : ''"><router-link to="/upload-technician">Tambah Teknisi</router-link></li>
                        </ul>
                    </div>
                </li>

                <li class="relative lg:mx-8 lg:mt-8 mx-6 mt-6 p-6 rounded-lg bg-gradient-to-b to-transparent from-gray-50 dark:from-slate-800 text-center">
                    <span class="relative z-10">
                        <img src="../../assets/images/creator.png" class="w-32 mx-auto" alt="">
                        <span class="text-lg font-semibold h5">Subscribe Now</span>

                        <span class="text-slate-400 mt-3 mb-5 block">Get one month free and subscribe to pro</span>

                        <a href="https://1.envato.market/giglink-vue" target="_blank" class="btn inline-block text-center bg-gray-100/5 hover:bg-gray-100 border-gray-100 dark:border-gray-100/5 hover:border-gray-100 text-slate-900 dark:text-white dark:hover:text-slate-900 rounded-md">Subscribe</a>
                    </span>
                </li>
            </ul>
            <!-- sidebar-menu  -->
        </div>
    </nav>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import feather from 'feather-icons'

const activeIndex = computed(() => window.location.pathname);
const menu = ref('');
const openMenu = ref('')

function submenu(item) {
    menu.value = !menu.value
    openMenu.value = item
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => {
    feather.replace()
    scrollToTop()
    openMenu.value = activeIndex.value
})
</script>

<style lang="scss" scoped></style>