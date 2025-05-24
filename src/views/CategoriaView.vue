<template>
    <div class="flex w-full min-h-screen bg-gray-100 dark:bg-gray-800">
       <main class="flex-1 p-10 ">
        <div class="flex justify-end mb-6">
          <button
          @click="irParaCategoria"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          + Cadastrar Categoria 
        </button>
        </div>

        <div class="overflow-x-auto rounded-lg shadow-md">
          <table class="w-full text-sm text-left rtl:text-gray-700 dark:text-gray-300 border-collapse">
            <thead class="text-xs text-white uppercase bg-blue-600 dark:bg-blue-800">
              <tr>
                <th scope="col" class="px-10 py-5 border-r border-blue-400 dark:border-blue-700">ID</th>
                <th scope="col" class="px-10 py-5">Nome</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="categoria in categorias" :key="categoria.id">
                <td class="px-10 py-5 border-r border-blue-400 dark:border-blue-700">{{ categoria.id }}</td>
                <td class="px-10 py-5 border-r border-blue-400 dark:border-blue-700">{{ categoria.nome }}</td>
              </tr>
            </tbody>            
          </table>
        </div>
      </main>
    </div>
    <div>
      <button @click="prevPage">Voltar</button>
      <button @click="nextPage">Proximo</button>
    </div>  
</template>
<script setup>

import { ref, onMounted } from "vue"
import axios from 'axios'
import { useRouter } from 'vue-router'


const categorias = ref([])
const offset = ref(0)
const limit = 20


const fetchCategoria = async () => {
const response = await axios.get(`https://localhost:7256/v1/categorias?offset${offset.value}&limit${limit.value}`)
const results = response.data.data
categoria.value = results
console.log(results);
}

const irParaCadastro = () => {
  router.push('/cadastro')
}

const nextPage = () => {
  offset.value += limit
  fetchCategoria()
}

const prevPage = () => {
  if(offset > 0) {
    offset.value -= limit

  }  fetchCategoria()
}


</script>