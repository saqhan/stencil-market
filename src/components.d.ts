/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { TopBarModalDeliveryInterface, } from "./components/group-b/res/view/s-cnt-market-header/res/view/s-cnt-market-top-bar/res/view/s-cnt-market-delivery-modal/res/view/s-cnt-market-delivery-in-modal/res/interface/common.interface";
import { TopBarModalInterface, } from "./components/group-b/res/view/s-cnt-market-header/res/view/s-cnt-market-top-bar/res/view/s-cnt-market-delivery-modal/res/interface/common.interface";
import { NavMenuItemInterface, } from "./components/group-b/res/view/s-cnt-market-header/res/view/s-cnt-market-header-body/res/interface/common.interface";
import { leftMenuCatalogInterface, navBarInterface, } from "./components/group-b/res/view/s-cnt-market-header/res/view/s-cnt-market-header-nav/res/interface/common.interface";
import { TopBarModalPickUpInterface, } from "./components/group-b/res/view/s-cnt-market-header/res/view/s-cnt-market-top-bar/res/view/s-cnt-market-delivery-modal/res/view/s-cnt-market-pickUp-in-modal/res/interface/common.interface";
import { TopBarInterface, } from "./components/group-b/res/view/s-cnt-market-header/res/view/s-cnt-market-top-bar/res/interface/common.interface";
export namespace Components {
    interface GroupA {
    }
    interface GroupB {
    }
    interface MyComponent {
    }
    interface SCntMarketAccountMenu {
    }
    interface SCntMarketBasket {
        /**
          * Стейт на состояние корзины открыто/закрыто
         */
        "openedBasket": boolean;
    }
    interface SCntMarketDeliveryInModal {
        /**
          * Props значение для принятия и вывода данных
         */
        "deliveryData": TopBarModalDeliveryInterface;
    }
    interface SCntMarketDeliveryModal {
        /**
          * boolean значение для вывода/закрытия блока доставки и присвоения класса
         */
        "delivery": boolean;
        /**
          * объект из mock для вывода данных в компоненте модального окна
         */
        "modalData": TopBarModalInterface;
        /**
          * boolean значение для вывода/закрытия блока самовывоза и присвоения класса
         */
        "pickUp": boolean;
    }
    interface SCntMarketHeader {
        /**
          * Массив данных для хедера
         */
        "categories": any;
    }
    interface SCntMarketHeaderBody {
        "body": NavMenuItemInterface;
    }
    interface SCntMarketHeaderNav {
        /**
          * Данные для магазинов из каталога
         */
        "leftMenuCatalogArr": leftMenuCatalogInterface[];
        "navBar": navBarInterface;
    }
    interface SCntMarketLeftMenuCatalog {
        /**
          * массив магазинов для вывода
         */
        "leftMenuCatalogArr": leftMenuCatalogInterface[];
        "openedLeftMenu": boolean;
    }
    interface SCntMarketLoginAndRegistrationForm {
        /**
          * boolean значение для вывода/закрытия блока входа и присвоения класса
         */
        "login": boolean;
        /**
          * boolean значение для вывода/закрытия блока входа и присвоения класса
         */
        "loginAndRegistration": any;
        /**
          * boolean значение для вывода/закрытия блока регистрации и присвоения класса
         */
        "registration": boolean;
    }
    interface SCntMarketLoginForm {
        "login": any;
    }
    interface SCntMarketPickupInModal {
        /**
          * Данные из объекта данных мок
         */
        "pickUpData": TopBarModalPickUpInterface;
    }
    interface SCntMarketRegistrationForm {
        "reg": any;
    }
    interface SCntMarketStoreSelectTop {
        "openedStoreSelect": boolean;
    }
    interface SCntMarketTopBar {
        /**
          * объект данных для компонента top-bar и его подкомпонентов
         */
        "topBar": TopBarInterface;
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
    interface HTMLSCntMarketAccountMenuElement extends Components.SCntMarketAccountMenu, HTMLStencilElement {
    }
    var HTMLSCntMarketAccountMenuElement: {
        prototype: HTMLSCntMarketAccountMenuElement;
        new (): HTMLSCntMarketAccountMenuElement;
    };
    interface HTMLSCntMarketBasketElement extends Components.SCntMarketBasket, HTMLStencilElement {
    }
    var HTMLSCntMarketBasketElement: {
        prototype: HTMLSCntMarketBasketElement;
        new (): HTMLSCntMarketBasketElement;
    };
    interface HTMLSCntMarketDeliveryInModalElement extends Components.SCntMarketDeliveryInModal, HTMLStencilElement {
    }
    var HTMLSCntMarketDeliveryInModalElement: {
        prototype: HTMLSCntMarketDeliveryInModalElement;
        new (): HTMLSCntMarketDeliveryInModalElement;
    };
    interface HTMLSCntMarketDeliveryModalElement extends Components.SCntMarketDeliveryModal, HTMLStencilElement {
    }
    var HTMLSCntMarketDeliveryModalElement: {
        prototype: HTMLSCntMarketDeliveryModalElement;
        new (): HTMLSCntMarketDeliveryModalElement;
    };
    interface HTMLSCntMarketHeaderElement extends Components.SCntMarketHeader, HTMLStencilElement {
    }
    var HTMLSCntMarketHeaderElement: {
        prototype: HTMLSCntMarketHeaderElement;
        new (): HTMLSCntMarketHeaderElement;
    };
    interface HTMLSCntMarketHeaderBodyElement extends Components.SCntMarketHeaderBody, HTMLStencilElement {
    }
    var HTMLSCntMarketHeaderBodyElement: {
        prototype: HTMLSCntMarketHeaderBodyElement;
        new (): HTMLSCntMarketHeaderBodyElement;
    };
    interface HTMLSCntMarketHeaderNavElement extends Components.SCntMarketHeaderNav, HTMLStencilElement {
    }
    var HTMLSCntMarketHeaderNavElement: {
        prototype: HTMLSCntMarketHeaderNavElement;
        new (): HTMLSCntMarketHeaderNavElement;
    };
    interface HTMLSCntMarketLeftMenuCatalogElement extends Components.SCntMarketLeftMenuCatalog, HTMLStencilElement {
    }
    var HTMLSCntMarketLeftMenuCatalogElement: {
        prototype: HTMLSCntMarketLeftMenuCatalogElement;
        new (): HTMLSCntMarketLeftMenuCatalogElement;
    };
    interface HTMLSCntMarketLoginAndRegistrationFormElement extends Components.SCntMarketLoginAndRegistrationForm, HTMLStencilElement {
    }
    var HTMLSCntMarketLoginAndRegistrationFormElement: {
        prototype: HTMLSCntMarketLoginAndRegistrationFormElement;
        new (): HTMLSCntMarketLoginAndRegistrationFormElement;
    };
    interface HTMLSCntMarketLoginFormElement extends Components.SCntMarketLoginForm, HTMLStencilElement {
    }
    var HTMLSCntMarketLoginFormElement: {
        prototype: HTMLSCntMarketLoginFormElement;
        new (): HTMLSCntMarketLoginFormElement;
    };
    interface HTMLSCntMarketPickupInModalElement extends Components.SCntMarketPickupInModal, HTMLStencilElement {
    }
    var HTMLSCntMarketPickupInModalElement: {
        prototype: HTMLSCntMarketPickupInModalElement;
        new (): HTMLSCntMarketPickupInModalElement;
    };
    interface HTMLSCntMarketRegistrationFormElement extends Components.SCntMarketRegistrationForm, HTMLStencilElement {
    }
    var HTMLSCntMarketRegistrationFormElement: {
        prototype: HTMLSCntMarketRegistrationFormElement;
        new (): HTMLSCntMarketRegistrationFormElement;
    };
    interface HTMLSCntMarketStoreSelectTopElement extends Components.SCntMarketStoreSelectTop, HTMLStencilElement {
    }
    var HTMLSCntMarketStoreSelectTopElement: {
        prototype: HTMLSCntMarketStoreSelectTopElement;
        new (): HTMLSCntMarketStoreSelectTopElement;
    };
    interface HTMLSCntMarketTopBarElement extends Components.SCntMarketTopBar, HTMLStencilElement {
    }
    var HTMLSCntMarketTopBarElement: {
        prototype: HTMLSCntMarketTopBarElement;
        new (): HTMLSCntMarketTopBarElement;
    };
    interface HTMLElementTagNameMap {
        "group-a": HTMLGroupAElement;
        "group-b": HTMLGroupBElement;
        "my-component": HTMLMyComponentElement;
        "s-cnt-market-account-menu": HTMLSCntMarketAccountMenuElement;
        "s-cnt-market-basket": HTMLSCntMarketBasketElement;
        "s-cnt-market-delivery-in-modal": HTMLSCntMarketDeliveryInModalElement;
        "s-cnt-market-delivery-modal": HTMLSCntMarketDeliveryModalElement;
        "s-cnt-market-header": HTMLSCntMarketHeaderElement;
        "s-cnt-market-header-body": HTMLSCntMarketHeaderBodyElement;
        "s-cnt-market-header-nav": HTMLSCntMarketHeaderNavElement;
        "s-cnt-market-left-menu-catalog": HTMLSCntMarketLeftMenuCatalogElement;
        "s-cnt-market-login-and-registration-form": HTMLSCntMarketLoginAndRegistrationFormElement;
        "s-cnt-market-login-form": HTMLSCntMarketLoginFormElement;
        "s-cnt-market-pickup-in-modal": HTMLSCntMarketPickupInModalElement;
        "s-cnt-market-registration-form": HTMLSCntMarketRegistrationFormElement;
        "s-cnt-market-store-select-top": HTMLSCntMarketStoreSelectTopElement;
        "s-cnt-market-top-bar": HTMLSCntMarketTopBarElement;
    }
}
declare namespace LocalJSX {
    interface GroupA {
    }
    interface GroupB {
    }
    interface MyComponent {
    }
    interface SCntMarketAccountMenu {
    }
    interface SCntMarketBasket {
        /**
          * /Закрыть корзину
         */
        "onCloseBasket"?: (event: CustomEvent<any>) => void;
        /**
          * Стейт на состояние корзины открыто/закрыто
         */
        "openedBasket"?: boolean;
    }
    interface SCntMarketDeliveryInModal {
        /**
          * Props значение для принятия и вывода данных
         */
        "deliveryData"?: TopBarModalDeliveryInterface;
    }
    interface SCntMarketDeliveryModal {
        /**
          * boolean значение для вывода/закрытия блока доставки и присвоения класса
         */
        "delivery"?: boolean;
        /**
          * объект из mock для вывода данных в компоненте модального окна
         */
        "modalData"?: TopBarModalInterface;
        /**
          * Закрытие модального модального окна выбора адреса
         */
        "onCloseForm"?: (event: CustomEvent<any>) => void;
        /**
          * функция для смены значения boolean пропса pickUp
         */
        "onIdSelectionAddress"?: (event: CustomEvent<any>) => void;
        /**
          * функция для смены значения boolean пропса delivery
         */
        "onOpenDelivery"?: (event: CustomEvent<any>) => void;
        /**
          * Закрытие модального модального окна
         */
        "onOpenLogin"?: (event: CustomEvent<any>) => void;
        /**
          * функция для смены значения boolean пропса pickUp
         */
        "onOpenPickUp"?: (event: CustomEvent<any>) => void;
        /**
          * boolean значение для вывода/закрытия блока самовывоза и присвоения класса
         */
        "pickUp"?: boolean;
    }
    interface SCntMarketHeader {
        /**
          * Массив данных для хедера
         */
        "categories"?: any;
    }
    interface SCntMarketHeaderBody {
        "body"?: NavMenuItemInterface;
    }
    interface SCntMarketHeaderNav {
        /**
          * Данные для магазинов из каталога
         */
        "leftMenuCatalogArr"?: leftMenuCatalogInterface[];
        "navBar"?: navBarInterface;
    }
    interface SCntMarketLeftMenuCatalog {
        /**
          * массив магазинов для вывода
         */
        "leftMenuCatalogArr"?: leftMenuCatalogInterface[];
        /**
          * закрывать меню
         */
        "onCloseLeftMenu"?: (event: CustomEvent<any>) => void;
        "openedLeftMenu"?: boolean;
    }
    interface SCntMarketLoginAndRegistrationForm {
        /**
          * boolean значение для вывода/закрытия блока входа и присвоения класса
         */
        "login"?: boolean;
        /**
          * boolean значение для вывода/закрытия блока входа и присвоения класса
         */
        "loginAndRegistration"?: any;
        /**
          * Закрытие модального модального окна формы входа/регистрации
         */
        "onCloseLogin"?: (event: CustomEvent<any>) => void;
        /**
          * функция для смены значения boolean пропса login
         */
        "onOpenLogin"?: (event: CustomEvent<any>) => void;
        /**
          * функция для смены значения boolean пропса registration
         */
        "onOpenRegistration"?: (event: CustomEvent<any>) => void;
        /**
          * boolean значение для вывода/закрытия блока регистрации и присвоения класса
         */
        "registration"?: boolean;
    }
    interface SCntMarketLoginForm {
        "login"?: any;
    }
    interface SCntMarketPickupInModal {
        /**
          * функция для смены значения boolean пропса pickUp
         */
        "onIdSelectionAddress"?: (event: CustomEvent<any>) => void;
        /**
          * Данные из объекта данных мок
         */
        "pickUpData"?: TopBarModalPickUpInterface;
    }
    interface SCntMarketRegistrationForm {
        "reg"?: any;
    }
    interface SCntMarketStoreSelectTop {
        /**
          * /Закрыть корзину
         */
        "onCloseStoreSelect"?: (event: CustomEvent<any>) => void;
        "openedStoreSelect"?: boolean;
    }
    interface SCntMarketTopBar {
        /**
          * объект данных для компонента top-bar и его подкомпонентов
         */
        "topBar"?: TopBarInterface;
    }
    interface IntrinsicElements {
        "group-a": GroupA;
        "group-b": GroupB;
        "my-component": MyComponent;
        "s-cnt-market-account-menu": SCntMarketAccountMenu;
        "s-cnt-market-basket": SCntMarketBasket;
        "s-cnt-market-delivery-in-modal": SCntMarketDeliveryInModal;
        "s-cnt-market-delivery-modal": SCntMarketDeliveryModal;
        "s-cnt-market-header": SCntMarketHeader;
        "s-cnt-market-header-body": SCntMarketHeaderBody;
        "s-cnt-market-header-nav": SCntMarketHeaderNav;
        "s-cnt-market-left-menu-catalog": SCntMarketLeftMenuCatalog;
        "s-cnt-market-login-and-registration-form": SCntMarketLoginAndRegistrationForm;
        "s-cnt-market-login-form": SCntMarketLoginForm;
        "s-cnt-market-pickup-in-modal": SCntMarketPickupInModal;
        "s-cnt-market-registration-form": SCntMarketRegistrationForm;
        "s-cnt-market-store-select-top": SCntMarketStoreSelectTop;
        "s-cnt-market-top-bar": SCntMarketTopBar;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "group-a": LocalJSX.GroupA & JSXBase.HTMLAttributes<HTMLGroupAElement>;
            "group-b": LocalJSX.GroupB & JSXBase.HTMLAttributes<HTMLGroupBElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "s-cnt-market-account-menu": LocalJSX.SCntMarketAccountMenu & JSXBase.HTMLAttributes<HTMLSCntMarketAccountMenuElement>;
            "s-cnt-market-basket": LocalJSX.SCntMarketBasket & JSXBase.HTMLAttributes<HTMLSCntMarketBasketElement>;
            "s-cnt-market-delivery-in-modal": LocalJSX.SCntMarketDeliveryInModal & JSXBase.HTMLAttributes<HTMLSCntMarketDeliveryInModalElement>;
            "s-cnt-market-delivery-modal": LocalJSX.SCntMarketDeliveryModal & JSXBase.HTMLAttributes<HTMLSCntMarketDeliveryModalElement>;
            "s-cnt-market-header": LocalJSX.SCntMarketHeader & JSXBase.HTMLAttributes<HTMLSCntMarketHeaderElement>;
            "s-cnt-market-header-body": LocalJSX.SCntMarketHeaderBody & JSXBase.HTMLAttributes<HTMLSCntMarketHeaderBodyElement>;
            "s-cnt-market-header-nav": LocalJSX.SCntMarketHeaderNav & JSXBase.HTMLAttributes<HTMLSCntMarketHeaderNavElement>;
            "s-cnt-market-left-menu-catalog": LocalJSX.SCntMarketLeftMenuCatalog & JSXBase.HTMLAttributes<HTMLSCntMarketLeftMenuCatalogElement>;
            "s-cnt-market-login-and-registration-form": LocalJSX.SCntMarketLoginAndRegistrationForm & JSXBase.HTMLAttributes<HTMLSCntMarketLoginAndRegistrationFormElement>;
            "s-cnt-market-login-form": LocalJSX.SCntMarketLoginForm & JSXBase.HTMLAttributes<HTMLSCntMarketLoginFormElement>;
            "s-cnt-market-pickup-in-modal": LocalJSX.SCntMarketPickupInModal & JSXBase.HTMLAttributes<HTMLSCntMarketPickupInModalElement>;
            "s-cnt-market-registration-form": LocalJSX.SCntMarketRegistrationForm & JSXBase.HTMLAttributes<HTMLSCntMarketRegistrationFormElement>;
            "s-cnt-market-store-select-top": LocalJSX.SCntMarketStoreSelectTop & JSXBase.HTMLAttributes<HTMLSCntMarketStoreSelectTopElement>;
            "s-cnt-market-top-bar": LocalJSX.SCntMarketTopBar & JSXBase.HTMLAttributes<HTMLSCntMarketTopBarElement>;
        }
    }
}
