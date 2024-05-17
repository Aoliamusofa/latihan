<template>
    <div class="">
        TODO  APPS

        <div v-for="row in todo">
            <p>{{ no++ }} | {{ row.judul }} | <nuxt-link to="/">Detail</nuxt-link>
                <nuxt-link to="/">Edit</nuxt-link> <nuxt-link to="/">Hapus</nuxt-link></p>
        </div>
    </div>
</template>

<script setup>
let no = 1;
const {data:todo} = await useFetch('https://663b3e0bfee6744a6ea0e3a6.mockapi.io/api/v1/todo')
</script>