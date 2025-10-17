<template>
    <div class="grid grid-cols-1 mt-6">
        <div
            class="relative overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900">
            <div class="p-4 border-b border-gray-100 dark:border-gray-800">
                <h6 class="text-lg font-semibold">Recently Added</h6>
            </div>

            <div class="relative overflow-x-auto block w-full max-h-[412px] p-4" data-simplebar>
                <ul class="list-none">
                    <li v-for="item in recently" :key="item" :class="item.class">
                        <span class="flex items-center">
                            <img :src="item.image"
                                class="size-20 rounded-lg border border-gray-100 dark:border-gray-800" alt="">

                            <span class="ms-3">
                                <router-link to="/creator-profile" class="font-semibold block hover:text-violet-600">{{
                        item.name }}</router-link>
                                <span class="text-slate-400 text-[15px] block mt-0.5">{{ item.title }}</span>
                            </span>
                        </span>

                        <span class="w-20 sm:w-[140px]">
                            <router-link to="/item-detail">
                                <span
                                    class="btn btn-sm bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 dark:hover:bg-gray-600 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full sm:inline-flex hidden me-1"><i
                                        class="mdi mdi-lightning-bolt"></i> Bid Now</span>

                                <span
                                    class="btn btn-icon btn-sm rounded-full bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 dark:hover:bg-gray-600 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white sm:hidden inline-flex"><i
                                        class="mdi mdi-lightning-bolt"></i></span>
                            </router-link>
                            <a href="javascript:void(0)"
                                class="btn btn-icon btn-sm rounded-full bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 dark:hover:bg-gray-600 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white"><i
                                    class="mdi mdi-plus"></i></a>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            recently: [
                {
                    image: require('../assets/images/items/1.jpg'),
                    name: 'Genuine Undead #3902',
                    class: 'flex justify-between items-center',
                    title: 'Steven Townsend'
                },
                {
                    image: require('../assets/images/items/2.jpg'),
                    name: 'Windchime #768',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800',
                    title: 'Tiffany Betancourt'
                },
                {
                    image: require('../assets/images/items/3.jpg'),
                    name: 'Probably A Label #3277',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800',
                    title: 'Jacqueline Burns'
                },
                {
                    image: require('../assets/images/items/2.gif'),
                    name: 'Probably A Label #1711',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800',
                    title: 'Mari Harrington'
                },
                {
                    image: require('../assets/images/items/4.jpg'),
                    name: 'Shibuya Scramble Punks',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800',
                    title: 'Floyd Glasgow'
                },
                {
                    image: require('../assets/images/items/3.gif'),
                    name: 'Probably A Label #650',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800',
                    title: 'Donna Schultz'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>