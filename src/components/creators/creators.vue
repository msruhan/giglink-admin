<template>
    <div>
        <div class="container-fluid relative px-3">
            <div class="layout-specing">
                <!-- Start Content -->
                <div class="md:flex justify-between items-center">
                    <h5 class="text-lg font-semibold">Creators</h5>

                    <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                        <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                            <router-link to="/">Giglink</router-link>
                        </li>
                        <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Creators</li>
                    </ul>
                </div>

                <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    <div v-for="(item, index) in datas" :key="index" class="group relative overflow-hidden bg-gray-50 dark:bg-slate-900 rounded-md shadow hover:shadow-md dark:shadow-gray-800 dark:hover:shadow-gray-800 ease-in-out duration-500 hover:-mt-2 h-fit">
                        <div class="flex justify-between items-center p-3">
                            <div class="flex items-center">
                                <div class="relative inline-block">
                                    <img :src="item.image" class="h-16 rounded-md" alt="">
                                    <i class="mdi mdi-check-decagram text-emerald-600 text-lg absolute -top-2 -end-2"></i>
                                </div>

                                <div class="ms-3">
                                    <router-link to="/creator-profile" class="font-semibold block hover:text-violet-600">{{item.name }}</router-link>
                                    <span class="text-slate-400 text-sm block mt-1">{{ item.by }}</span>
                                </div>
                            </div>

                            <a href="" class="btn btn-icon rounded-full bg-violet-600/5 hover:bg-violet-600 border-violet-600/10 hover:border-violet-600 text-violet-600 hover:text-white"><i class="uil uil-user-plus text-[20px]"></i></a>
                        </div>

                        <div class="p-2 border-t dark:border-t-gray-700">
                            <div class="flex items-center">
                                <div class="w-1/2 p-1">
                                    <a @click="showLightbox(item.subid)" class="rounded-md lightbox cursor-pointer">
                                        <img :src="item.img" class="rounded-md" alt="">
                                    </a>
                                </div>
                                <div class="w-1/2 p-1">
                                    <a @click="showLightbox(item.subid2)" class="rounded-md lightbox cursor-pointer">
                                        <img :src="item.imgjpg" class="rounded-md" alt="">
                                    </a>
                                </div>
                                <div class="w-1/2 p-1">
                                    <a @click="showLightbox(item.subid3)" class="rounded-md lightbox cursor-pointer">
                                        <img :src="item.images" class="rounded-md" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End content -->
                </div><!--end grid-->

                <pagination />
                <!-- End Content -->
            </div>
        </div><!--end container-->
        <vue-easy-lightbox :visible="visibleRef" :imgs="imgsRef" :index="indexRef" @hide="onHide"></vue-easy-lightbox>
    </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox';
