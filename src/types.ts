export interface IAuctionItem {
   id: number
   name: string
   type: string
   description: string
   owner: string
   date: string
   location: string
   image: string
   ownBids: Array<IBid>
   successBid: IBid
}

export interface IBid {
   id: number
   owner: string
   amount: number
   date: string
   auctionItem: IAuctionItem
}
