import { createRouter, createWebHistory } from 'vue-router'
import ItemListView from '../views/ItemListView.vue'
import nProgress from 'nprogress'
import ItemDetailView from '@/views/ItemDetailView.vue'
import { useItemStore } from '@/stores/ItemStore'
import AuctionService from '@/services/AuctionService'
import type { IAuctionItem } from '@/types'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'item-list',
         component: ItemListView,
         props: (route) => ({
            page: parseInt((route.query?.page as string) || '1'),
            perPage: parseInt((route.query?.perPage as string) || '4')
         })
      },
      {
         path: '/about',
         name: 'about',
         component: () => import('../views/AboutView.vue')
      },
      {
         path: '/item/:id',
         name: 'item-detail',
         component: ItemDetailView,
         props: true,
         beforeEnter: (to) => {
            const id: number = parseInt(to.params.id as string)
            const store = useItemStore()
            return AuctionService.getItemById(id)
               .then((res) => {
                  store.setItem(res.data as IAuctionItem)
               })
               .catch((err) => {
                  console.log(err)
                  if (err.response && err.response.status === 404) {
                     router.push({ name: '404-resource', params: { resource: 'event' } })
                  } else {
                     router.push({ name: 'network-error' })
                  }
               })
         }
      }
   ],
   scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
         return savedPosition
      } else {
         return { top: 0 }
      }
   }
})

router.beforeEach(() => {
   nProgress.start()
})

router.afterEach(() => {
   nProgress.done()
})
export default router
