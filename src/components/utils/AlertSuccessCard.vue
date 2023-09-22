<script setup lang="ts">
defineProps({
   title: String,
   description: String
})
</script>

<template>
   <div role="alert" class="py-4 flex justify-center fixed inset-x-0 top-0">
      <div class="w-80 max-w-96 min-w-80">
         <div class="bg-blue-400 text-white font-bold rounded-t px-4 py-2">
            {{ title }}
         </div>
         <div
            class="border border-t-0 border-cyan-600 rounded-b bg-blue-100 px-4 py-3 text-indigo-700"
         >
            <p>{{ description }}</p>
         </div>
      </div>
   </div>
</template>
