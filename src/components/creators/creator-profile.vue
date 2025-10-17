<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Jenny Jimenez</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Profile</li>
                </ul>
            </div>

            <div class="container-fluid mt-6">
                <div
                    class="group profile-banner relative overflow-hidden text-transparent rounded-xl shadow dark:shadow-gray-700">
                    <input id="pro-banner" name="profile-banner" type="file" class="hidden" @change="loadFile" />
                    <div class="relative shrink-0">
                        <img :src="imageSrc" class="h-80 w-full object-cover" id="profile-banner" alt="">
                        <div class="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/40 transition duration-500">
                        </div>
                        <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-12 gap-6 mt-6">
                <div class="lg:col-span-3 md:col-span-4">
                    <div class="pt-4 px-4 -mt-20">
                        <div class="group profile-pic w-[112px]">
                            <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile2" />
                            <div>
                                <div
                                    class="relative size-28 rounded-full shadow-md dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                                    <img :src="imageSrc2" class="rounded-full" id="profile-image" alt="">
                                    <div class="absolute inset-0 group-hover:bg-slate-900/40 transition duration-500">
                                    </div>
                                    <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                                </div>
                            </div>
                        </div>

                        <div class="mt-4">
                            <h5 class="text-lg font-semibold">Jenny Jimenez <i class="mdi mdi-check-decagram text-emerald-600 align-middle text-lg"></i></h5>
                            <p class="text-slate-400 text-[16px] mt-1">Created by <a href="" class="text-violet-600 font-semibold">1x5484dcdvcdscds56c4</a></p>

                            <div class="mt-3">
                                <a href="javascript:void(0)" class="btn btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white me-2"><i class="mdi mdi-plus"></i> Follow me</a>
                                <router-link to="/creator-profile-setting" class="btn btn-icon btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><i class="mdi mdi-cog"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div><!--end col-->

                <div class="lg:col-span-9 md:col-span-8">
                    <div class="grid grid-cols-1 gap-6">
                        <div class="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
                            <div class="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                <div
                                    class="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                    <i data-feather="user-check" class="size-6"></i>
                                </div>

                                <div class="ms-3">
                                    <h5 class="font-semibold text-slate-400">Followers</h5>
                                    <h5 class="font-semibold text-lg">4785</h5>
                                </div>
                            </div><!--end content-->

                            <div class="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                <div
                                    class="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                    <i data-feather="user-plus" class="size-6"></i>
                                </div>

                                <div class="ms-3">
                                    <h5 class="font-semibold text-slate-400">Following</h5>
                                    <h5 class="font-semibold text-lg">1246</h5>
                                </div>
                            </div><!--end content-->

                            <div class="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                <div
                                    class="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                    <i data-feather="image" class="size-6"></i>
                                </div>

                                <div class="ms-3">
                                    <h5 class="font-semibold text-slate-400">Items</h5>
                                    <h5 class="font-semibold text-lg">18</h5>
                                </div>
                            </div><!--end content-->

                            <div class="group relative overflow-hidden flex items-center p-4 rounded-lg bg-white dark:bg-slate-900 border border-gray-100 dark:border-gray-800">
                                <div
                                    class="flex items-center justify-center size-16 rounded-md bg-violet-600/10 text-violet-600">
                                    <i data-feather="dollar-sign" class="size-6"></i>
                                </div>

                                <div class="ms-3">
                                    <h5 class="font-semibold text-slate-400">Revenue</h5>
                                    <h5 class="font-semibold text-lg">500+USD</h5>
                                </div>
                            </div><!--end content-->
                        </div>

                        <h3 class="text-lg font-semibold">Explore Items</h3>

                        <explore :explores=true />

                        <h3 class="text-lg font-semibold">Activities</h3>

                        <div class="grid xl:grid-cols-2 grid-cols-1 gap-6">
                            <activities />
                            <!-- End Content -->
                        </div>
                    </div>
                </div><!--end col-->
            </div>
            <!-- End Content -->
        </div>
    </div><!--end container-->
</template>

<script>
import explore from '@/components/explore-item.vue';
import activities from '@/components/activities.vue'
export default {
    data() {
        return {
            imageSrc: require('../../assets/images/blog/single.jpg'),
            image: '',
            imageSrc2: require('../../assets/images/avatar/1.jpg'),
            image2: '',
        }
    },
    components: {
        explore,
        activities
    },
    methods: {
        loadFile(event) {
            this.image = document.getElementById(event.target.name)
            this.imageSrc = URL.createObjectURL(event.target.files[0])
        },
        loadFile2(event) {
            this.image2 = document.getElementById(event.target.name)
            this.imageSrc2 = URL.createObjectURL(event.target.files[0])
        },
    }
}
</script>

<style lang="scss" scoped></style>