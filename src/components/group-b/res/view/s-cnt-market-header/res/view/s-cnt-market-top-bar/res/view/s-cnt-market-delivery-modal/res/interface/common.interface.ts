
/*
* Интерфейс для раскрития объекта topBar
* */
import {TopBarModalDeliveryInterface} from "../view/s-cnt-market-delivery-in-modal/res/interface/common.interface";
import {TopBarModalPickUpInterface} from "../view/s-cnt-market-pickUp-in-modal/res/interface/common.interface";

export interface TopBarModalInterface {
  id: number;
  modalWindowTitle: string;
  offerToEnter: string;
  offerToEnterLink: string;
  choiceDelivery: string;
  choicePickUp: string;
  Delivery: TopBarModalDeliveryInterface;
  PickUp: TopBarModalPickUpInterface;
}
