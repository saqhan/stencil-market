/*
* Интерфейс для раскрития объекта topBar
* */
export interface TopBarModalPickUpInterface {
  id: number;
  locationIcon: string;
  city: string;
  selectIcon: string;
  defaultCity: number;
  cityForSelected: CityOfPickUpInterface [];
  logoImg: string;
  storeName: string;
  numberOfStores: string;
  selectedStoreIcon: string;
  storeWithdrawalIcon: string;
  updateSelectedAddress: string;
}

export interface CityOfPickUpInterface {
  id: number;
  city: string;
  storeAddress: AddressCityOfPickUpInterface [];
}

export interface AddressCityOfPickUpInterface {
  id: number;
  storeAddress: string;
  storeWorkTime: string;
  btnText: string;
}
