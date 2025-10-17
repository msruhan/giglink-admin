<template>
    <div>
        <div class="container-fluid relative px-3">
            <div class="layout-specing">
                <!-- Start Content -->
                <div class="md:flex justify-between items-center mb-6">
                    <h5 class="text-2xl font-bold text-white-700">Daftar Workshop</h5>
                </div>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-800">
                        <thead>
                            <tr class="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider rounded-tl-2xl">No</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Nama</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Workshop / Toko</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Whatsapp</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Tanggal Bergabung</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                                <th class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider rounded-tr-2xl">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, idx) in workshops" :key="item.id" class="hover:bg-violet-50 dark:hover:bg-slate-800 transition-colors border-b border-gray-100 dark:border-slate-800">
                                <td class="px-6 py-4 font-semibold text-violet-700">{{ idx + 1 }}</td>
                                <td class="px-6 py-4 font-medium">{{ item.owner_name }}</td>
                                <td class="px-6 py-4">{{ item.name }}</td>
                                <td class="px-6 py-4"><a :href="'https://wa.me/' + item.whatsapp" target="_blank" class="text-green-600 hover:underline">{{ item.whatsapp }}</a></td>
                                <td class="px-6 py-4">{{ item.created_at }}</td>
                                <td class="px-6 py-4">{{ item.owner_email }}</td>
                                <td class="px-6 py-4 flex gap-2 justify-center items-center">
                                    <button @click="editWorkshop(item)" class="text-blue-500 hover:text-blue-700" title="Edit"><i class="mdi mdi-pencil"></i></button>
                                    <button @click="deleteWorkshop(item)" class="text-red-500 hover:text-red-700" title="Hapus"><i class="mdi mdi-delete"></i></button>
                                    <button @click="viewWorkshop(item)" class="text-violet-600 hover:text-violet-800" title="Detail"><i class="mdi mdi-eye"></i></button>
                                </td>
                            </tr>
                            <tr v-if="workshops.length === 0">
                                <td colspan="7" class="text-center py-6 text-slate-400">Tidak ada data workshop</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useWorkshopStore } from '@/stores/storeWorkshop'
export default {
    data() {
        return {
            workshops: [],
        }
    },
    async created() {
        const workshopStore = useWorkshopStore()
        await workshopStore.getWorkshop()
        this.workshops = workshopStore.workshops
    },
    methods: {
        editWorkshop(item) {
            // TODO: implementasi aksi edit
            alert('Edit: ' + item.name)
        },
        deleteWorkshop(item) {
            // TODO: implementasi aksi hapus
            if (confirm('Yakin hapus ' + item.name + '?')) {
                // aksi hapus di sini
            }
        },
        viewWorkshop(item) {
            // TODO: implementasi aksi detail
            alert('Detail: ' + item.name)
        },
    }
}
</script>

<style lang="scss" scoped></style>