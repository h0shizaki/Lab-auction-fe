import { defineStore } from 'pinia'
import type { IAuctionItem } from '@/types'

export const useItemStore = defineStore('item', {
   state: () => ({
      item: null as IAuctionItem | null
   }),
   actions: {
      setItem(item: IAuctionItem) {
         this.item = item
      }
   }
})
