<template>
    <div
        class="relative overflow-hidden rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-slate-900">
        <div class="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
            <h6 class="text-lg font-semibold">Top Creators</h6>

            <a href=""
                class="btn btn-link text-[16px] font-medium text-slate-400 hover:text-slate-900 dark:hover:text-slate-300 after:bg-slate-900 dark:after:bg-slate-300 duration-500">View
                Creators <i class="uil uil-arrow-right"></i></a>
        </div>

        <div class="relative overflow-x-auto block w-full max-h-[500px] p-4" data-simplebar>
            <ul class="list-none">
                <li v-for="item in creators" :key="item" :class="item.class">
                    <span class="flex items-center">
                        <img :src="item.image"
                            class="size-14 rounded-full border border-gray-100 dark:border-gray-800" alt="">

                        <span class="ms-3">
                            <router-link to="/creator-profile" class="font-semibold block hover:text-violet-600">{{
                    item.name
                }}</router-link>
                            <span class="text-slate-400 text-[15px] block mt-0.5">{{ item.by
                                }}</span>
                        </span>
                    </span>

                    <a href="" v-if="item.type === 'Follow'"
                        class="btn btn-sm bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 dark:hover:bg-gray-600 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full">{{
                    item.type }}</a>
                    <a href="" v-if="item.type === 'Unfollow'"
                        class="btn btn-sm bg-gray-800/10 dark:bg-gray-600 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full">{{
                    item.type }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            creators: [
                {
                    image: require('../assets/images/avatar/1.jpg'),
                    name: 'Steven Townsend',
                    by: '@StreetBoy',
                    type: 'Follow',
                    class: 'flex justify-between items-center'
                },
                {
                    image: require('../assets/images/avatar/2.jpg'),
                    name: 'Tiffany Betancourt',
                    by: '@CutieGirl',
                    type: 'Unfollow',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800'
                },
                {
                    image: require('../assets/images/avatar/3.jpg'),
                    name: 'Jacqueline Burns',
                    by: '@ButterFly',
                    type: 'Follow',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800'
                },
                {
                    image: require('../assets/images/avatar/4.jpg'),
                    name: 'Mari Harrington',
                    by: '@NorseQueen',
                    type: 'Follow',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800'
                },
                {
                    image: require('../assets/images/avatar/5.jpg'),
                    name: 'Floyd Glasgow',
                    by: '@BigBull',
                    type: 'Unfollow',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800'
                },
                {
                    image: require('../assets/images/avatar/6.jpg'),
                    name: 'Donna Schultz',
                    by: '@Angel',
                    type: 'Unfollow',
                    class: 'flex justify-between items-center mt-3 pt-3 border-t border-gray-100 dark:border-gray-800'
                },
            ],
        }
    },
}
</script>

<style lang="scss" scoped></style>