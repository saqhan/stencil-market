/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MarketOfferInterface, } from "./components/group-a/res/view/s-cnt-market-first-page/res/view/s-cnt-market-offer/res/interface/common.interface";
import { MarketSelectionInterface, } from "./components/group-a/res/view/s-cnt-market-first-page/res/view/s-cnt-market-selection/res/interface/common.interface";
import { MarketProductInterface, } from "./components/group-a/res/view/s-cnt-market-modal-window/res/view/s-cnt-market-product/res/interface/common.interface";
import { MarketProductsSliderCardsInterface, } from "./components/group-a/res/view/s-cnt-market-shop/res/view/s-cnt-market-products-slider/res/interface/common.interface";
import { MarketPromoSliderInterface, } from "./components/group-a/res/view/s-cnt-market-shop/res/view/s-cnt-market-promo-slider/res/interface/common.interface";
import { MarketSpecificationInterface, } from "./components/group-a/res/view/s-cnt-market-modal-window/res/view/s-cnt-market-specification/res/interface/common.interface";
export namespace Components {
    interface GroupA {
    }
    interface GroupB {
    }
    interface MyComponent {
    }
    interface SCntMarketFirstPage {
    }
    interface SCntMarketHeader {
    }
    interface SCntMarketItemOffer {
        /**
          * Приём данных из массива для вывода
         */
        "MarketOfferInterface": MarketOfferInterface[];
        /**
          * Данные для компонента Item Offer
         */
        "forOffer": any;
    }
    interface SCntMarketItemRecommended {
        /**
          * Данные для Item-Recommended
         */
        "getRecommended": any;
    }
    interface SCntMarketItemSelection {
        /**
          * Приём данных из массива для вывода
         */
        "MarketSelectionInterface": MarketSelectionInterface[];
        /**
          * Данные для карточек магазинов
         */
        "forSelection": any;
    }
    interface SCntMarketItemStatistics {
        /**
          * Данные для компонента Statistics
         */
        "forStatistics": any;
    }
    interface SCntMarketModalWindow {
    }
    interface SCntMarketOffer {
        /**
          * Приём данных из массива для вывода
         */
        "MarketOfferInterface": MarketOfferInterface[];
        /**
          * Данные для компонента Offer
         */
        "forOffer": any;
        /**
          * Данные для заголовка
         */
        "offerTitleText": string;
    }
    interface SCntMarketProduct {
        /**
          * Интерфейс для Product
         */
        "MarketProductInterface": MarketProductInterface[];
        /**
          * Данные для Product
         */
        "getProduct": any;
    }
    interface SCntMarketProductsList {
    }
    interface SCntMarketProductsListCard {
    }
    interface SCntMarketProductsSlider {
        /**
          * Получаем данные карточек слайдера популярных продуктов
         */
        "productsSliderCards": MarketProductsSliderCardsInterface[];
        /**
          * Заголовк слайдера
         */
        "productsSliderTitle": string;
    }
    interface SCntMarketProductsSliderCard {
        /**
          * Получаем данные карточек слайдера популярных продуктов
         */
        "productsSliderCards": MarketProductsSliderCardsInterface;
    }
    interface SCntMarketPromoSlider {
        /**
          * Получаем данные карточек промо-слайдера
         */
        "promoSliderCards": MarketPromoSliderInterface[];
    }
    interface SCntMarketPromoSliderCard {
        /**
          * Получаем данные карточек промо-слайдера
         */
        "promoSliderCards": MarketPromoSliderInterface;
    }
    interface SCntMarketRecommended {
        /**
          * Данные для Recommended
         */
        "getRecommended": any;
        "info": any;
    }
    interface SCntMarketSelection {
        /**
          * Приём данных из массива для вывода
         */
        "MarketSelectionInterface": MarketSelectionInterface[];
        /**
          * Данные для карточек магазинов
         */
        "forSelection": any;
        /**
          * Данные для главной картинки
         */
        "homePageImage": any;
        /**
          * Данные для подзаголовка на картинке
         */
        "homeSubText": any;
        /**
          * Данные для заголовка на картинке
         */
        "homeText": any;
    }
    interface SCntMarketShop {
    }
    interface SCntMarketSpecification {
        /**
          * Интерфейс для Specification
         */
        "MarketSpecificationInterface": MarketSpecificationInterface[];
        /**
          * Данные для Specification
         */
        "getSpecification": any;
    }
    interface SCntMarketStatistics {
        /**
          * Данные для компонента Statistics
         */
        "forStatistics": any;
    }
}
declare global {
    interface HTMLGroupAElement extends Components.GroupA, HTMLStencilElement {
    }
    var HTMLGroupAElement: {
        prototype: HTMLGroupAElement;
        new (): HTMLGroupAElement;
    };
    interface HTMLGroupBElement extends Components.GroupB, HTMLStencilElement {
    }
    var HTMLGroupBElement: {
        prototype: HTMLGroupBElement;
        new (): HTMLGroupBElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLSCntMarketFirstPageElement extends Components.SCntMarketFirstPage, HTMLStencilElement {
    }
    var HTMLSCntMarketFirstPageElement: {
        prototype: HTMLSCntMarketFirstPageElement;
        new (): HTMLSCntMarketFirstPageElement;
    };
    interface HTMLSCntMarketHeaderElement extends Components.SCntMarketHeader, HTMLStencilElement {
    }
    var HTMLSCntMarketHeaderElement: {
        prototype: HTMLSCntMarketHeaderElement;
        new (): HTMLSCntMarketHeaderElement;
    };
    interface HTMLSCntMarketItemOfferElement extends Components.SCntMarketItemOffer, HTMLStencilElement {
    }
    var HTMLSCntMarketItemOfferElement: {
        prototype: HTMLSCntMarketItemOfferElement;
        new (): HTMLSCntMarketItemOfferElement;
    };
    interface HTMLSCntMarketItemRecommendedElement extends Components.SCntMarketItemRecommended, HTMLStencilElement {
    }
    var HTMLSCntMarketItemRecommendedElement: {
        prototype: HTMLSCntMarketItemRecommendedElement;
        new (): HTMLSCntMarketItemRecommendedElement;
    };
    interface HTMLSCntMarketItemSelectionElement extends Components.SCntMarketItemSelection, HTMLStencilElement {
    }
    var HTMLSCntMarketItemSelectionElement: {
        prototype: HTMLSCntMarketItemSelectionElement;
        new (): HTMLSCntMarketItemSelectionElement;
    };
    interface HTMLSCntMarketItemStatisticsElement extends Components.SCntMarketItemStatistics, HTMLStencilElement {
    }
    var HTMLSCntMarketItemStatisticsElement: {
        prototype: HTMLSCntMarketItemStatisticsElement;
        new (): HTMLSCntMarketItemStatisticsElement;
    };
    interface HTMLSCntMarketModalWindowElement extends Components.SCntMarketModalWindow, HTMLStencilElement {
    }
    var HTMLSCntMarketModalWindowElement: {
        prototype: HTMLSCntMarketModalWindowElement;
        new (): HTMLSCntMarketModalWindowElement;
    };
    interface HTMLSCntMarketOfferElement extends Components.SCntMarketOffer, HTMLStencilElement {
    }
    var HTMLSCntMarketOfferElement: {
        prototype: HTMLSCntMarketOfferElement;
        new (): HTMLSCntMarketOfferElement;
    };
    interface HTMLSCntMarketProductElement extends Components.SCntMarketProduct, HTMLStencilElement {
    }
    var HTMLSCntMarketProductElement: {
        prototype: HTMLSCntMarketProductElement;
        new (): HTMLSCntMarketProductElement;
    };
    interface HTMLSCntMarketProductsListElement extends Components.SCntMarketProductsList, HTMLStencilElement {
    }
    var HTMLSCntMarketProductsListElement: {
        prototype: HTMLSCntMarketProductsListElement;
        new (): HTMLSCntMarketProductsListElement;
    };
    interface HTMLSCntMarketProductsListCardElement extends Components.SCntMarketProductsListCard, HTMLStencilElement {
    }
    var HTMLSCntMarketProductsListCardElement: {
        prototype: HTMLSCntMarketProductsListCardElement;
        new (): HTMLSCntMarketProductsListCardElement;
    };
    interface HTMLSCntMarketProductsSliderElement extends Components.SCntMarketProductsSlider, HTMLStencilElement {
    }
    var HTMLSCntMarketProductsSliderElement: {
        prototype: HTMLSCntMarketProductsSliderElement;
        new (): HTMLSCntMarketProductsSliderElement;
    };
    interface HTMLSCntMarketProductsSliderCardElement extends Components.SCntMarketProductsSliderCard, HTMLStencilElement {
    }
    var HTMLSCntMarketProductsSliderCardElement: {
        prototype: HTMLSCntMarketProductsSliderCardElement;
        new (): HTMLSCntMarketProductsSliderCardElement;
    };
    interface HTMLSCntMarketPromoSliderElement extends Components.SCntMarketPromoSlider, HTMLStencilElement {
    }
    var HTMLSCntMarketPromoSliderElement: {
        prototype: HTMLSCntMarketPromoSliderElement;
        new (): HTMLSCntMarketPromoSliderElement;
    };
    interface HTMLSCntMarketPromoSliderCardElement extends Components.SCntMarketPromoSliderCard, HTMLStencilElement {
    }
    var HTMLSCntMarketPromoSliderCardElement: {
        prototype: HTMLSCntMarketPromoSliderCardElement;
        new (): HTMLSCntMarketPromoSliderCardElement;
    };
    interface HTMLSCntMarketRecommendedElement extends Components.SCntMarketRecommended, HTMLStencilElement {
    }
    var HTMLSCntMarketRecommendedElement: {
        prototype: HTMLSCntMarketRecommendedElement;
        new (): HTMLSCntMarketRecommendedElement;
    };
    interface HTMLSCntMarketSelectionElement extends Components.SCntMarketSelection, HTMLStencilElement {
    }
    var HTMLSCntMarketSelectionElement: {
        prototype: HTMLSCntMarketSelectionElement;
        new (): HTMLSCntMarketSelectionElement;
    };
    interface HTMLSCntMarketShopElement extends Components.SCntMarketShop, HTMLStencilElement {
    }
    var HTMLSCntMarketShopElement: {
        prototype: HTMLSCntMarketShopElement;
        new (): HTMLSCntMarketShopElement;
    };
    interface HTMLSCntMarketSpecificationElement extends Components.SCntMarketSpecification, HTMLStencilElement {
    }
    var HTMLSCntMarketSpecificationElement: {
        prototype: HTMLSCntMarketSpecificationElement;
        new (): HTMLSCntMarketSpecificationElement;
    };
    interface HTMLSCntMarketStatisticsElement extends Components.SCntMarketStatistics, HTMLStencilElement {
    }
    var HTMLSCntMarketStatisticsElement: {
        prototype: HTMLSCntMarketStatisticsElement;
        new (): HTMLSCntMarketStatisticsElement;
    };
    interface HTMLElementTagNameMap {
        "group-a": HTMLGroupAElement;
        "group-b": HTMLGroupBElement;
        "my-component": HTMLMyComponentElement;
        "s-cnt-market-first-page": HTMLSCntMarketFirstPageElement;
        "s-cnt-market-header": HTMLSCntMarketHeaderElement;
        "s-cnt-market-item-offer": HTMLSCntMarketItemOfferElement;
        "s-cnt-market-item-recommended": HTMLSCntMarketItemRecommendedElement;
        "s-cnt-market-item-selection": HTMLSCntMarketItemSelectionElement;
        "s-cnt-market-item-statistics": HTMLSCntMarketItemStatisticsElement;
        "s-cnt-market-modal-window": HTMLSCntMarketModalWindowElement;
        "s-cnt-market-offer": HTMLSCntMarketOfferElement;
        "s-cnt-market-product": HTMLSCntMarketProductElement;
        "s-cnt-market-products-list": HTMLSCntMarketProductsListElement;
        "s-cnt-market-products-list-card": HTMLSCntMarketProductsListCardElement;
        "s-cnt-market-products-slider": HTMLSCntMarketProductsSliderElement;
        "s-cnt-market-products-slider-card": HTMLSCntMarketProductsSliderCardElement;
        "s-cnt-market-promo-slider": HTMLSCntMarketPromoSliderElement;
        "s-cnt-market-promo-slider-card": HTMLSCntMarketPromoSliderCardElement;
        "s-cnt-market-recommended": HTMLSCntMarketRecommendedElement;
        "s-cnt-market-selection": HTMLSCntMarketSelectionElement;
        "s-cnt-market-shop": HTMLSCntMarketShopElement;
        "s-cnt-market-specification": HTMLSCntMarketSpecificationElement;
        "s-cnt-market-statistics": HTMLSCntMarketStatisticsElement;
    }
}
declare namespace LocalJSX {
    interface GroupA {
    }
    interface GroupB {
    }
    interface MyComponent {
    }
    interface SCntMarketFirstPage {
    }
    interface SCntMarketHeader {
    }
    interface SCntMarketItemOffer {
        /**
          * Приём данных из массива для вывода
         */
        "MarketOfferInterface"?: MarketOfferInterface[];
        /**
          * Данные для компонента Item Offer
         */
        "forOffer"?: any;
    }
    interface SCntMarketItemRecommended {
        /**
          * Данные для Item-Recommended
         */
        "getRecommended"?: any;
    }
    interface SCntMarketItemSelection {
        /**
          * Приём данных из массива для вывода
         */
        "MarketSelectionInterface"?: MarketSelectionInterface[];
        /**
          * Данные для карточек магазинов
         */
        "forSelection"?: any;
    }
    interface SCntMarketItemStatistics {
        /**
          * Данные для компонента Statistics
         */
        "forStatistics"?: any;
    }
    interface SCntMarketModalWindow {
    }
    interface SCntMarketOffer {
        /**
          * Приём данных из массива для вывода
         */
        "MarketOfferInterface"?: MarketOfferInterface[];
        /**
          * Данные для компонента Offer
         */
        "forOffer"?: any;
        /**
          * Данные для заголовка
         */
        "offerTitleText"?: string;
    }
    interface SCntMarketProduct {
        /**
          * Интерфейс для Product
         */
        "MarketProductInterface"?: MarketProductInterface[];
        /**
          * Данные для Product
         */
        "getProduct"?: any;
    }
    interface SCntMarketProductsList {
    }
    interface SCntMarketProductsListCard {
    }
    interface SCntMarketProductsSlider {
        /**
          * Получаем данные карточек слайдера популярных продуктов
         */
        "productsSliderCards"?: MarketProductsSliderCardsInterface[];
        /**
          * Заголовк слайдера
         */
        "productsSliderTitle"?: string;
    }
    interface SCntMarketProductsSliderCard {
        /**
          * Получаем данные карточек слайдера популярных продуктов
         */
        "productsSliderCards"?: MarketProductsSliderCardsInterface;
    }
    interface SCntMarketPromoSlider {
        /**
          * Получаем данные карточек промо-слайдера
         */
        "promoSliderCards"?: MarketPromoSliderInterface[];
    }
    interface SCntMarketPromoSliderCard {
        /**
          * Получаем данные карточек промо-слайдера
         */
        "promoSliderCards"?: MarketPromoSliderInterface;
    }
    interface SCntMarketRecommended {
        /**
          * Данные для Recommended
         */
        "getRecommended"?: any;
        "info"?: any;
    }
    interface SCntMarketSelection {
        /**
          * Приём данных из массива для вывода
         */
        "MarketSelectionInterface"?: MarketSelectionInterface[];
        /**
          * Данные для карточек магазинов
         */
        "forSelection"?: any;
        /**
          * Данные для главной картинки
         */
        "homePageImage"?: any;
        /**
          * Данные для подзаголовка на картинке
         */
        "homeSubText"?: any;
        /**
          * Данные для заголовка на картинке
         */
        "homeText"?: any;
    }
    interface SCntMarketShop {
    }
    interface SCntMarketSpecification {
        /**
          * Интерфейс для Specification
         */
        "MarketSpecificationInterface"?: MarketSpecificationInterface[];
        /**
          * Данные для Specification
         */
        "getSpecification"?: any;
    }
    interface SCntMarketStatistics {
        /**
          * Данные для компонента Statistics
         */
        "forStatistics"?: any;
    }
    interface IntrinsicElements {
        "group-a": GroupA;
        "group-b": GroupB;
        "my-component": MyComponent;
        "s-cnt-market-first-page": SCntMarketFirstPage;
        "s-cnt-market-header": SCntMarketHeader;
        "s-cnt-market-item-offer": SCntMarketItemOffer;
        "s-cnt-market-item-recommended": SCntMarketItemRecommended;
        "s-cnt-market-item-selection": SCntMarketItemSelection;
        "s-cnt-market-item-statistics": SCntMarketItemStatistics;
        "s-cnt-market-modal-window": SCntMarketModalWindow;
        "s-cnt-market-offer": SCntMarketOffer;
        "s-cnt-market-product": SCntMarketProduct;
        "s-cnt-market-products-list": SCntMarketProductsList;
        "s-cnt-market-products-list-card": SCntMarketProductsListCard;
        "s-cnt-market-products-slider": SCntMarketProductsSlider;
        "s-cnt-market-products-slider-card": SCntMarketProductsSliderCard;
        "s-cnt-market-promo-slider": SCntMarketPromoSlider;
        "s-cnt-market-promo-slider-card": SCntMarketPromoSliderCard;
        "s-cnt-market-recommended": SCntMarketRecommended;
        "s-cnt-market-selection": SCntMarketSelection;
        "s-cnt-market-shop": SCntMarketShop;
        "s-cnt-market-specification": SCntMarketSpecification;
        "s-cnt-market-statistics": SCntMarketStatistics;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "group-a": LocalJSX.GroupA & JSXBase.HTMLAttributes<HTMLGroupAElement>;
            "group-b": LocalJSX.GroupB & JSXBase.HTMLAttributes<HTMLGroupBElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "s-cnt-market-first-page": LocalJSX.SCntMarketFirstPage & JSXBase.HTMLAttributes<HTMLSCntMarketFirstPageElement>;
            "s-cnt-market-header": LocalJSX.SCntMarketHeader & JSXBase.HTMLAttributes<HTMLSCntMarketHeaderElement>;
            "s-cnt-market-item-offer": LocalJSX.SCntMarketItemOffer & JSXBase.HTMLAttributes<HTMLSCntMarketItemOfferElement>;
            "s-cnt-market-item-recommended": LocalJSX.SCntMarketItemRecommended & JSXBase.HTMLAttributes<HTMLSCntMarketItemRecommendedElement>;
            "s-cnt-market-item-selection": LocalJSX.SCntMarketItemSelection & JSXBase.HTMLAttributes<HTMLSCntMarketItemSelectionElement>;
            "s-cnt-market-item-statistics": LocalJSX.SCntMarketItemStatistics & JSXBase.HTMLAttributes<HTMLSCntMarketItemStatisticsElement>;
            "s-cnt-market-modal-window": LocalJSX.SCntMarketModalWindow & JSXBase.HTMLAttributes<HTMLSCntMarketModalWindowElement>;
            "s-cnt-market-offer": LocalJSX.SCntMarketOffer & JSXBase.HTMLAttributes<HTMLSCntMarketOfferElement>;
            "s-cnt-market-product": LocalJSX.SCntMarketProduct & JSXBase.HTMLAttributes<HTMLSCntMarketProductElement>;
            "s-cnt-market-products-list": LocalJSX.SCntMarketProductsList & JSXBase.HTMLAttributes<HTMLSCntMarketProductsListElement>;
            "s-cnt-market-products-list-card": LocalJSX.SCntMarketProductsListCard & JSXBase.HTMLAttributes<HTMLSCntMarketProductsListCardElement>;
            "s-cnt-market-products-slider": LocalJSX.SCntMarketProductsSlider & JSXBase.HTMLAttributes<HTMLSCntMarketProductsSliderElement>;
            "s-cnt-market-products-slider-card": LocalJSX.SCntMarketProductsSliderCard & JSXBase.HTMLAttributes<HTMLSCntMarketProductsSliderCardElement>;
            "s-cnt-market-promo-slider": LocalJSX.SCntMarketPromoSlider & JSXBase.HTMLAttributes<HTMLSCntMarketPromoSliderElement>;
            "s-cnt-market-promo-slider-card": LocalJSX.SCntMarketPromoSliderCard & JSXBase.HTMLAttributes<HTMLSCntMarketPromoSliderCardElement>;
            "s-cnt-market-recommended": LocalJSX.SCntMarketRecommended & JSXBase.HTMLAttributes<HTMLSCntMarketRecommendedElement>;
            "s-cnt-market-selection": LocalJSX.SCntMarketSelection & JSXBase.HTMLAttributes<HTMLSCntMarketSelectionElement>;
            "s-cnt-market-shop": LocalJSX.SCntMarketShop & JSXBase.HTMLAttributes<HTMLSCntMarketShopElement>;
            "s-cnt-market-specification": LocalJSX.SCntMarketSpecification & JSXBase.HTMLAttributes<HTMLSCntMarketSpecificationElement>;
            "s-cnt-market-statistics": LocalJSX.SCntMarketStatistics & JSXBase.HTMLAttributes<HTMLSCntMarketStatisticsElement>;
        }
    }
}
