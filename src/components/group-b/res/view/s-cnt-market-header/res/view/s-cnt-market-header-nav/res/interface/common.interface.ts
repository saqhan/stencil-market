/**
 * Интерфейс для блока навигации в хедере
 * */

export interface navBarInterface {
  catalogBtn: string;
  backgroundImageFullMenu: string;
  placeholder: string;
  iconUser: string;
  iconWishList: string;
  iconOrders: string;
  iconCart: string;
  titleOrders: string;
  titleCart: string;
}

/**
 * данные для подкатегорий из левого каталога
 * */
export interface subcategoriesInterface {
  id: string;
  title: string;
  img: string;
}[]

/**
 * данные для магазинов из левого каталога
 * */
export interface leftMenuCatalogInterface {
  id: number;
  title: string;
  img: string;
  sales: string;
  subcategories: subcategoriesInterface;
}

export interface selectShopsInterface {
  id: number,
  title: string,
  description: string,
  time: string,
  img: string,
  backgroundColor: string,
  city: string,
}
