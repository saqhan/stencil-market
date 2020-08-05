/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MarketProductInterface, } from "./components/group-a/res/view/s-cnt-market-modal-window/res/view/s-cnt-market-product/interface/common.interface";
import { MarketPromoSliderInterface, } from "./components/group-a/res/view/s-cnt-market-shop/res/view/s-cnt-market-promo-slider/res/interface/common.interface";
import { MarketSpecificationInterface, } from "./components/group-a/res/view/s-cnt-market-modal-window/res/view/s-cnt-market-specification/interface/common.interface";
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
    interface SCntMarketItemSelection {
        /**
          * Данные для карточек магазинов
         */
        "payload": any;
    }
    interface SCntMarketModalWindow {
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
    }
    interface SCntMarketSelection {
        /**
          * Данные для главной картинки
         */
        "homePageImage": any;
        /**
          * Данные для карточек магазинов
         */
        "payload": any;
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
    interface HTMLSCntMarketItemSelectionElement extends Components.SCntMarketItemSelection, HTMLStencilElement {
    }
    var HTMLSCntMarketItemSelectionElement: {
        prototype: HTMLSCntMarketItemSelectionElement;
        new (): HTMLSCntMarketItemSelectionElement;
    };
    interface HTMLSCntMarketModalWindowElement extends Components.SCntMarketModalWindow, HTMLStencilElement {
    }
    var HTMLSCntMarketModalWindowElement: {
        prototype: HTMLSCntMarketModalWindowElement;
        new (): HTMLSCntMarketModalWindowElement;
    };
    interface HTMLSCntMarketProductElement extends Components.SCntMarketProduct, HTMLStencilElement {
    }
    var HTMLSCntMarketProductElement: {
        prototype: HTMLSCntMarketProductElement;
        new (): HTMLSCntMarketProductElement;
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
    interface HTMLElementTagNameMap {
        "group-a": HTMLGroupAElement;
        "group-b": HTMLGroupBElement;
        "my-component": HTMLMyComponentElement;
        "s-cnt-market-first-page": HTMLSCntMarketFirstPageElement;
        "s-cnt-market-header": HTMLSCntMarketHeaderElement;
        "s-cnt-market-item-selection": HTMLSCntMarketItemSelectionElement;
        "s-cnt-market-modal-window": HTMLSCntMarketModalWindowElement;
        "s-cnt-market-product": HTMLSCntMarketProductElement;
        "s-cnt-market-promo-slider": HTMLSCntMarketPromoSliderElement;
        "s-cnt-market-promo-slider-card": HTMLSCntMarketPromoSliderCardElement;
        "s-cnt-market-recommended": HTMLSCntMarketRecommendedElement;
        "s-cnt-market-selection": HTMLSCntMarketSelectionElement;
        "s-cnt-market-shop": HTMLSCntMarketShopElement;
        "s-cnt-market-specification": HTMLSCntMarketSpecificationElement;
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
    interface SCntMarketItemSelection {
        /**
          * Данные для карточек магазинов
         */
        "payload"?: any;
    }
    interface SCntMarketModalWindow {
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
    }
    interface SCntMarketSelection {
        /**
          * Данные для главной картинки
         */
        "homePageImage"?: any;
        /**
          * Данные для карточек магазинов
         */
        "payload"?: any;
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
    interface IntrinsicElements {
        "group-a": GroupA;
        "group-b": GroupB;
        "my-component": MyComponent;
        "s-cnt-market-first-page": SCntMarketFirstPage;
        "s-cnt-market-header": SCntMarketHeader;
        "s-cnt-market-item-selection": SCntMarketItemSelection;
        "s-cnt-market-modal-window": SCntMarketModalWindow;
        "s-cnt-market-product": SCntMarketProduct;
        "s-cnt-market-promo-slider": SCntMarketPromoSlider;
        "s-cnt-market-promo-slider-card": SCntMarketPromoSliderCard;
        "s-cnt-market-recommended": SCntMarketRecommended;
        "s-cnt-market-selection": SCntMarketSelection;
        "s-cnt-market-shop": SCntMarketShop;
        "s-cnt-market-specification": SCntMarketSpecification;
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
            "s-cnt-market-item-selection": LocalJSX.SCntMarketItemSelection & JSXBase.HTMLAttributes<HTMLSCntMarketItemSelectionElement>;
            "s-cnt-market-modal-window": LocalJSX.SCntMarketModalWindow & JSXBase.HTMLAttributes<HTMLSCntMarketModalWindowElement>;
            "s-cnt-market-product": LocalJSX.SCntMarketProduct & JSXBase.HTMLAttributes<HTMLSCntMarketProductElement>;
            "s-cnt-market-promo-slider": LocalJSX.SCntMarketPromoSlider & JSXBase.HTMLAttributes<HTMLSCntMarketPromoSliderElement>;
            "s-cnt-market-promo-slider-card": LocalJSX.SCntMarketPromoSliderCard & JSXBase.HTMLAttributes<HTMLSCntMarketPromoSliderCardElement>;
            "s-cnt-market-recommended": LocalJSX.SCntMarketRecommended & JSXBase.HTMLAttributes<HTMLSCntMarketRecommendedElement>;
            "s-cnt-market-selection": LocalJSX.SCntMarketSelection & JSXBase.HTMLAttributes<HTMLSCntMarketSelectionElement>;
            "s-cnt-market-shop": LocalJSX.SCntMarketShop & JSXBase.HTMLAttributes<HTMLSCntMarketShopElement>;
            "s-cnt-market-specification": LocalJSX.SCntMarketSpecification & JSXBase.HTMLAttributes<HTMLSCntMarketSpecificationElement>;
        }
    }
}
