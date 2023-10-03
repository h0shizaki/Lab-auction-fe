<script setup lang='ts'>
import type { IBid } from '@/types'
import type { PropType } from 'vue'

defineProps({
   bid: {
      type: Object as PropType<IBid>,
      required: true
   },
   isSuccessBid: Boolean
})
</script>

<template>
   <div class="bg-white rounded-lg shadow-lg w-5/12 mx-auto mt-5 h-48 p-5">
      <div class="m-3 font-bold text-gray-600">
         <p>Bid number #{{bid.id}}</p>
         <p>by {{bid.owner}}</p>
      </div>

      <div class='m-3 font-semibold'>
         <p :class='{"text-amber-700": isSuccessBid}'>Amount: {{bid.amount}}</p>
         <p>Date: {{bid.date}}</p>
      </div>
   </div>
</template>

<style scoped>

</style>