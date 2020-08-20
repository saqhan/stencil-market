export interface MarketProductListInterface {
  header: MarketProductListHeaderInterface;
  card: MarketProductListCardInterface[];
}

export interface MarketProductListCardInterface {
  currency: string;
  desc: string;
  id: number;
  img: string;
  multipack?: MarketMultipackInterface;
  price?: string;
  weight: string;
  disDate?: string;
  disPrice?: string;
  discount?: string;
  oldPrice?: string;
}

export interface MarketProductListHeaderInterface {
  title: string;
  allProducts: string;
}

export interface MarketMultipackInterface {
  amount: string;
  weight: string;
}
