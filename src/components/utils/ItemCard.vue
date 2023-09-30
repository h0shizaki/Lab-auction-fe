<script setup lang="ts">
import type { IAuctionItem } from '@/types'
import type { PropType } from 'vue'

defineProps({
   item: {
      type: Object as PropType<IAuctionItem>,
      required: true
   }
})
</script>

<template>
   <RouterLink :to="{ name: 'item-detail', params: { id: item.id } }">
      <div
         class="max-w-xs min-h-full overflow-hidden bg-white rounded-lg shadow-lg hover:border hover:cursor-pointer"
      >
         <div class="px-4 py-2">
            <div class="flex">
               <div class="flex-initial w-64">
                  <h1 class="text-xl font-bold text-amber-700 uppercase">{{ item.name }}</h1>
                  <p class="text-sm text-stone-600">By {{ item.owner }}</p>
               </div>
               <div class="flex-initial w-14">
                  <p class="text-sm text-stone-600">{{ item.type }}</p>
               </div>
            </div>

            <p class="mt-1 prose-base text-black">{{ item.description.substring(0, 100) }} ...</p>

            <p class="pt-4 text-right text-sm text-gray-400">{{ item.date }}</p>
            <p class="pb-1 text-right text-sm text-gray-400">{{ item.location }}</p>
         </div>

         <img
            class="object-cover w-full h-48 mt-2 relative bottom-0"
            :src="item.image"
            alt="{{item.name}} picture"
         />
      </div>
   </RouterLink>
</template>

<style scoped></style>
