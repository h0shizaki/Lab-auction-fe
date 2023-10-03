// @ts-ignore
import axios from 'axios'
import type { IAuctionItem } from '@/types'
import type { AxiosInstance, AxiosResponse } from 'axios'

const apiClient: AxiosInstance = axios.create({
   baseURL: import.meta.env.VITE_BACKEND_URL,
   withCredentials: false,
   headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
   }
})
const getItem = (perPage: number = 4, page: number = 1): Promise<AxiosResponse<IAuctionItem[]>> => {
   return apiClient.get<IAuctionItem[]>(`/items?_limit=${perPage}&_page=${page}`)
}
const getItemById = (id: number): Promise<AxiosResponse<IAuctionItem>> => {
   return apiClient.get<IAuctionItem>(`/items/${id}`)
}

const getItemByKeyword = (keyword: string, perPage: number = 4, page: number = 1): Promise<AxiosResponse<IAuctionItem[]>> => {
   return apiClient.get<IAuctionItem[]>(`/items?_limit=${perPage}&_page=${page}&title=${keyword}`)
}

const getItemLessThanKeyword = (keyword: number, perPage: number = 4, page: number = 1): Promise<AxiosResponse<IAuctionItem[]>> => {
   return apiClient.get<IAuctionItem[]>(`/items?_limit=${perPage}&_page=${page}&price=${keyword}`)
}

export default { getItem, getItemById, getItemByKeyword, getItemLessThanKeyword }
