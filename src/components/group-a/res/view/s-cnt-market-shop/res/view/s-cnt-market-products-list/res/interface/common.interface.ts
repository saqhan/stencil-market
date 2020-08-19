export interface MarketProductListInterface {
  header: {
    title: string,
    allProducts: string,
  },
  card: {
    id: number,
    img: string,
    disPrice?: string,
    oldPrice?: string,
    discount?: string,
    disDate?: string,
    desc: string,
    price?: string,
    weight: string,
    currency?: string,
    multipack?: {
      amount: string,
      weight: string,
    },
  }[]
}
