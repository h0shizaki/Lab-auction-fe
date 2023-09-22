<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <header>
      <div class="wrapper pb-3">
         <nav
            class="flex flex-nowrap items-center gap-4 px-1 h-14 bg-amber-700 text-white text-xl font-medium"
         >
            <div>
               <RouterLink to="/">Home</RouterLink>
            </div>
            <div>
               <RouterLink to="/about">About</RouterLink>
            </div>
         </nav>
      </div>
   </header>

   <RouterView />
</template>

<style scoped></style>
