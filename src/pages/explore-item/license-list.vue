<template>
    <div>
        <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
            <sidebar />
            <main class="page-content bg-gray-50 dark:bg-slate-800">
                <headers :customeClick="handlerClick" />
                <exploreitem :explore="true" />
                <footers />
            </main>
        </div>
        <switcher />
    </div>
</template>

<script>
import sidebar from '@/components/sidebar/sidebar.vue';
import headers from '@/components/header/header.vue';
import footers from '@/components/footer/footer.vue';
import switcher from '@/components/switcher.vue';
import exploreitem from '@/components/explore-license.vue'

export default {
    data() {
        return {
            toggle: true,

        }
    },
    components: {
        sidebar,
        headers,
        footers,
        switcher,
        exploreitem

    },
    mounted() {
        this.scrollToTop()
    },

    methods: {
        handlerClick() {
            this.toggle = !this.toggle
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    },
}

</script>

<style lang="scss" scoped></style>