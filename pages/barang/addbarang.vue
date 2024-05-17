<template>
    <div class="container">
        <form @submit.prevent="addBarang" class="add-form">
            <h1><b>Tambah Barang</b></h1>
            <div class="form-group">
                <label for="kategoriId">Id Kategori:</label>
                <input type="text" id="kategoriId" v-model="newBarang.kategoriId" required />
            </div>
            <div class="form-group">
                <label for="nama_barang">Nama Barang:</label>
                <input type="text" id="nama_barang" v-model="newBarang.nama_barang" required />
            </div>
            <div class="form-group">
                <label for="harga">Harga:</label>
                <input type="number" id="harga" v-model="newBarang.harga" required />
            </div>
            <div class="form-group">
                <label for="jumlah">Jumlah:</label>
                <input type="number" id="jumlah" v-model="newBarang.jumlah" required />
            </div>
            <button type="submit" class="button add">Tambah</button>
        </form>

        <table class="styled-table">
            <thead>
                <tr>
                    <th>Id barang</th>
                    <th>Id kategori</th>
                    <th>Nama Barang</th>
                    <th>Harga</th>
                    <th>Jumlah</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in barang" :key="item.id">
                    <td>{{ item.barangId }}</td>
                    <td>{{ item.kategoriId }}</td>
                    <td>{{ item.nama_barang }}</td>
                    <td>{{ item.harga }}</td>
                    <td>{{ item.jumlah }}</td>
                    <td>
                        <button @click="editBarang(index)" class="button edit">Edit</button>
                        <button @click="hapusBarang(index)" class="button delete">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const barang = ref([]);
const newBarang = ref({
    barangId: '',
    kategoriId: '',
    nama_barang: '',
    harga: '',
    jumlah: ''
});

onMounted(async () => {
    const response = await fetch('https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/barang');
    const data = await response.json();
    barang.value = data;
});

const addBarang = async () => {
    const response = await fetch('https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/barang', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBarang.value)
    });
    const data = await response.json();
    barang.value.push(data);

    // Clear form inputs
    resetForm();
};

const editBarang = async (index) => {
    const response = await fetch(`https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/barang/${barang.value[index].id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(barang.value[index])
    });
    const updatedData = await response.json();
    barang.value.splice(index, 1, updatedData);
};

const hapusBarang = async (index) => {
    const response = await fetch(`https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/barang/${barang.value[index].id}`, {
        method: 'DELETE'
    });
    if (response.ok) {
        barang.value.splice(index, 1);
    }
};

const resetForm = () => {
    newBarang.value = {
        barangId: '',
        kategoriId: '',
        nama_barang: '',
        harga: '',
        jumlah: ''
    };
};
</script>

<style scoped>
/* styles remain unchanged */
</style>