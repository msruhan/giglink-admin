<template>
    <div>
        <div class="page-wrapper" :class="toggle === true ? 'toggled' : ''">
            <sidebar />
            <main class="page-content bg-gray-50 dark:bg-slate-800">
                <headers :customeClick="handlerClick" />
                <profile />
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
import profile from '@/components/creators/creator-profile.vue'

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
        profile

    },

    methods: {
        handlerClick() {
            this.toggle = !this.toggle
        },
    },
}

</script>

<style lang="scss" scoped></style>