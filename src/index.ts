export * from './components';

export interface MarketAppInterface {
  id: number;
  image: string;
  title: string;
  googlePlayButton: string;
  appStoreButton: string;
}

/**
 * Элементы компонента s-cnt-market-app
 */
export interface MarketAppInterface {
  id: number;
  image: string;
  title: string;
  googlePlayButton: string;
  appStoreButton: string;
}

export interface MarketCourierInterface {
  id: number;
  image: string;
  number: string;
  text: string;
}

export interface MarketDeliveryInterface {
  img: string;
  title: string;
  btn: string;
  cities: MarketCitiesInterface[];
}

export interface MarketCitiesInterface {
  name: string;
}

export interface MarketOfferInterface{
  id: number;
  icon: string;
  text: string;
}

export interface MarketSelectionInterface{
  id: number;
  image: string;
  text?: string;
  title: string;
}

export interface MarketSpecialistInterface {
  id: number;
  image: string;
  number: string;
  text: string;
}

export interface MarketStatisticsInterface{
  id: number;
  text: string;
}

export interface MarketFooterMenuInterface {
  title: string;
  items: string[];
}

export interface MarketDownFooterInterface {
  copyright: string;
  company: string;
  download: string;
}

export interface footerContactColumnInterface {
  number: string;
  time: string;
  input: string;
  text: string;
}

export interface footerMenuInterface {
  title: string;
  menuItems: {
    title: string;
    link: string;
  };
}

export interface footerCopyrightRowInterface {
  copyright: string;
  nameCompany: string;
  download: string;
}

export interface footerItemsInterface {
  title: string;
  link: string;
}

export interface footerLinksPoliticsInterface {
  title: string;
  link: string;
}

export interface footerDataInterface {
  logoFooter: any;
  footerMenu: any;
  footerContactColumn: any;
  footerCopyrightRow: any;
  footerLinksPolitics: any;
}

export interface MarketProductListInterface {
  header: any;
  card: any;
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
  productData?: MarketProductDataItemsInterface;
}

export interface MarketProductListHeaderInterface {
  title: string;
  allProducts: string;
}

export interface MarketMultipackInterface {
  amount: string;
  weight: string;
}

export interface MarketProductsSliderCardsInterface {
  id: number,
  img: string,
  price?: string
  oldPrice?: string,
  disPrice?: string,
  currency: string,
  desc: string,
  weight: string,
}

export interface MarketPromoSliderInterface {
  id: number,
  title: string,
  description: string,
  img: string,
  link?: string,
  bgImage: string,
  bgColor: string,
  color: string,
}

export interface MarketRecentlyWatchedProductsInterface {
  id: number,
  img: string,
  price?: string,
  currency: string,
  weight: string,
  oldPrice?: string,
  disPrice?: string
  productData?: MarketProductDataItemsInterface;
}

export interface MarketProductModalInterface {
  productBlock: MarketProductBlockInterface,
  recommendedBlock: MarketRecommendedBlockInterface,
  specificationBlock: MarketSpecificationBlockInterface,
}

export interface MarketProductBlockInterface {
  button: string,
  likeIcon: string,
}

export interface MarketRecommendedBlockInterface {
  recommendedTitle: string,
}

export interface MarketSpecificationBlockInterface {
  descriptionTitle: string,
  nutritionalValueTitle: string,
  nutritionalOnTheValueTitle: string,
  compositionTitle: string,
  generalInformationTitle: string,
  hideInformation: string,
}

export interface MarketProductDataInterface {
  productData: MarketProductDataItemsInterface,
}

export interface MarketProductDataItemsInterface {
  getProduct: MarketGetProductInterface,
  getRecommended: MarketGetRecommendedInterface,
  getSpecification: MarketGetSpecificationInterface,
}

export interface MarketGetProductInterface {
  brand: string,
  products: string,
  category: string,
  defaultImgId: number,
  image?: MarketProductImgInterface[],
  name: string,
  weight: string,
  price: string,
  currency: string,
  presence: number,
}

export interface MarketProductImgInterface {
  id: number,
  img: string,
}

export interface MarketGetRecommendedInterface {
  featuredProduct: MarketFeaturedProductInterface[],
}

export interface MarketGetSpecificationInterface {
  description: string,
  composition: string,
  nutritionalValue: MarketGetSpecificationInfoArrInterface[],
  BrandNameTitle: string,
  BrandName: string,
  generalInformation: MarketGetSpecificationInfoArrInterface[],
}

export interface MarketGetSpecificationInfoArrInterface {
  id: number,
  infoTitle: string,
  info: string,
}

export interface MarketFeaturedProductInterface {
  id: number,
  image: string,
  price: string,
  productName: string,
  weight: string,
}

export interface MarketChoiceInterface {
  id: number;
  image: string;
  number: string;
  text: string;
}

/**
 * group-b
 */

/**
 * Интерфейс для блока навигации в хедере
 * */

