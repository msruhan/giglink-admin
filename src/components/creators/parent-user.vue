<template>
    <div>
        <div class="container-fluid relative px-3">
            <div class="layout-specing">
                <div class="md:flex justify-between items-center mb-6">
                    <h5 class="text-2xl font-bold text-white-700">Dafta User</h5>
                </div>
                <div class="overflow-x-auto">
                    <table class="min-w-full bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-800">
                        <thead>
                            <tr class="bg-gradient-to-r from-violet-600 to-indigo-600 text-white">
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider rounded-tl-2xl">No</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Nama</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Email</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Role</th>
                                <th class="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">Tanggal Bergabung</th>
                                <th class="px-6 py-3 text-center text-xs font-bold uppercase tracking-wider rounded-tr-2xl">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, idx) in users" :key="item.id" class="hover:bg-violet-50 dark:hover:bg-slate-800 transition-colors border-b border-gray-100 dark:border-slate-800">
                                <td class="px-6 py-4 font-semibold text-violet-700">{{ idx + 1 }}</td>
                                <td class="px-6 py-4 font-medium">{{ item.name }}</td>
                                <td class="px-6 py-4">{{ item.email }}</td>
                                <td class="px-6 py-4">
                                    <span :class="roleBadgeClass(item.role)" class="px-2 py-1 rounded text-xs font-semibold">
                                        {{ item.role }}
                                    </span>
                                </td>
                                <td class="px-6 py-4">{{ item.created_at }}</td>
                                <td class="px-6 py-4 flex gap-2 justify-center items-center">
                                    <button @click="editUser(item)" class="text-blue-500 hover:text-blue-700" title="Edit"><i class="mdi mdi-pencil"></i></button>
                                    <button @click="deleteUser(item)" class="text-red-500 hover:text-red-700" title="Hapus"><i class="mdi mdi-delete"></i></button>
                                    <button @click="viewUser(item)" class="text-violet-600 hover:text-violet-800" title="Detail"><i class="mdi mdi-eye"></i></button>
                                </td>
                            </tr>
                            <tr v-if="users.length === 0">
                                <td colspan="6" class="text-center py-6 text-slate-400">Tidak ada data user</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from '@/stores/storeUser'
export default {
    data() {
        return {
            users: [],
        }
    },
    async created() {
        const userStore = useUserStore()
        await userStore.getUsers()
        this.users = userStore.users
    },
    methods: {
        roleBadgeClass(role) {
            switch (role) {
                case 'admin': return 'bg-red-100 text-red-700';
                case 'buyer': return 'bg-blue-100 text-blue-700';
                case 'seller': return 'bg-green-100 text-green-700';
                case 'technician': return 'bg-yellow-100 text-yellow-700';
                case 'workshop': return 'bg-purple-100 text-purple-700';
                default: return 'bg-gray-100 text-gray-700';
            }
        },
        editUser(item) {
            // TODO: implementasi aksi edit
            alert('Edit: ' + item.name)
        },
        deleteUser(item) {
            // TODO: implementasi aksi hapus
            if (confirm('Yakin hapus ' + item.name + '?')) {
                // aksi hapus di sini
            }
        },
        viewUser(item) {
            // TODO: implementasi aksi detail
            alert('Detail: ' + item.name)
        },
    }
}
</script>

<style lang="scss" scoped></style>