import image from '../../assets/images/items/1.gif';
import image2 from '../../assets/images/items/2.jpg';
import image3 from '../../assets/images/items/3.jpg';
import image4 from '../../assets/images/items/1.jpg';
import image5 from '../../assets/images/items/2.gif';
import image6 from '../../assets/images/items/4.jpg';
import image7 from '../../assets/images/items/20.jpg';
import image8 from '../../assets/images/items/1.gif';
import image9 from '../../assets/images/items/3.gif';
import image10 from '../../assets/images/items/5.jpg';
import image11 from '../../assets/images/items/6.jpg';
import image12 from '../../assets/images/items/3.gif';
import image13 from '../../assets/images/items/7.jpg';
import image14 from '../../assets/images/items/8.jpg';
import image15 from '../../assets/images/items/9.jpg';
import image16 from '../../assets/images/items/4.gif';
import image17 from '../../assets/images/items/2.jpg';
import image18 from '../../assets/images/items/5.gif';
import image19 from '../../assets/images/items/10.jpg';
import image20 from '../../assets/images/items/11.jpg';
import image21 from '../../assets/images/items/12.jpg';
import image22 from '../../assets/images/items/5.jpg';
import image23 from '../../assets/images/items/8.jpg';
import image24 from '../../assets/images/items/16.jpg';
import image25 from '../../assets/images/items/6.gif';
import image26 from '../../assets/images/items/13.jpg';
import image27 from '../../assets/images/items/14.jpg';
import image28 from '../../assets/images/items/6.gif';
import image29 from '../../assets/images/items/7.gif';
import image30 from '../../assets/images/items/8.gif';
import image31 from '../../assets/images/items/15.jpg';
import image32 from '../../assets/images/items/16.jpg';
import image33 from '../../assets/images/items/17.jpg';
import image34 from '../../assets/images/items/18.jpg';
import image35 from '../../assets/images/items/8.gif';
import image36 from '../../assets/images/items/19.jpg';
import pagination from '@/components/pagination.vue'
export default {
    data() {
        return {
            datas: [
                {
                    image: require('../../assets/images/avatar/1.jpg'),
                    name: 'Steven Townsend',
                    by: '@StreetBoy',
                    img: image,
                    subid: 0,
                    imgjpg: image2,
                    subid2: 1,
                    images: image3,
                    subid3: 2
                },
                {
                    image: require('../../assets/images/avatar/2.jpg'),
                    name: 'Tiffany Betancourt',
                    by: '@CutieGirl',
                    img: image4,
                    subid: 3,
                    imgjpg: image5,
                    subid2: 4,
                    images: image6,
                    subid3: 5,
                },
                {
                    image: require('../../assets/images/items/3.gif'),
                    name: 'Jacqueline Burns',
                    by: '@ButterFly',
                    img: image7,
                    subid: 6,
                    imgjpg: image8,
                    subid2: 7,
                    images: image9,
                    subid3: 8,
                },
                {
                    image: require('../../assets/images/avatar/3.jpg'),
                    name: 'Mari Harrington',
                    by: '@NorseQueen',
                    img: image10,
                    subid: 9,
                    imgjpg: image11,
                    subid2: 10,
                    images: image12,
                    subid3: 11,
                },
                {
                    image: require('../../assets/images/avatar/4.jpg'),
                    name: 'Floyd Glasgow',
                    by: '@BigBull',
                    img: image13,
                    subid: 12,
                    imgjpg: image14,
                    subid2: 13,
                    images: image15,
                    subid3: 14,
                },
                {
                    image: require('../../assets/images/avatar/5.jpg'),
                    name: 'Donna Schultz',
                    by: '@Angel',
                    img: image16,
                    subid: 15,
                    imgjpg: image17,
                    subid2: 16,
                    images: image18,
                    subid3: 17,
                },
                {
                    image: require('../../assets/images/avatar/6.jpg'),
                    name: 'Joshua Morris',
                    by: '@CrazyAnyone',
                    img: image19,
                    subid: 18,
                    imgjpg: image20,
                    subid2: 19,
                    images: image21,
                    subid3: 20,
                },
                {
                    image: require('../../assets/images/items/5.gif'),
                    name: 'Rosaria Vargas',
                    by: '@Princess',
                    img: image22,
                    subid: 21,
                    imgjpg: image23,
                    subid2: 22,
                    images: image24,
                    subid3: 23,
                },
                {
                    image: require('../../assets/images/avatar/7.jpg'),
                    name: 'Carl Williams',
                    by: '@LooserBad',
                    img: image25,
                    subid: 24,
                    imgjpg: image26,
                    subid2: 25,
                    images: image27,
                    subid3: 26,
                },
                {
                    image: require('../../assets/images/items/4.gif'),
                    name: 'Rosaria Vargas',
                    by: '@Princess',
                    img: image28,
                    subid: 27,
                    imgjpg: image29,
                    subid2: 28,
                    images: image30,
                    subid3: 29,
                },
                {
                    image: require('../../assets/images/avatar/8.jpg'),
                    name: 'Julius Canale',
                    by: '@PandaOne',
                    img: image31,
                    subid: 30,
                    imgjpg: image32,
                    subid2: 31,
                    images: image33,
                    subid3: 32,
                },
                {
                    image: require('../../assets/images/items/2.gif'),
                    name: 'Michael Williams',
                    by: '@FunnyGuy',
                    img: image34,
                    subid: 33,
                    imgjpg: image35,
                    subid2: 34,
                    images: image36,
                    subid3: 35,
                },
            ],
            images2: [
                image,
                image2,
                image3,
                image4,
                image5,
                image6,
                image7,
                image8,
                image9,
                image10,
                image11,
                image12,
                image13,
                image14,
                image15,
                image16,
                image17,
                image18,
                image19,
                image20,
                image21,
                image22,
                image23,
                image24,
                image25,
                image26,
                image27,
                image28,
                image29,
                image30,
                image31,
                image32,
                image33,
                image34,
                image35,
                image36
            ],
            visibleRef: false,
            imgsRef: [],
            indexRef: 0
        }
    },
    components: {
        pagination,
        VueEasyLightbox
    },
    methods: {
        showLightbox(index) {
            this.imgsRef = this.images2
            this.indexRef = index
            this.visibleRef = true
        },
        onHide() {
            this.visibleRef = false
        }
    }
}
</script>

<style lang="scss" scoped></style>