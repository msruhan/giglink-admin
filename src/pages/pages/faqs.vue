<template>
    <div>
        <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
            <sidebar />
            <main class="page-content bg-gray-50 dark:bg-slate-800">
                <headers :customeClick="handlerClick" />
                <div class="container-fluid relative px-3">
                    <div class="layout-specing">
                        <!-- Start Content -->
                        <div class="md:flex justify-between items-center">
                            <div>
                                <h5 class="text-lg font-semibold">Frequently Asked Questions</h5>

                                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1">
                                    <li
                                        class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                                        <router-link to="/">Giglink</router-link>
                                    </li>
                                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                                        aria-current="page">FAQs</li>
                                </ul>
                            </div>

                            <div>
                                <a href="javascript:void(0)" @click="toggles"
                                    class="btn btn-icon btn-sm bg-gray-800/5 hover:bg-gray-800/10 dark:bg-gray-800 border border-gray-800/5 dark:border-gray-800 text-slate-900 dark:text-white rounded-full"
                                    data-modal-toggle="addquestions" title="Add New"><i data-feather="plus"
                                        class="size-4"></i></a>
                            </div>
                        </div>

                        <div class="grid lg:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div class="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 class="font-semibold">Buying Product</h5>

                                <div id="accordion-collapseone" data-accordion="collapse" class="mt-6">
                                    <faqs />
                                </div>
                            </div>

                            <div class="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 class="font-semibold">General Questions</h5>

                                <div id="accordion-collapsetwo" data-accordion="collapse" class="mt-6">
                                    <faqs />
                                </div>
                            </div>

                            <div class="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 class="font-semibold">Payments Questions</h5>

                                <div id="accordion-collapsethree" data-accordion="collapse" class="mt-6">
                                    <faqs />
                                </div>
                            </div>

                            <div class="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                                <h5 class="font-semibold">Support Questions</h5>

                                <div id="accordion-collapsefour" data-accordion="collapse" class="mt-6">
                                    <faqs />
                                </div>
                            </div>
                        </div>
                        <!-- End Content -->
                    </div>
                </div><!--end container-->
                <footers />
            </main>
        </div>
        <switcher />

        <!-- Modal -->
        <div :class="isActive ? 'fixed' : 'hidden'" id="addquestions" tabindex="10"
            class="z-50 flex justify-center items-center overflow-hidden inset-0 m-auto">
            <div class="relative w-full h-auto max-w-lg p-4">
                <div class="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-700">
                    <div class="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-700">
                        <h5 class="text-xl font-semibold">Add new question</h5>
                        <button
                            @click="toggles"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            data-modal-toggle="addquestions"
                        >
                            <i data-feather="x" class="size-5"></i>
                        </button>
                    </div>
                    <div class="p-4">
                        <form>
                            <div class="grid grid-cols-12 gap-3">
                                <div class="col-span-12">
                                    <label class="font-semibold">Question <span class="text-red-600">*</span></label>
                                    <input name="name" id="name" type="text"
                                        class="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                                        placeholder="Title :">
                                </div><!--end col-->

                                <div class="col-span-12">
                                    <label class="font-semibold"> Answer </label>
                                    <textarea name="comments" id="comments"
                                        class="form-input w-full py-2 px-3 h-24 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-2"
                                        placeholder="Description :"></textarea>
                                </div><!--end col-->

                                <div class="col-span-12">
                                    <button type="submit"
                                        class="btn bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-md">Add
                                        Q&A</button>
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
import sidebar from '@/components/sidebar/sidebar.vue';
import headers from '@/components/header/header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import faqs from '@/components/faqs.vue'

export default {
    data() {
        return {
            toggle: true,
            isActive: false
        }
    },
    components: {
        sidebar,
        headers,
        footers,
        switcher,
        faqs
    },

    methods: {
        handlerClick() {
            this.toggle = !this.toggle
        },
        toggles() {
            this.isActive = !this.isActive
        }
    },
}

</script>

<style lang="scss" scoped></style>