<template>
    <div>
        <!-- Start -->
        <section class="relative bg-[url('../../assets/images/bg/bg2.jpg')] bg-no-repeat bg-center">
            <div class="absolute inset-0 bg-slate-900/40"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900"></div>
            <div class="container-fluid relative">
                <div class="grid grid-cols-1">
                    <div class="flex flex-col min-h-screen justify-center md:px-10 py-10 px-4">
                        <div class="text-center">
                            <img src="../../assets/images/logo-white.png" class="mx-auto h-7" alt="">
                        </div>
                        <div class="title-heading text-center my-auto">
                            <div class="md:my-0 my-10">
                                <div
                                    class="wave-effect relative tracking-[10px] mb-6 md:text-5xl text-3xl font-bold text-white">
                                    <span class="relative inline-block" style="--a:1">C</span>
                                    <span class="relative inline-block" style="--a:2">O</span>
                                    <span class="relative inline-block" style="--a:3">M</span>
                                    <span class="relative inline-block" style="--a:4">I</span>
                                    <span class="relative inline-block" style="--a:5">N</span>
                                    <span class="relative inline-block" style="--a:6">G</span>
                                    <span class="relative inline-block" style="--a:7">S</span>
                                    <span class="relative inline-block" style="--a:8">O</span>
                                    <span class="relative inline-block" style="--a:9">O</span>
                                    <span class="relative inline-block" style="--a:10">N</span>
                                </div>
                                <p class="text-white/70 max-w-xl mx-auto">We are a huge marketplace dedicated to connecting
                                    great artists of all Giglink with their fans and unique token collectors!</p>

                                <div id="countdown">
                                    <ul class="count-down list-none inline-block text-white text-center mt-8">
                                        <li id="days" class="count-number inline-block m-2">{{ days }}<p class="count-head">
                                                Days
                                            </p>
                                        </li>
                                        <li id="hours" class="count-number inline-block m-2">{{ hours }}<p
                                                class="count-head">
                                                Hours</p>
                                        </li>
                                        <li id="mins" class="count-number inline-block m-2">{{ minutes }}<p
                                                class="count-head">
                                                minutes</p>
                                        </li>
                                        <li id="secs" class="count-number inline-block m-2">{{ seconds }}<p
                                                class="count-head">
                                                seconds</p>
                                        </li>
                                        <li id="end" class="h1"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="mb-0 text-white">© {{ date1 }} Giglink. Design & Develop with <i
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
import { ref, computed, watch, onMounted } from 'vue'
import switcher from '@/components/switcher.vue'

const date1 = ref(new Date().getFullYear())
const now = ref(new Date().getTime())
const targetTime = ref(new Date("Sep 26, 2025 00:00:00").getTime())
const difference = ref(0)

const days = computed(() => Math.floor(difference.value / (1000 * 60 * 60 * 24)))
const hours = computed(() => 23 - new Date(now.value).getHours())
const minutes = computed(() => 60 - new Date(now.value).getMinutes())
const seconds = computed(() => 60 - new Date(now.value).getSeconds())

watch(now, () => {
    difference.value = targetTime.value - now.value
})

function updateNow() {
    now.value = new Date().getTime()
}

updateNow()
setInterval(updateNow, 1000)

onMounted(() => {
    document.documentElement.classList.add('dark')
})
</script>

<style lang="scss" scoped></style>