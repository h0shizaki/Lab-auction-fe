export interface IAuctionItem {
   id: number
   name: string
   description: string
   owner: string
   date: string
   location: string
   image: string
}

export interface IBid {
   id: number
   owner: string
   amount: number
   date: string
}
