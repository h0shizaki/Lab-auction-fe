<script setup lang='ts'>
import ItemCard from '@/components/utils/ItemCard.vue'

</script>

<template>
   <main>
      <h1 class='prose-zinc'>Hello world!</h1>

      <div class="grid w-5/6 gap-4 grid-cols-4  mx-auto py-4">
         <ItemCard v-for='index in 10' :key='index' />
      </div>
   </main>


</template>
