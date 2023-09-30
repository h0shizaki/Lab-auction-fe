<script setup lang="ts">
import ItemCard from '@/components/utils/ItemCard.vue'
import SearchBar from '@/components/utils/SearchBar.vue'
import { computed, ref } from 'vue'
import type { IAuctionItem } from '@/types'
import { onBeforeRouteUpdate, useRouter } from 'vue-router'
import AuctionService from '@/services/AuctionService'
import type { AxiosResponse } from 'axios'

const props = defineProps({
   page: {
      type: Number,
      required: true
   },
   perPage: {
      type: Number,
      default: 4
   }
})

const items = ref<Array<IAuctionItem>>([])
const totalItem = ref<number>(0)
const itemPerPage = ref<Number>(props.perPage || 3)

const router = useRouter()
const searchTerm = ref<string>('')

const hasNextPage = computed(() => {
   const totalPages = Math.ceil(totalItem.value / props.perPage)
   return props.page?.valueOf() < totalPages
})

AuctionService.getItem()
   .then((res: AxiosResponse<IAuctionItem[]>) => {
      items.value = res.data as IAuctionItem[]
      totalItem.value = res.headers['x-total-count']
   })
   .catch(() => {
      router.push({ name: 'network-error' })
   })

onBeforeRouteUpdate((to, from, next) => {
   const toPage = Number(to.query.page)
   const perPage = Number(to.query.perPage)

   AuctionService.getItem(perPage, toPage)
      .then((res: AxiosResponse<IAuctionItem[]>) => {
         items.value = res.data as IAuctionItem[]
         totalItem.value = res.headers['x-total-count']
         console.log('total item', totalItem.value)
      })
      .catch(() => {
         router.push({ name: 'network-error' })
      })
   next()
})
</script>

<template>
   <main>
      <p class="text-2xl px-5 py-3 font-bold text-amber-500">Auction for good</p>
      <div class="my-5">
         <SearchBar v-model:search-term="searchTerm" />
      </div>

      <div class="grid w-5/6 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-auto py-4">
         <ItemCard v-for="item in items" :item="item" :key="item.id" />
      </div>

      <div class="pagination">
         <RouterLink
            :to="{ name: 'item-list', query: { page: page - 1, perPage: itemPerPage.toString() } }"
            rel="prev"
            v-if="page != 1"
            id="page-prev"
         >
            🔙 Prev Page
         </RouterLink>
         <select
            id="perPage"
            v-model="itemPerPage"
            @change="
               () => {
                  router.push({
                     name: 'item-list',
                     query: { page: page, perPage: itemPerPage.toString() }
                  })
               }
            "
         >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
         </select>
         <RouterLink
            :to="{ name: 'item-list', query: { page: page + 1, perPage: itemPerPage.toString() } }"
            rel="next"
            v-if="hasNextPage"
            id="page-next"
         >
            Next Page 🔜
         </RouterLink>
      </div>
   </main>
</template>
