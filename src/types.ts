export interface IAuctionItem {
   id: number
   name: string
   type: string
   description: string
   owner: string
   date: string
   location: string
   image: string
   bids: Array<IBid>
}

export interface IBid {
   id: number
   owner: string
   amount: number
   date: string
}
