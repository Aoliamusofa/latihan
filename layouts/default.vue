<template>
  <header>
    <nav class="bg-blue-800 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-white">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <a href="https://flowbite.com" class="flex items-center">
          <span class="self-center text-xl font-semibold whitespace-nowrap text-white dark:text-white">
            Aplikasi Gudang
          </span>
        </a>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="/" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-white lg:p-0 dark:text-white" aria-current="page">
                Home
              </a>
            </li>
            <li>
              <a href="/kategori" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Kategori
              </a>
            </li>
            <li>
              <a href="/barang" class="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-white lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                Barang
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <slot />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
