<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Starter Page</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li
                        class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link></li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                        aria-current="page">About Us</li>
                </ul>
            </div>

            <div class="container relative mt-6">
                <div class="md:flex justify-center">
                    <div class="lg:w-4/5 w-full">
                        <div class="lg:flex p-6 bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800">
                            <div class="lg:w-1/3 md:w-full">
                                <p class="font-semibold mb-6">Upload your ART here, Please click "Upload Image" Button.
                                </p>
                                <div  v-if="imageSrc === null ? 'hiiden' : ''"
                                    class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">
                                    Supports JPG, PNG and MP4 videos. Max file size : 10MB.</div>
                                <div v-else
                                    class="preview-box flex justify-center rounded-md shadow dark:shadow-gray-800 overflow-hidden bg-gray-50 dark:bg-slate-800 text-slate-400 p-2 text-center small">
                                    <img class="preview-content" :src="imageSrc" alt=""></div>
                                <input type="file" id="input-file" name="input-file" accept="image/*"
                                  @change="loadFile" hidden>
                                <label
                                    class="btn-upload btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full mt-6 cursor-pointer"
                                    for="input-file">Upload Image</label>
                            </div>

                            <div class="lg:w-2/3 md:w-full mt-8 lg:mt-0 lg:ms-6">
                                <form>
                                    <div class="grid grid-cols-12 gap-6">
                                        <div class="col-span-12">
                                            <label class="font-semibold">Art Title <span
                                                    class="text-red-600">*</span></label>
                                            <input name="name" id="name" type="text"
                                                class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                                                placeholder="Title :">
                                        </div><!--end col-->

                                        <div class="col-span-12">
                                            <label class="font-semibold"> Description : </label>
                                            <textarea name="comments" id="comments"
                                                class="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-2xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                                                placeholder="Description :"></textarea>
                                        </div><!--end col-->

                                        <div class="md:col-span-6 col-span-12">
                                            <label class="font-semibold">Type :</label>
                                            <select
                                                class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2">
                                                <option>GIFs</option>
                                                <option>Music</option>
                                                <option>Video</option>
                                                <option>Tech</option>
                                            </select>
                                        </div><!--end col-->

                                        <div class="md:col-span-6 col-span-12">
                                            <label class="font-semibold"> Rate : </label>
                                            <input name="time" type="number"
                                                class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                                                id="time" placeholder="0.004ETH">
                                        </div><!--end col-->

                                        <div class="col-span-12">
                                            <h6 class="font-semibold text-lg">Auction :</h6>
                                        </div>

                                        <div class="md:col-span-6 col-span-12">
                                            <label class="font-semibold"> Starting Date : </label>
                                            <input name="date" type="text"
                                                class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2 start"
                                                placeholder="Select date :">
                                        </div><!--end col-->

                                        <div class="md:col-span-6 col-span-12">
                                            <label class="font-semibold"> Expiration date : </label>
                                            <input name="date" type="text"
                                                class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2 end"
                                                placeholder="Select date :">
                                        </div><!--end col-->

                                        <div class="col-span-12">
                                            <button type="submit"
                                                class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Create
                                                Item</button>
                                        </div><!--end col-->
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div><!--end grid-->
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
            image: ''
        }
    },
    methods: {
        loadFile(event) {
            this.image = document.getElementById(event.target.name)
            this.imageSrc = URL.createObjectURL(event.target.files[0])
        },
    }
}
</script>

<style lang="scss" scoped></style>