<template>
        <div v-for="(item, index) in data" :key="index"
            class="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 overflow-hidden ease-in-out duration-500 w-full mx-auto xl:max-w-2xl">
            <div class="lg:flex">
                <div class="relative md:shrink-0">
                    <img class="h-full w-full object-cover lg:w-48" :src="item.mainimage" alt="">
                </div>
                <div class="p-6 w-full">
                    <ul class="flex justify-between items-center list-none pb-6">
                        <li class="block items-center">
                            <span
                                class="bg-slate-900 text-white dark:bg-slate-800 text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">Listing</span>
                            <span class="text-slate-400 text-sm ms-2">{{ item.time }}</span>
                        </li>
                        <li>
                            <a href="javascript:void(0)"
                                class="text-lg rounded-full text-gray-300 dark:text-gray-800 hover:text-red-600 focus:text-red-600 dark:hover:text-red-600 dark:focus:text-red-600"><i
                                    class="mdi mdi-heart"></i></a>
                        </li>
                    </ul>

                    <router-link :to="{ name: 'item-detail', params: { id: item.id } }" class="font-semibold">{{ item.title }}
                    </router-link>

                    <div class="pt-6">
                        <router-link :to="{ name: 'item-detail', params: { id: item.id } }"
                            class="btn btn-sm rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white">Buy
                            now for $15</router-link>
                    </div>
                </div>
            </div>
        </div>
</template>

<script setup>

import { ref } from 'vue';
let data = ref(
    [
            {
                id: 18,
                mainimage: require('../assets/images/items/1.gif'),
                type: 'Listing',
                time: '3min 50sec ago',
                title: "QUEEN'S COURT - Silver Card #72/250 was put up for sale for"
            },
            {
                id: 1,
                mainimage: require('../assets/images/items/1.jpg'),
                type: 'Sale',
                time: '3min 50sec ago',
                title: 'ethkun #5001 was sold for $9.27.'
            },
            {
                id: 3,
                mainimage: require('../assets/images/items/2.jpg'),
                type: 'Offer',
                time: '3min 50sec ago',
                title: 'A global offer of $100.00 was placed for FACES'
            },
            {
                id: 4,
                mainimage: require('../assets/images/items/3.jpg'),
                type: 'Deposit',
                time: '3min 50sec ago',
                title: 'Anatomy Science Ape Club #1113 was sold for $32.87.'
            },
        ]
)
 
</script>

<style lang="scss" scoped></style>