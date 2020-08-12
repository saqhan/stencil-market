export interface MarketCardInterface {
  currency: string,
  desc: string,
  id: number,
  img: string,
  multipack: {
    amount: string,
    weight: string,
  },
  price?: string,
  weight: string,
  disDate?: string,
  disPrice?: string,
  discount?: string,
  oldPrice?: string,
}
