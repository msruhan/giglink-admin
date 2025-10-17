<template>
    <div>
        <div class="container-fluid relative px-3">
            <div class="layout-specing">
                <!-- Start Content -->
                <div class="flex justify-between items-center">
                    <div>
                        <h5 class="text-lg font-semibold">Blogs / News</h5>

                        <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1">
                            <li
                                class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                                <router-link to="/">Giglink</router-link>
                            </li>
                            <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                                aria-current="page">Blogs</li>
                        </ul>
                    </div>

                    <div>
                        <a @click="toggle" href="javascript:void(0)"
                            class="btn btn-icon btn-sm bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"
                            data-modal-toggle="addblog" title="Add New"><i data-feather="plus" class="size-4"></i></a>
                    </div>
                </div>

                <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-6">
                    <div v-for="item in datas" :key="item"
                        class="group relative overflow-hidden bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 hover:shadow-md transition-all duration-500">
                        <img :src="item.image" alt="">

                        <div class="relative p-6">
                            <div class="absolute start-6 -top-4">
                                <span
                                    class="bg-violet-600 text-white text-[12px] px-2.5 py-1 font-semibold rounded-full h-5">{{
                            item.category }}</span>
                            </div>

                            <div class="">
                                <div class="flex mb-4">
                                    <span class="text-slate-400 text-[16px]"><i class="uil uil-calendar-alt text-slate-900 dark:text-white me-2"></i>{{item.date}}</span>
                                    <span class="text-slate-400 text-[16px] ms-3"><i class="uil uil-clock text-slate-900 dark:text-white me-2"></i>{{ item.time}}</span>
                                </div>

                                <router-link :to="{ name: 'blog-detail', params: { id: item.id } }" class="title text-lg font-medium hover:text-violet-600 duration-500 ease-in-out">{{item.title }}</router-link>

                                <div class="flex justify-between mt-4">
                                    <router-link :to="{ name: 'blog-detail', params: { id: item.id } }"
                                        class="btn btn-link text-[16px] font-medium hover:text-violet-600 after:bg-violet-600 duration-500 ease-in-out">Read
                                        More <i class="uil uil-arrow-right"></i></router-link>
                                    <span class="text-slate-400 text-[16px]">by <router-link to="/creator-profile"
                                            class="text-slate-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-600 font-medium">{{ item.by }}</router-link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--end content-->
                </div>

                <pagination />
                <!-- End Content -->
            </div>
        </div><!--end container-->

        <!-- Modal -->
        <div :class="isActive ? 'fixed' : 'hidden'" id="addblog" tabindex="10"
            class="z-50 overflow-hidden inset-0 m-auto flex justify-center items-center">
            <div class="relative w-full h-auto max-w-lg p-4">
                <div class="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
                    <div class="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
                        <h5 class="text-xl font-semibold">Add blog or news</h5>
                        <button type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="addblog">
                            <svg @click="toggle" class="size-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-4">
                        <div>
                            <p class="font-semibold mb-4">Upload your blog image here, Please click "Upload Image" Button.
                            </p>
                            <div v-if="imageSrc === null ? 'hidden' : ''" class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                            <div v-else class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small w-auto max-h-60">
                                <img :src="imageSrc" alt=""></div>
                            <input type="file" id="input-file" name="input-file" accept="image/*" @change="loadFile" hidden>
                            <label class="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md mt-6 cursor-pointer"
                                for="input-file">Upload Image</label>
                        </div>

                        <form class="mt-4">
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-12">
                                    <label class="font-semibold">Blog Title <span class="text-red-600">*</span></label>
                                    <input name="name" id="name" type="text" class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Title :">
                                </div><!--end col-->

                                <div class="col-span-12">
                                    <label class="font-semibold"> Description : </label>
                                    <textarea name="comments" id="comments" class="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Description :"></textarea>
                                </div><!--end col-->

                                <div class="col-span-12">
                                    <button type="submit" class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Create Blog</button>
                                </div><!--end col-->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- Modal -->
    </div>
</template>

<script>
import pagination from '@/components/pagination.vue';
import feather from 'feather-icons'
export default {
    data() {
        return {
            imageSrc: null,
            image: '',
            isActive: false,
            datas: [
                {
                    id: 1,
                    image: require('../../assets/images/blog/01.jpg'),
                    category: 'Arts',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Mindfulness Activities for Kids & Toddlers with NFT',
                    by: '@StreetBoy'
                },
                {
                    id: 2,
                    image: require('../../assets/images/blog/02.jpg'),
                    category: 'Illustration',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Save Thousands Of Lives Through This NFT',
                    by: '@CutieGirl'
                },
                {
                    id: 3,
                    image: require('../../assets/images/blog/03.jpg'),
                    category: 'Music',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'A place where technology meets craftsmanship',
                    by: '@ButterFly'
                },
                {
                    id: 4,
                    image: require('../../assets/images/blog/04.jpg'),
                    category: 'Video',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'NFT Market - A Compact Trike with the Big Benefits',
                    by: '@NorseQueen'
                },
                {
                    id: 5,
                    image: require('../../assets/images/blog/05.jpg'),
                    category: 'Games',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Honoring Black History Month with Toddlers',
                    by: '@BigBull'
                },
                {
                    id: 6,
                    image: require('../../assets/images/blog/06.jpg'),
                    category: 'Memes',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Setting Intentions Instead of Resolutions for 2021',
                    by: '@Angel'
                },
                {
                    id: 7,
                    image: require('../../assets/images/blog/07.jpg'),
                    category: 'GIFs',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Clever Ways to Purchase Extraordinart Items',
                    by: '@CrazyAnyone'
                },
                {
                    id: 8,
                    image: require('../../assets/images/blog/08.jpg'),
                    category: 'Video',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'How to Save Money on Baby Essentials for NFT',
                    by: '@Princess'
                },
                {
                    id: 9,
                    image: require('../../assets/images/blog/09.jpg'),
                    category: 'Music',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Liki Trike - A Compact Trike with the Big Benefits',
                    by: '@LooserBad'
                },
                {
                    id: 10,
                    image: require('../../assets/images/blog/10.jpg'),
                    category: 'Tech',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'NFT Market - A Compact the Big Benefits',
                    by: '@Princess'
                },
                {
                    id: 11,
                    image: require('../../assets/images/blog/11.jpg'),
                    category: 'Arts',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Behind the Scenes of the creabik App',
                    by: '@PandaOne'
                },
                {
                    id: 12,
                    image: require('../../assets/images/blog/12.jpg'),
                    category: 'GIFs',
                    date: '20th October, 2022',
                    time: '5 min read',
                    title: 'Meet fennouni, Product Designer at GitHub',
                    by: '@FunnyGuy'
                },
            ]
        }
    },
    components: {
        pagination
    },
    mounted() {
        feather.replace()
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive
        },
        loadFile(event) {
            this.imageSrc = URL.createObjectURL(event.target.files[0])
            this.image = document.getElementById(event.target.name)

        }
    },
}
</script>

<style lang="scss" scoped></style>