<template>
  <div class="flex w-full min-h-screen bg-gray-100 dark:bg-gray-800">
     <main class="flex-1 p-10">
        <table class="w-full text-sm text-left rtl:text-gray-700 dark:text-gray-300">
          <thead class="text-xs text-white uppercase bg-blue-600 dark:bg-blue-800">
            <tr>
              <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">ID</th>
              <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">Nome</th>
              <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">Preço</th>
              <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">Categoria</th>
              <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">Quantidade Venda</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in produtos" :key="p.id">
              <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">1</td>
              <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">air fryer</td>
              <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">299.00</td>
              <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">eletrodomesticos</td>
              <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700 py-5">100</td>
            </tr>
          </tbody>
        </table>
    </main>
  </div>

  
  
</template>

<script setup>

import { ref, onMounted } from "vue"
import axios from 'axios'

const produtos = ref([]) 
const offset = ref(0) 
const limit = 20

const fetchProduto = async function () => {
  const response = await axios.get(`https://localhost:7256/v1/produtos`)
  const results = response.data
  console.log(results);
  
}



onMounted(fetchProduto)
</script>

