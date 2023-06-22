<template>
    <section class="w-screen mt-3 mb-6">
        <Loader v-if="isLoading"/>
        <v-table v-else class="w-full sm:w-5/6 m-auto shadow bg-slate-400">
            <thead>
            <tr>
                <th class="text-left text-white"> ID </th>
                <th class="text-left text-white"> Name </th>
                <th class="text-left text-white"> Email </th>
                <th class="text-left text-white"> Role </th>
                <th class="text-left text-white"> DOB </th>
                <th class="text-left text-white"> Age </th>
                <th class="text-left text-white"> Gender </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>{{ user.dob }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.gender }}</td>
            </tr>
            </tbody>
        </v-table>
    </section>
</template>

<script setup>
    import Loader from "../components/Loader.vue";
    import { storeToRefs } from "pinia";
    import { useAuthStore } from "../stores/auth";
    import { ref } from "vue";

    const authStore = useAuthStore();

    const isLoading = ref(true);

    async function getData() {
        await authStore.getAllUsers();
        isLoading.value = false;
    }
    getData();

    const { users } = storeToRefs(authStore);
</script>

<style scoped>
    thead tr {
        background: rgb(100 116 139);
        font-size: large;
    }

    tr:nth-child(even) {
        background: rgb(241 245 249);
    }
</style>