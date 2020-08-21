
/*
* Интерфейс для раскрытия объекта
* */

import {MarketProductInterface} from "../view/s-cnt-market-product/res/interface/common.interface";
import {MarketRecommendedInterface} from "../view/s-cnt-market-recommended/res/interface/common.interface";
import {MarketSpecificationInterface} from "../view/s-cnt-market-specification/res/interface/common.interface";

export interface modalWindow {
  getProduct: MarketProductInterface;
  getRecommended: MarketRecommendedInterface;
  getSpecification: MarketSpecificationInterface;
}
