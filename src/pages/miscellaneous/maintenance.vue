<template>
    <div>
        <!-- Start -->
        <section
            class="relative h-screen flex items-center justify-center text-center bg-[url('../../assets/images/bg/bg2.jpg')] bg-no-repeat bg-center">
            <div class="absolute inset-0 bg-slate-900/40"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
            <div class="container relative z-1">
                <div class="grid grid-cols-1">
                    <img src="../../assets/images/logo-icon-80.png" class="mx-auto" alt="">
                    <h1 class="text-white mb-6 mt-10 md:text-5xl text-3xl font-bold">Site is under maintenance</h1>
                    <p class="text-white/70 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting great
                        artists of all Giglink with their fans and unique token collectors!</p>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-10">
                    <div class="text-center">
                        <span id="maintenance" class="timer text-white font-semibold text-[56px] tracking-[1px]"></span>
                        <span class="block text-base font-semibold uppercase text-white">Minutes</span>
                    </div>
                </div><!--end grid-->

                <div class="grid grid-cols-1 mt-10">
                    <div class="text-center subcribe-form">
                        <form class="relative mx-auto max-w-xl">
                            <input type="email" id="subemail" name="name"
                                class="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white/70 dark:bg-slate-900/70 border border-gray-100 dark:border-gray-700"
                                placeholder="Enter your email id..">
                            <button type="submit"
                                class="btn absolute top-[2px] end-[3px] h-[46px] bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Subcribe
                                Now</button>
                        </form><!--end form-->
                    </div>
                </div><!--end grid-->
            </div><!--end container-->
        </section><!--end section-->
        <!-- End -->
        <switcher :back=true />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import switcher from '@/components/switcher.vue'

let timer = ref(60 * 60) // 1 hour in seconds
let minutes = ref('')
let seconds = ref('')

onMounted(() => {
    document.documentElement.classList.add('dark')
    const display = document.querySelector('#maintenance')
    setInterval(() => {
        minutes.value = String(Math.floor(timer.value / 60)).padStart(2, '0')
        seconds.value = String(timer.value % 60).padStart(2, '0')
        display.textContent = `${minutes.value}:${seconds.value}`
        timer.value--
        if (timer.value < 0) {
            timer.value = 60 * 60
        }
    }, 1000)
})
</script>

<style lang="scss" scoped></style>