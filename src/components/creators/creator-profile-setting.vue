<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Profile Setting</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white" aria-current="page">Profile Setting</li>
                </ul>
            </div>

            <div class="container-fluid mt-6">
                <div
                    class="group profile-banner relative overflow-hidden text-transparent rounded-xl shadow dark:shadow-gray-700">
                    <input id="pro-banner" name="profile-banner" type="file" class="hidden" @change="loadFile2" />
                    <div class="relative shrink-0">
                        <img :src="imageSrc2" class="h-80 w-full object-cover" id="profile-banner" alt="">
                        <div class="absolute inset-0 bg-slate/10 group-hover:bg-slate-900/40 transition duration-500">
                        </div>
                        <label class="absolute inset-0 cursor-pointer" for="pro-banner"></label>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-12 gap-6 mt-6">
                <div class="lg:col-span-3 md:col-span-4">
                    <div class="pt-4 px-4 -mt-20">
                        <div class="group profile-pic w-[112px]">
                            <input id="pro-img" name="profile-image" type="file" class="hidden" @change="loadFile" />
                            <div>
                                <div
                                    class="relative size-28 rounded-full shadow-md dark:shadow-gray-800 ring-4 ring-slate-50 dark:ring-slate-800 overflow-hidden">
                                    <img :src="imageSrc" class="rounded-full" id="profile-image" alt="">
                                    <div class="absolute inset-0 group-hover:bg-slate-900/40 transition duration-500">
                                    </div>
                                    <label class="absolute inset-0 cursor-pointer" for="pro-img"></label>
                                </div>
                            </div>
                        </div>

                        <p class="text-slate-400 mt-3">We recommend an image of at least 400X400. GIFs work too.</p>
                    </div>
                </div><!--end col-->

                <div class="lg:col-span-9 md:col-span-8">
                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                        <h5 class="text-lg font-semibold mb-4">Personal Detail :</h5>
                        <form>
                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                                <div>
                                    <label class="form-label font-medium">First Name : <span class="text-red-600">*</span></label>
                                    <input type="text" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"  placeholder="First Name:" id="firstname" name="name" required="">
                                </div>
                                <div>
                                    <label class="form-label font-medium">Last Name : <span class="text-red-600">*</span></label>
                                    <input type="text" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Last Name:" id="lastname" name="name" required="">
                                </div>
                                <div>
                                    <label class="form-label font-medium">Your Email : <span class="text-red-600">*</span></label>
                                    <input type="email" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Email" name="email" required="">
                                </div>
                                <div>
                                    <label class="form-label font-medium">Occupation : </label>
                                    <input name="name" id="occupation" type="text" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Occupation :">
                                </div>
                            </div><!--end grid-->

                            <div class="grid grid-cols-1">
                                <div class="mt-5">
                                    <label class="form-label font-medium">Description : </label>
                                    <textarea name="comments" id="comments" class="form-input w-full text-[15px] py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-2xl outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Message :"></textarea>
                                </div>
                            </div><!--end row-->

                            <input type="submit" id="submit" name="send" class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5" value="Save Changes">
                        </form><!--end form-->
                    </div>

                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <h5 class="text-lg font-semibold mb-6">Social Profiles :</h5>

                        <div v-for="item in datas" :key="item" class="md:flex" :class="item.class">
                            <div class="md:w-1/3">
                                <span class="font-medium">{{ item.name }}</span>
                            </div>

                            <div class="md:w-2/3 mt-4 md:mt-0">
                                <form>
                                    <div class="form-icon relative">
                                        <i :data-feather="item.icon" class="size-4 absolute top-3 start-4"></i>
                                        <input type="text"  class="form-input w-full text-[15px] ps-12 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0" :placeholder="item.place" id="twitter_name" name="name" required="">
                                    </div>
                                </form>

                                <p class="text-slate-400 mt-1">{{ item.title }}</p>
                            </div>
                        </div>

                        <div class="md:flex">
                            <div class="md:w-full">
                                <span class="font-medium"></span>
                                <button class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5">Save Social Profile</button>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <h5 class="text-lg font-semibold mb-6">Account Notifications :</h5>

                        <div class="flex justify-between pb-4">
                            <h6 class="mb-0 font-medium">When someone mentions me</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" id="noti1">
                                <label class="form-check-label" for="noti1"></label>
                            </div>
                        </div>
                        <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 class="mb-0 font-medium">When someone follows me</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" checked id="noti2">
                                <label class="form-check-label" for="noti2"></label>
                            </div>
                        </div>
                        <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 class="mb-0 font-medium">When shares my activity</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" id="noti3">
                                <label class="form-check-label" for="noti3"></label>
                            </div>
                        </div>
                        <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 class="mb-0 font-medium">When someone messages me</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" id="noti4">
                                <label class="form-check-label" for="noti4"></label>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <h5 class="text-lg font-semibold mb-6">Marketing Notifications :</h5>

                        <div class="flex justify-between pb-4">
                            <h6 class="mb-0 font-medium">There is a sale or promotion</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" id="noti5">
                                <label class="form-check-label" for="noti5"></label>
                            </div>
                        </div>
                        <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 class="mb-0 font-medium">Company news</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" id="noti6">
                                <label class="form-check-label" for="noti6"></label>
                            </div>
                        </div>
                        <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 class="mb-0 font-medium">Weekly jobs</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" checked id="noti7">
                                <label class="form-check-label" for="noti7"></label>
                            </div>
                        </div>
                        <div class="flex justify-between py-4 border-t border-gray-100 dark:border-gray-700">
                            <h6 class="mb-0 font-medium">Unsubscribe News</h6>
                            <div class="">
                                <input class="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50" type="checkbox" value="" checked id="noti8">
                                <label class="form-check-label" for="noti8"></label>
                            </div>
                        </div>
                    </div>

                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <div class="grid lg:grid-cols-2 grid-cols-1 gap-5">
                            <div>
                                <h5 class="text-lg font-semibold mb-5">Contact Info :</h5>

                                <form>
                                    <div class="grid grid-cols-1 gap-5">
                                        <div>
                                            <label class="form-label font-medium">Phone No. :</label>
                                            <input name="number" id="number" type="number" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Phone :">
                                        </div>

                                        <div>
                                            <label class="form-label font-medium">Website :</label>
                                            <input name="url" id="url" type="url" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Url :">
                                        </div>
                                    </div><!--end grid-->

                                    <button
                                        class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5">Add</button>
                                </form>
                            </div><!--end col-->

                            <div>
                                <h5 class="text-lg font-semibold mb-5">Change password :</h5>
                                <form>
                                    <div class="grid grid-cols-1 gap-5">
                                        <div>
                                            <label class="form-label font-medium">Old password :</label>
                                            <input type="password" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Old password" required="">
                                        </div>

                                        <div>
                                            <label class="form-label font-medium">New password :</label>
                                            <input type="password" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="New password" required="">
                                        </div>

                                        <div>
                                            <label class="form-label font-medium">Re-type New password :</label>
                                            <input type="password" class="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2" placeholder="Re-type New password" required="">
                                        </div>
                                    </div><!--end grid-->

                                    <button class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full mt-5">Save password</button>
                                </form>
                            </div><!--end col-->
                        </div><!--end row-->
                    </div>

                    <div class="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 mt-[30px]">
                        <h5 class="text-lg font-semibold mb-5 text-red-600">Delete Account :</h5>

                        <p class="text-slate-400 mb-4">Do you want to delete the account? Please press below "Delete" button</p>

                        <router-link to="/explore-two" class="btn bg-red-600 hover:bg-red-700 border-red-600 hover:border-red-700 text-white rounded-full">Delete</router-link>
                    </div>
                </div>
            </div><!--end grid-->
            <!-- End Content -->
        </div>
    </div><!--end container-->
