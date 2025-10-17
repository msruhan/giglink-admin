<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Become Creator</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/creators">Creators</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Become Creator</li>
                </ul>
            </div>

            <div class="container relative mt-6">
                <div class="md:flex justify-center">
                    <div class="lg:w-3/4">
                        <div class="lg:flex justify-center p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                            <div class="lg:w-1/3 md:w-full">
                                <p class="font-semibold mb-6">Upload your ART here, Please click "Upload Image" Button.</p>
                                <div v-if="imageSrc === null ? 'hidden' : ''" class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small"> Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                <div v-else class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">
                                    <img :src="imageSrc" alt="">
                                </div>
                                <input type="file" id="input-file" name="input-file" accept="image/*" @change="loadFile"
                                    hidden />
                                <label class="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full mt-6 cursor-pointer" for="input-file">Upload Image</label>
                            </div>

                            <div class="lg:w-2/3 md:w-full mt-8 lg:mt-0 lg:ms-6">
                                <form>
                                    <div class="grid grid-cols-1 gap-6">
                                        <div class="text-start">
                                            <label for="name" class="font-semibold">Display Name:</label>
                                            <input name="name" id="name" type="text" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"  placeholder="Name :">
                                        </div>

                                        <div class="text-start">
                                            <label for="name" class="font-semibold">URL:</label>
                                            <input name="url" id="giglink-url" type="url" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="https://giglink.exe/streetboyyy">
                                        </div>

                                        <div class="text-start">
                                            <label for="comments" class="font-semibold">Bio:</label>
                                            <textarea name="comments" id="comments" class="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-2xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="I'm a Digital Artist. Digital Art with over 3 years of experience. Experienced with all stages of the Art cycle for dynamic projects."></textarea>
                                        </div>

                                        <div class="text-start">
                                            <label for="name" class="font-semibold">Twitter Account:</label>
                                            <p class="text-slate-400 text-[15px]">Link your twitter account to gain more trust on the Marketplace</p>
                                            <input type="text" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Twitter Profile Name" id="twitter_name" name="name" required="">
                                        </div>

                                        <button type="submit" id="submit" name="send" class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full justify-center flex items-center">Create your account</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--end container-->
            <!-- End Content -->
        </div>
    </div><!--end container-->
</template>

<script>
export default {
    data() {
        return {
            imageSrc: null,
            image: '',
        }
    },
    methods: {
        loadFile(event) {
            this.image = document.getElementById(event.target.name)
            this.imageSrc = URL.createObjectURL(event.target.files[0])
        },
    },
}
</script>

<style lang="scss" scoped></style>