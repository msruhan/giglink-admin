<template>
    <div>
        <section class="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center">
            <div class="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"
                    class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
                <!--Note: Vimeo Embed Background Video-->

                <!-- <iframe src="https://www.youtube.com/embed/S_CGed6E610?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe> -->
                <!--Note: Youtube Embed Background Video-->
            </div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
            <div class="container relative z-1">
                <div class="flex justify-center">
                    <div
                        class="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
                        <a href="">
                            <img src="../../assets/images/logo-dark.png" class="mx-auto h-7 block dark:hidden" alt="">
                            <img src="../../assets/images/logo-light.png" class="mx-auto h-7 dark:block hidden" alt="">
                        </a>
                        <h5 class="my-6 text-xl font-semibold">Login</h5>
                        <form class="text-start" @submit="handleLogin">
                            <div class="grid grid-cols-1">
                                <div class="mb-4">
                                    <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                    <input id="LoginEmail" type="email" v-model="email"
                                        class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                                        placeholder="name@example.com">
                                </div>

                                <div class="mb-4">
                                    <label class="font-semibold" for="LoginPassword">Password:</label>
                                    <input id="LoginPassword" type="password" v-model="password"
                                        class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                                        placeholder="Password:">
                                </div>

                                <div v-if="authStore.error" class="mb-4 text-red-500 text-sm">{{ authStore.error }}</div>

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

                                <div class="text-center">
                                    <span class="text-slate-400 me-2">Don't have an account ?</span> <router-link
                                        to="/signup" class="text-black dark:text-white font-bold">Sign Up</router-link>
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
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';
import switcher from '@/components/switcher.vue'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

onMounted(() => {
    darkmode()
})

function darkmode() {
    document.documentElement.classList.add('dark');
}

async function handleLogin(e) {
    e.preventDefault()
    await authStore.login(email.value, password.value)
    if (authStore.success) {
        router.push('/beranda') // redirect to /beranda after login
    }
}
</script>

<style lang="scss" scoped></style>