</template>

<script>
import feather from 'feather-icons'
export default {
    data() {
        return {
            imageSrc: require('../../assets/images/avatar/1.jpg'),
            image: '',
            imageSrc2: require('../../assets/images/blog/single.jpg'),
            image2: '',
            datas: [
                {
                    name: 'Twitter',
                    icon: 'twitter',
                    place: 'Twitter Profile Name',
                    title: 'Add your Twitter username (e.g. jennyhot).',
                    class: 'mt-0'
                },
                {
                    name: 'Facebook',
                    icon: 'facebook',
                    place: 'Facebook Profile Name',
                    title: 'Add your Facebook username (e.g. jennyhot).',
                    class: 'mt-8'
                },
                {
                    name: 'Instagram',
                    icon: 'instagram',
                    place: 'Instagram Profile Name',
                    title: 'Add your Instagram username (e.g. jennyhot).',
                    class: 'mt-8'
                },
                {
                    name: 'Linkedin',
                    icon: 'linkedin',
                    place: 'Linkedin Profile Name',
                    title: 'Add your Linkedin username.',
                    class: 'mt-8'
                },
                {
                    name: 'Youtube',
                    icon: 'youtube',
                    place: 'Youtube url',
                    title: 'Add your Youtube url.',
                    class: 'mt-8'
                },
            ]
        }
    },
    mounted() {
        feather.replace()
    },
    methods: {
        loadFile(event) {
            this.image = document.getElementById(event.target.name)
            this.imageSrc = URL.createObjectURL(event.target.files[0])
        },
        loadFile2(event) {
            this.image2 = document.getElementById(event.target.name)
            this.imageSrc2 = URL.createObjectURL(event.target.files[0])
        },
    },
}
</script>

<style lang="scss" scoped></style>