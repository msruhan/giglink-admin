<template>
    <div>
        <section class="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center">
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div class="container relative z-1">
                <div class="flex justify-center">
                    <div
                        class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <div class="text-center">
                            <img src="../../assets/images/client/05.jpg"
                                class="mx-auto size-28 rounded-full shadow dark:shadow-gray-800" alt="">
                            <h5 class="mb-6 mt-4 text-xl font-semibold">Jenny Jimenez</h5>
                        </div>
                        <form action="/creator-profile">
                            <div class="grid grid-cols-1">
                                <div class="mb-4">
                                    <label class="font-semibold" for="LoginPassword">Password:</label>
                                    <input id="LoginPassword" type="password"
                                        class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                                        required="" placeholder="Password:">
                                </div>

                                <div class="flex justify-between mb-4">
                                    <div class="inline-flex items-center mb-0">
                                        <input
                                            class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2"
                                            type="checkbox" value="" id="RememberMe">
                                        <label class="form-checkbox-label text-slate-400" for="RememberMe">Remember
                                            me</label>
                                    </div>
                                    <p class="text-slate-400 mb-0"><router-link to="/reset-password"
                                            class="text-slate-400">Forgot password ?</router-link></p>
                                </div>

                                <div class="mb-4">
                                    <input type="submit"
                                        class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full"
                                        value="Login / Sign in">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section><!--end section -->
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