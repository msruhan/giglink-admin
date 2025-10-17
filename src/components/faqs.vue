<template>
    <div>
        <div v-for="item in datas" :key="item"
            class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4 first:mt-4">
            <h2 class="text-base font-semibold" id="accordion-collapse-heading-1">
                <button type="button" @click="isActive = isActive === item.id ? null : item.id"
                    :class="item.id === isActive ? 'text-violet-600 bg-gray-50 dark:bg-slate-800' : ''"
                    class="flex justify-between items-center p-5 w-full font-semibold text-start">
                    <span>{{ item.title }}</span>
                    <svg :class="item.id === isActive ? 'rotate-180' : ''" class="size-4 shrink-0" fill="currentColor"
                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <link rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                </button>
            </h2>
            <div id="accordion-collapse-body-1" :class="item.id === isActive ? '' : 'hidden'"
                aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5">
                    <p class="text-slate-400 dark:text-gray-400">{{ item.desc }}</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            isActive: 1,
            datas: [
                {
                    id: 1,
                    title: 'How does it work ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 2,
                    title: 'Do I need a designer to use Hously ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 3,
                    title: 'What do I need to do to start selling ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
                {
                    id: 4,
                    title: 'What happens when I receive an order ?',
                    desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped></style>