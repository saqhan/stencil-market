/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { SProduct, } from "./components/group-a/res/view/s-cnt-market-modal-window/res/view/s-cnt-market-product/interface/common.interface";
import { MarketPromoSliderInterface, } from "./components/group-a/res/view/s-cnt-market-shop/res/view/s-cnt-market-promo-slider/res/interface/common.interface";
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
          * Интерфейс для SProduct
         */
        "SProduct": SProduct[];
        /**
          * Данные для Product
         */
        "payload": any;
    }
    interface SCntMarketProductsSlider {
        /**
          * Получаем данные карточек слайдера популярных продуктов
         */
        "productsSliderCards": any;
    }
    interface SCntMarketProductsSliderCard {
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
    interface HTMLElementTagNameMap {
        "group-a": HTMLGroupAElement;
        "group-b": HTMLGroupBElement;
        "my-component": HTMLMyComponentElement;
        "s-cnt-market-first-page": HTMLSCntMarketFirstPageElement;
        "s-cnt-market-header": HTMLSCntMarketHeaderElement;
        "s-cnt-market-item-selection": HTMLSCntMarketItemSelectionElement;
        "s-cnt-market-modal-window": HTMLSCntMarketModalWindowElement;
        "s-cnt-market-product": HTMLSCntMarketProductElement;
        "s-cnt-market-products-slider": HTMLSCntMarketProductsSliderElement;
        "s-cnt-market-products-slider-card": HTMLSCntMarketProductsSliderCardElement;
        "s-cnt-market-promo-slider": HTMLSCntMarketPromoSliderElement;
        "s-cnt-market-promo-slider-card": HTMLSCntMarketPromoSliderCardElement;
        "s-cnt-market-recommended": HTMLSCntMarketRecommendedElement;
        "s-cnt-market-selection": HTMLSCntMarketSelectionElement;
        "s-cnt-market-shop": HTMLSCntMarketShopElement;
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
          * Интерфейс для SProduct
         */
        "SProduct"?: SProduct[];
        /**
          * Данные для Product
         */
        "payload"?: any;
    }
    interface SCntMarketProductsSlider {
        /**
          * Получаем данные карточек слайдера популярных продуктов
         */
        "productsSliderCards"?: any;
    }
    interface SCntMarketProductsSliderCard {
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
    interface IntrinsicElements {
        "group-a": GroupA;
        "group-b": GroupB;
        "my-component": MyComponent;
        "s-cnt-market-first-page": SCntMarketFirstPage;
        "s-cnt-market-header": SCntMarketHeader;
        "s-cnt-market-item-selection": SCntMarketItemSelection;
        "s-cnt-market-modal-window": SCntMarketModalWindow;
        "s-cnt-market-product": SCntMarketProduct;
        "s-cnt-market-products-slider": SCntMarketProductsSlider;
        "s-cnt-market-products-slider-card": SCntMarketProductsSliderCard;
        "s-cnt-market-promo-slider": SCntMarketPromoSlider;
        "s-cnt-market-promo-slider-card": SCntMarketPromoSliderCard;
        "s-cnt-market-recommended": SCntMarketRecommended;
        "s-cnt-market-selection": SCntMarketSelection;
        "s-cnt-market-shop": SCntMarketShop;
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
            "s-cnt-market-products-slider": LocalJSX.SCntMarketProductsSlider & JSXBase.HTMLAttributes<HTMLSCntMarketProductsSliderElement>;
            "s-cnt-market-products-slider-card": LocalJSX.SCntMarketProductsSliderCard & JSXBase.HTMLAttributes<HTMLSCntMarketProductsSliderCardElement>;
            "s-cnt-market-promo-slider": LocalJSX.SCntMarketPromoSlider & JSXBase.HTMLAttributes<HTMLSCntMarketPromoSliderElement>;
            "s-cnt-market-promo-slider-card": LocalJSX.SCntMarketPromoSliderCard & JSXBase.HTMLAttributes<HTMLSCntMarketPromoSliderCardElement>;
            "s-cnt-market-recommended": LocalJSX.SCntMarketRecommended & JSXBase.HTMLAttributes<HTMLSCntMarketRecommendedElement>;
            "s-cnt-market-selection": LocalJSX.SCntMarketSelection & JSXBase.HTMLAttributes<HTMLSCntMarketSelectionElement>;
            "s-cnt-market-shop": LocalJSX.SCntMarketShop & JSXBase.HTMLAttributes<HTMLSCntMarketShopElement>;
        }
    }
}
