<template>
    <div class="container">
        <form @submit.prevent="addKategori" class="add-form">
            <h1><b>Tambah Kategori</b></h1>
            <div class="form-group">
                <label for="kategori">Kategori:</label>
                <input type="text" id="kategori" v-model="newKategori.kategori" required />
            </div>
            <div class="form-group">
                <label for="keterangan">Katerangan:</label>
                <input type="text" id="keterangan" v-model="newKategori.kategori" required />
            </div>
          
            <button type="submit" class="button add">Tambah</button>
        </form>

      
        <table class="styled-table">
            <thead>
                <tr>
                    <th>Id kategori</th>
                    <th>Kategori</th>
                    <th>Keterangan</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in kategori" :key="item.id">
                    <td>{{ item.kategoriId }}</td>
                    <td>{{ item.kategori}}</td>
                    <td>{{ item.keterangan }}</td>
                    <td>
                        <button @click="editKategori(index)" class="button edit">Edit</button>
                        <button @click="hapusKategori(index)" class="button delete">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const kategori = ref([]);
const newKategori = ref({
    kategoriId: '',
    kategori: '',
    keterangan: ''
});

onMounted(async () => {
    const response = await fetch('https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/kategori');
    const data = await response.json();
    kategori.value = data;
});

const addKategori = async () => {
    const response = await fetch('https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/kategori', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newKategori.value)
    });
    const data = await response.json();
    kategori.value.push(data);

    // Clear form inputs
    resetForm();
};

const editKategori = async (index) => {
    const response = await fetch(`https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/kategori/${kategori.value[index].id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(kategori.value[index])
    });
    const updatedData = await response.json();
    kategori.value.splice(index, 1, updatedData);
};

const hapusKategori = async (index) => {
    const response = await fetch(`https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/kategori/${kategori.value[index].id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        kategori.value.splice(index, 1);
    }
};

const resetForm = () => {
    newKategori.value = {
        kategoriId: '',
        kategori: '',
        keterangan: ''
    };
};
</script>

<style scoped>
/* styles remain unchanged */
</style>