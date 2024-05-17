<template>
    <div class="container">
        <h1><b>BARANG</b></h1>
        <NuxtLink
        to="/barang/addbarang"
        class="flex mb-5 py-2 px-3 w-32 bg-blue-900 border-slate-700 text-white font-semibold rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#f1f5f9"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          id="plus">
          <g
            fill="none"
            fill-rule="evenodd"
            stroke="#f1f5f9"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            transform="translate(2 2)">
            <line x1="10" x2="10" y1="6.327" y2="13.654"></line>
            <line x1="13.667" x2="6.333" y1="9.99" y2="9.99"></line>
            <path
              d="M14.6857143,0 L5.31428571,0 C2.04761905,0 0,2.31208373 0,5.58515699 L0,14.414843 C0,17.6879163 2.03809524,20 5.31428571,20 L14.6857143,20 C17.9619048,20 20,17.6879163 20,14.414843 L20,5.58515699 C20,2.31208373 17.9619048,0 14.6857143,0 Z"></path>
          </g>
        </svg>
        <span class="mt-1 ml-1"> Add data </span>
      </NuxtLink>
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
                <tr v-for="(row, index) in barang" :key="row.barangId">
                
                    <td>{{ row.barangId }}</td>
                    <td>{{ row.kategoriId }}</td>
                    <td>{{ row.nama_barang }}</td>
                    <td>{{ row.harga }}</td>
                    <td>{{ row.jumlah }}</td>
                    <td>
                        <nuxt-link :to="'/detail/' + row.id" class="button detail">Detail</nuxt-link>
                        <nuxt-link :to="'/edit/' + row.id" class="button edit">Edit</nuxt-link>
                        <nuxt-link :to="'/hapus/' + row.id" class="button delete">Hapus</nuxt-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const barang = ref([]);

const fetchData = async () => {
    const response = await fetch('https://6645aba7b8925626f8929fd2.mockapi.io/api/v1/barang');
    const data = await response.json();
    barang.value = data;
};

onMounted(() => {
    fetchData();
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
    newBarang.value.barangId = '';
    newBarang.value.kategoriId = '';
    newBarang.value.nama_barang = '';
    newBarang.value.harga = '';
    newBarang.value.jumlah = '';
};
</script>


<style>
.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
    color: #333;
    margin-bottom: 20px;
}

.add-form {
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
}

.add-form:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
}

.add-form h2 {
    margin-bottom: 15px;
    color: #009879;
    text-align: center;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.form-group input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-sizing: border-box;
}

.styled-table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 18px;
    font-family: 'Arial', sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #2C4E80;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #2C4E80;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #2C4E80;
}

.button {
    color: #fff;
    background-color: #00215E;
    border: none;
    padding: 8px 12px;
    margin: 0 4px;
    text-decoration: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #1679AB;
}

.button.detail {
    background-color: #00215E;
}

.button.detail:hover {
    background-color: #1679AB;
}

.button.edit {
    background-color: #00215E; 
}

.button.edit:hover {
    background-color: #0b7dda;
}

.button.delete {
    background-color: #00215E;
}

.button.delete:hover {
    background-color: #1679AB;
}

.button.add {
    background-color: #00215E; 
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 10px;
}

.button.add:hover {
    background-color: #1679AB;
}
</style>
