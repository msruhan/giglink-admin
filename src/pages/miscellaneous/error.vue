<template>
    <div>
        <!-- Start -->
        <section class="relative bg-violet-600/5">
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <img src="../../assets/images/logo-icon-64.png" class="mx-auto" alt="">
                        </div>
                        <div class="title-heading text-center my-auto">
                            <div class="md:my-0 my-10">
                                <img src="../../assets/images/error.png" class="mx-auto" alt="">
                                <h1 class="my-6 md:text-5xl text-3xl font-bold">Page Not Found?</h1>
                                <p class="text-slate-400">Whoops, this is embarassing. <br> Looks like the page you were
                                    looking for wasn't found.</p>

                                <div class="mt-6">
                                    <router-link to="/"
                                        class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Back
                                        to Home</router-link>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-slate-400">© {{ date }} Giglink. Design & Develop with <i
                                    class="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/"
                                    target="_blank" class="text-reset">Shreethemes</a>.</p>
                        </div>
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <switcher :back=true />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import switcher from '@/components/switcher.vue'

const date = new Date().getFullYear()

onMounted(() => {
    document.documentElement.classList.add('dark')
})
</script>

<style lang="scss" scoped></style>