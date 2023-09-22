<script setup lang="ts">
import ItemCard from '@/components/utils/ItemCard.vue'
import SearchBar from '@/components/utils/SearchBar.vue'
import { ref } from 'vue'

const searchTerm = ref<string>('')
</script>

<template>
   <main>
   <p class='text-2xl px-2 py-3 font-bold text-amber-500'>Auction for good</p>
      <div class='p-2' >
         <h3>Search Box</h3>
         <SearchBar v-model:search-term='searchTerm'/>
      </div>

      <div class="grid w-5/6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-auto py-4">
         <ItemCard v-for="index in 5" :key="index" />
      </div>
   </main>
</template>
