<script setup lang="ts">
import { useItemStore } from '@/stores/ItemStore'
import { storeToRefs } from 'pinia'

const store = useItemStore()
const item = storeToRefs(store).item
</script>

<template>
   <div v-if="item" class="bg-white rounded-lg shadow-lg w-5/12 mx-auto mt-5">
      <div class="m-3 font-semibold text-gray-600">
         <p>{{ item.name }} on {{ item.date }} @ {{ item.location }}</p>
         <p>Owner: {{ item.owner }}</p>
      </div>

      <div class="p-4 text-gray-500">
         <p>{{ item.description }}</p>
         <img class="mt-4 w-64 mx-auto" :src="item.image" />
      </div>

      <div class="m-3 font-semibold text-gray-600">BID</div>
   </div>
</template>

<style scoped></style>
