<template>
    <div>
        <!-- Start -->
        <section class="relative h-screen flex items-center justify-center text-center bg-gray-50 dark:bg-slate-800">
            <div class="container relative">
                <div class="grid grid-cols-1">
                    <div class="title-heading text-center my-auto">
                        <div
                            class="size-24 bg-violet-600/5 text-violet-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                            <i class="uil uil-thumbs-up"></i>
                        </div>
                        <h1 class="mt-6 mb-8 md:text-5xl text-3xl font-bold">Thank You</h1>
                        <p class="text-slate-400 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great
                            artists of all Giglink with their fans and unique token collectors!</p>

                        <div class="mt-6">
                            <router-link to="/"
                                class="btn bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white rounded-full">Back
                                to Home</router-link>
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
import { onMounted } from 'vue'
import switcher from '@/components/switcher.vue'

onMounted(() => {
    document.documentElement.classList.add('dark')
})
</script>

<style lang="scss" scoped></style>