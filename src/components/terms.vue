<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Terms & Conditions</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li
                        class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                        aria-current="page">Terms</li>
                </ul>
            </div>

            <div class="container relative mt-6">
                <div class="md:flex justify-center">
                    <div class="lg:w-4/5 w-full">
                        <div class="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                            <h5 class="text-lg font-semibold mb-4">Introduction :</h5>
                            <p class="text-slate-400">It seems that only fragments of the original text remain in the
                                Lorem Ipsum texts used today. One may speculate that over the course of time certain
                                letters were added or deleted at various positions within the text.</p>

                            <h5 class="text-lg font-semibold mb-4 mt-6">User Agreements :</h5>
                            <p class="text-slate-400">The most well-known dummy text is the 'Lorem Ipsum', which is said
                                to have <b class="text-red-600">originated</b> in the 16th century. Lorem Ipsum is <b
                                    class="text-red-600">composed</b> in a pseudo-Latin language which more or less <b
                                    class="text-red-600">corresponds</b> to 'proper' Latin. It contains a series of real
                                Latin words. This ancient dummy text is also <b
                                    class="text-red-600">incomprehensible</b>, but it imitates the rhythm of most
                                European languages in Latin script. The <b class="text-red-600">advantage</b> of its
                                Latin origin and the relative <b class="text-red-600">meaninglessness</b> of Lorum Ipsum
                                is that the text does not attract attention to itself or distract the viewer's <b
                                    class="text-red-600">attention</b> from the layout.</p>
                            <p class="text-slate-400 mt-3">There is now an <b class="text-red-600">abundance</b> of
                                readable dummy texts. These are usually used when a text is <b
                                    class="text-red-600">required purely</b> to fill a space. These alternatives to the
                                classic Lorem Ipsum texts are often amusing and tell short, funny or <b
                                    class="text-red-600">nonsensical</b> stories.</p>
                            <p class="text-slate-400 mt-3">It seems that only <b class="text-red-600">fragments</b> of
                                the original text remain in the Lorem Ipsum texts used today. One may speculate that
                                over the course of time certain letters were added or deleted at various positions
                                within the text.</p>

                            <h5 class="text-lg font-semibold mb-4 mt-6">Restrictions :</h5>
                            <p class="text-slate-400">You are specifically restricted from all of the following :</p>
                            <ul class="list-none text-slate-400 mt-3">
                                <li v-for="item in datas" :key="item" class="flex mt-2"><i
                                        class="uil uil-arrow-right text-violet-600 text-lg align-middle me-2"></i>{{
                                    item }}</li>

                            </ul>

                            <h5 class="text-lg font-semibold mt-6">Users Question & Answer :</h5>

                            <div id="accordion-collapse" data-accordion="collapse" class="mt-6">
                                <faqs />
                            </div>

                            <div class="mt-6">
                                <a href=""
                                    class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Accept</a>
                                <a href=""
                                    class="btn bg-transparent hover:bg-violet-600 border-violet-600 text-violet-600 hover:text-white rounded-md ms-2">Decline</a>
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
import faqs from '@/components/faqs.vue'
export default {
    data() {
        return {
            datas: ['Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand', 'Digital Marketing Solutions for Tomorrow', 'Our Talented & Experienced Marketing Agency', 'Create your own skin to match your brand']
        }
    },
    components: {
        faqs
    }
}
</script>

<style lang="scss" scoped></style>