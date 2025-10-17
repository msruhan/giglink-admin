<template>
    <div>
        <section class="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center">
            <div class="absolute top-0 start-0 w-full h-full z-0 pointer-events-none overflow-hidden">
                <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0"
                    class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe>
                <!--Note: Vimeo Embed Background Video-->

                <!-- <iframe src="https://www.youtube.com/embed/yba7hPeTSjk?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1" class="absolute top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 w-screen h-[56.25vw] min-h-screen min-w-[177.77vw]"></iframe> -->
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
                        <h5 class="my-6 text-xl font-semibold">Reset Your Password</h5>
                        <div class="grid grid-cols-1">
                            <p class="text-slate-400 mb-6">Please enter your email address. You will receive a link to
                                create a new password via email.</p>
                            <form class="text-start">
                                <div class="grid grid-cols-1">
                                    <div class="mb-4">
                                        <label class="font-semibold" for="LoginEmail">Email Address:</label>
                                        <input id="LoginEmail" type="email"
                                            class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3"
                                            placeholder="name@example.com">
                                    </div>

                                    <div class="mb-4">
                                        <input type="submit"
                                            class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full"
                                            value="Send">
                                    </div>

                                    <div class="text-center">
                                        <span class="text-slate-400 me-2">Remember your password ? </span><router-link
                                            to="/login" class="text-black dark:text-white font-bold">Sign in</router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section><!--end section -->
        <switcher :back=true />
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import switcher from '@/components/switcher.vue'

onMounted(() => {
    darkmode()
})

function darkmode() {
    document.documentElement.classList.add('dark');
}

</script>

<style lang="scss" scoped></style>