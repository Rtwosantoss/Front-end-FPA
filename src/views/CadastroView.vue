<template>
    <div class="w-screen h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-blue-800 to-blue-300">
      <div class="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-xl">
        <h2 class="text-4xl font-extrabold text-center mb-6 text-blue-700">Cadastro de Produtos</h2>
        <form @submit.prevent="handleSubmit">
  
          <div class="mb-4">
            <label class="block text-gray-700 mb-1 font-semibold">Nome do Produto</label>
            <input
              type="text"
              v-model="nome"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Ex: Camiseta, Smartphone..."
              required
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 mb-1 font-semibold">Preço (R$)</label>
            <input
              type="number"
              v-model="preco"
              step="0.01"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: 99.90"
              required
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 mb-1 font-semibold">Quantidade</label>
            <input
              type="number"
              v-model="quantidade"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Ex: 10"
              required
            />
          </div>
  
          <div class="mb-6">
            <label class="block text-gray-700 mb-1 font-semibold">Tipo de Produto</label>
            <select
              v-model="tipo"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required>
              <option disabled value="">Selecione um tipo</option>
              <option>Vestuário</option>
              <option>Eletrônico</option>
              <option>Alimento</option>
              <option>Decoração</option>
              <option>Outro</option>
            </select>
          </div>
  
          <button
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Cadastrar Produto
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const nome = ref('')
  const preco = ref('')
  const quantidade = ref('')
  const tipo = ref('')
  </script>