export interface MarketNavBarInterface {
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
export interface MarketSubcategoriesInterface {
  id: string;
  title: string;
  img: string;
}[]

/**
 * данные для магазинов из левого каталога
 * */
export interface MarketLeftMenuCatalogInterface {
  id: number;
  title: string;
  img: string;
  sales: string;
  subcategories: MarketSubcategoriesInterface;
}

export interface MarketSelectShopsInterface {
  id: number,
  title: string,
  description: string,
  time: string,
  img: string,
  backgroundColor: string,
  city: string,
}

/**
 * данные для подкатегорий из левого каталога
 * */
export interface MarketSubcategoriesInterface {
  id: string;
  title: string;
  img: string;
}[]

/**
 * данные для магазинов из левого каталога
 * */
export interface MarketLeftMenuCatalogInterface {
  id: number;
  title: string;
  img: string;
  sales: string;
  subcategories: MarketSubcategoriesInterface;
}

export interface MarketSelectShopsInterface {
  id: number,
  title: string,
  description: string,
  time: string,
  img: string,
  backgroundColor: string,
  city: string,
}


/*
* Интерфейс для раскрития объекта topBar
* */

export interface MarketTopBarInterface {
  id: string;
  choiceDelivery: string;
  choicePickUp: string;
  choiceAddress: string;
  choiceAddressIcon: string;
  timeOfDeliveryText: string;
  timeOfDelivery: string;
  phoneNumber: string;
  workingHours: string;
  loginAndRegistration: any;
  modalWindow: MarketTopBarModalInterface;
}

export interface MarketTopBarModalInterface {
  id: number;
  modalWindowTitle: string;
  offerToEnter: string;
  offerToEnterLink: string;
  choiceDelivery: string;
  choicePickUp: string;
  Delivery: MarketTopBarModalDeliveryInterface;
  PickUp: MarketTopBarModalPickUpInterface;
}

/*
* Интерфейс для раскрития объекта topBar
* */
export interface MarketTopBarModalDeliveryInterface {
  id: number;
  enterAddressText: string;
  searchIcon: string;
  btnText: string;
  cityForSelectedDelivery: any;
}

/*
* Интерфейс для раскрития объекта topBar
* */
export interface MarketTopBarModalPickUpInterface {
  id: number;
  locationIcon: string;
  city: string;
  selectIcon: string;
  defaultCity: number;
  cityForSelected: MarketCityOfPickUpInterface [];
  logoImg: string;
  storeName: string;
  numberOfStores: string;
  selectedStoreIcon: string;
  storeWithdrawalIcon: string;
  updateSelectedAddress: string;
}

export interface MarketCityOfPickUpInterface {
  id: number;
  city: string;
  storeAddress: MarketAddressCityOfPickUpInterface [];
}

export interface MarketAddressCityOfPickUpInterface {
  id: number;
  storeAddress: string;
  storeWorkTime: string;
  btnText: string;
}

/*
* Интерфейс для раскрития объекта topBar
* */
export interface MarketTopBarModalDeliveryInterface {
  id: number;
  enterAddressText: string;
  searchIcon: string;
  btnText: string;
  cityForSelectedDelivery: any;
}

/*
* Интерфейс для раскрития объекта topBar
* */
export interface MarketTopBarModalPickUpInterface {
  id: number;
  locationIcon: string;
  city: string;
  selectIcon: string;
  defaultCity: number;
  cityForSelected: MarketCityOfPickUpInterface [];
  logoImg: string;
  storeName: string;
  numberOfStores: string;
  selectedStoreIcon: string;
  storeWithdrawalIcon: string;
  updateSelectedAddress: string;
}

export interface MarketCityOfPickUpInterface {
  id: number;
  city: string;
  storeAddress: MarketAddressCityOfPickUpInterface [];
}

export interface MarketAddressCityOfPickUpInterface {
  id: number;
  storeAddress: string;
  storeWorkTime: string;
  btnText: string;
}

export interface MarketLoginAndRegistrationInterface {
  id: number;
  closeIcon: string;
  loginBtnText: string;
  regBtnText: string;
  users: MarketUsersArrInterface[];
  login: MarketLoginInterface;
  reg: MarketRegistrationInterface;
}

export interface MarketUsersArrInterface {
  id: number;
  name: string;
  mail: string;
  password: string;
  forBusiness: boolean;
  mailing: boolean;
}

export interface MarketLoginInterface {
  id: number;
  rememberMe: string;
  logIn: string;
  remindPass: string;
  bankIcon: any;
  logInToBank: string;
  orLogInSocial: string;
  socialIcons: MarketSocialIconsInterface[];
}

export interface MarketSocialIconsInterface {
  id: number;
  social: string;
}

export interface MarketRegistrationInterface {
  id: number;
  checkForBis: string;
  checkForAdvertisingText: string;
  checkForAdvertisingLink: string;
  regBtn: string;
  agreementText: string;
  agreementLink: string;
}


