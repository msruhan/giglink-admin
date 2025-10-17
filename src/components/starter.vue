<template>
    <div class="container-fluid relative px-3">
        <div class="layout-specing">
            <!-- Start Content -->
            <div class="md:flex justify-between items-center">
                <h5 class="text-lg font-semibold">Starter Page</h5>

                <ul class="breadcrumb tracking-[0.5px] mb-0 inline-block mt-1 md:mt-0">
                    <li
                        class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-400 dark:text-white/60 hover:text-slate-900 dark:hover:text-white">
                        <router-link to="/">Giglink</router-link>
                    </li>
                    <li class="inline breadcrumb-item text-[15px] font-semibold duration-500 text-slate-900 dark:text-white"
                        aria-current="page">About Us</li>
                </ul>
            </div>

            <div class="grid grid-cols-1 mt-6">
                <div class="rounded-md shadow dark:shadow-gray-700 p-6 bg-white dark:bg-slate-900">
                    <p class="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, aliquid
                        soluta. Voluptas neque adipisci fuga magnam nulla exercitationem corrupti ducimus itaque soluta
                        earum! Fugiat, animi id sit ad magnam facilis.</p>
                </div>
            </div>
            <!-- End Content -->
        </div>
    </div><!--end container-->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>