
/*
* Интерфейс для раскрития объекта topBar
* */
import {TopBarModalInterface} from "../view/s-cnt-market-delivery-modal/res/interface/common.interface";

export interface TopBarInterface {
  id: string;
  choiceDelivery: string;
  choicePickUp: string;
  choiceAddress: string;
  choiceAddressIcon: string;
  timeOfDeliveryText: string;
  timeOfDelivery: string;
  phoneNumber: string;
  workingHours: string;
  modalWindow: TopBarModalInterface;
}
