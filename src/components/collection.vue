<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Collections</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Collection</li>
                </ul>
            </div>

            <div class="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                <div v-for="item in datas" :key="item" class="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-lg p-3 shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 hover:scale-105 ease-in-out duration-500">
                    <img :src="item.mainimage" class="rounded-lg" alt="">

                    <div class="relative p-4 -mt-14">
                        <div class="relative inline-block">
                            <img :src="item.image" class="h-16 rounded-md shadow-md dark:shadow-gray-800" alt="">
                            <i class="mdi mdi-check-decagram text-emerald-600 text-2xl absolute -bottom-3 -end-2"></i>
                        </div>

                        <div class="mt-3">
                            <router-link to="/explore" class="font-semibold block text-[18px] hover:text-violet-600">{{ item.name }}</router-link>
                            <span class="text-slate-400 mt-1 text-sm"><span class="italic">by</span> <router-link to="/creator-profile" class="text-violet-600 font-medium">{{ item.by }}</router-link></span>
                            <span class="text-slate-400 block text-[16px] mt-1">{{ item.item }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <pagination />
            <!-- End Content -->
        </div>
    </div><!--end container-->
</template>

<script>
import pagination from '@/components/pagination.vue'
export default {
    data() {
        return {
            datas: [
                {
                    mainimage: require('../assets/images/items/1.jpg'),
                    image: require('../assets/images/avatar/1.jpg'),
                    name: 'Digital Collection',
                    by: '@CutieGirl',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/2.gif'),
                    image: require('../assets/images/avatar/2.jpg'),
                    name: 'GIF Collection',
                    by: '@ButterFly',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/3.jpg'),
                    image: require('../assets/images/avatar/3.jpg'),
                    name: 'Sports Collection',
                    by: '@NorseQueen',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/4.jpg'),
                    image: require('../assets/images/avatar/4.jpg'),
                    name: 'Photography Collection',
                    by: '@BigBull',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/5.jpg'),
                    image: require('../assets/images/avatar/5.jpg'),
                    name: 'Illustrations Collection',
                    by: '@Angel',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/6.jpg'),
                    image: require('../assets/images/avatar/6.jpg'),
                    name: 'Animations Collection',
                    by: '@CrazyAnyone',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/7.jpg'),
                    image: require('../assets/images/avatar/7.jpg'),
                    name: 'Virtual Reality Collection',
                    by: '@Princess',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/8.gif'),
                    image: require('../assets/images/avatar/8.jpg'),
                    name: 'Cartoon Collection',
                    by: '@LooserBad',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/10.jpg'),
                    image: require('../assets/images/avatar/5.jpg'),
                    name: 'Photography Collection',
                    by: '@BigBull',
                    item: '25 Items'
                },
                {
                    mainimage: require('../assets/images/items/12.jpg'),
                    image: require('../assets/images/avatar/8.jpg'),
                    name: 'Illustrations Collection',
                    by: '@Angel',
                    item: '25 Items'
                },
            ]
        }
    },
    components: {
        pagination
    }
}

</script>

<style lang="scss" scoped></style>