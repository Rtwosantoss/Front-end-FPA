<template>
  <div class="flex w-full min-h-screen bg-gray-100 dark:bg-gray-800">
    <main class="flex-1 p-10">
      <div class="flex justify-end mb-6">
        <button 
          @click="irParaCadastro"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          + Cadastrar Produto
        </button>
      </div>

      <table class="w-full text-sm text-left rtl:text-gray-700 dark:text-gray-300">
        <thead class="text-xs text-white uppercase bg-blue-600 dark:bg-blue-800">
          <tr>
            <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">ID</th>
            <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">Nome</th>
            <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">Preço</th>
            <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">Categoria</th>
            <th scope="col" class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">Quantidade Venda</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtos" :key="produto.id">
            <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">{{ produto.id }}</td>
            <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">{{ produto.nome }}</td>
            <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">{{ produto.preco }}</td>
            <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">{{ produto.categoria }}</td>
            <td class="px-10 py-5 border-r border-b border-blue-400 dark:border-blue-700">{{ produto.quantidadeVenda}}</td>
          </tr>
        </tbody>
      </table>
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

const router = useRouter()

const produtos = ref([]) 
const offset = ref(0) 
const limit = 20

const fetchProduto = async () => {
  const response = await axios.get(`https://localhost:7256/v1/produtos?offset${offset.value}&limit${limit.value}`)
  const results = response.data.data
  produtos.value = results
  console.log(results);
}

const irParaCadastro = () => {
  router.push('/cadastro')
}

const nextPage = () => {
  offset.value += limit
  fetchProduto()
}
const prevPage = () => {
  if(offset > 0) {
    offset.value -= limit
  fetchProduto()
}}

onMounted(fetchProduto)
</script>