/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GroupA {
    }
    interface GroupB {
    }
    interface MyComponent {
    }
    interface SCntMarketDeliveryInModal {
    }
    interface SCntMarketDeliveryModal {
        /**
          * boolean значение для вывода
         */
        "delivery": boolean;
        /**
          * boolean значение для вывода
         */
        "pickUp": boolean;
    }
    interface SCntMarketHeader {
    }
    interface SCntMarketHeaderBody {
    }
    interface SCntMarketHeaderNav {
    }
    interface SCntMarketPickupInModal {
    }
    interface SCntMarketTopBar {
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
    interface HTMLSCntMarketPickupInModalElement extends Components.SCntMarketPickupInModal, HTMLStencilElement {
    }
    var HTMLSCntMarketPickupInModalElement: {
        prototype: HTMLSCntMarketPickupInModalElement;
        new (): HTMLSCntMarketPickupInModalElement;
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
        "s-cnt-market-delivery-in-modal": HTMLSCntMarketDeliveryInModalElement;
        "s-cnt-market-delivery-modal": HTMLSCntMarketDeliveryModalElement;
        "s-cnt-market-header": HTMLSCntMarketHeaderElement;
        "s-cnt-market-header-body": HTMLSCntMarketHeaderBodyElement;
        "s-cnt-market-header-nav": HTMLSCntMarketHeaderNavElement;
        "s-cnt-market-pickup-in-modal": HTMLSCntMarketPickupInModalElement;
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
    interface SCntMarketDeliveryInModal {
    }
    interface SCntMarketDeliveryModal {
        /**
          * boolean значение для вывода
         */
        "delivery"?: boolean;
        /**
          * Закрытие модального окна формы
         */
        "onCloseForm"?: (event: CustomEvent<any>) => void;
        /**
          * Закрытие модального окна формы
         */
        "onOpenDelivery"?: (event: CustomEvent<any>) => void;
        /**
          * Закрытие модального окна формы
         */
        "onOpenpickUp"?: (event: CustomEvent<any>) => void;
        /**
          * boolean значение для вывода
         */
        "pickUp"?: boolean;
    }
    interface SCntMarketHeader {
    }
    interface SCntMarketHeaderBody {
    }
    interface SCntMarketHeaderNav {
    }
    interface SCntMarketPickupInModal {
    }
    interface SCntMarketTopBar {
    }
    interface IntrinsicElements {
        "group-a": GroupA;
        "group-b": GroupB;
        "my-component": MyComponent;
        "s-cnt-market-delivery-in-modal": SCntMarketDeliveryInModal;
        "s-cnt-market-delivery-modal": SCntMarketDeliveryModal;
        "s-cnt-market-header": SCntMarketHeader;
        "s-cnt-market-header-body": SCntMarketHeaderBody;
        "s-cnt-market-header-nav": SCntMarketHeaderNav;
        "s-cnt-market-pickup-in-modal": SCntMarketPickupInModal;
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
            "s-cnt-market-delivery-in-modal": LocalJSX.SCntMarketDeliveryInModal & JSXBase.HTMLAttributes<HTMLSCntMarketDeliveryInModalElement>;
            "s-cnt-market-delivery-modal": LocalJSX.SCntMarketDeliveryModal & JSXBase.HTMLAttributes<HTMLSCntMarketDeliveryModalElement>;
            "s-cnt-market-header": LocalJSX.SCntMarketHeader & JSXBase.HTMLAttributes<HTMLSCntMarketHeaderElement>;
            "s-cnt-market-header-body": LocalJSX.SCntMarketHeaderBody & JSXBase.HTMLAttributes<HTMLSCntMarketHeaderBodyElement>;
            "s-cnt-market-header-nav": LocalJSX.SCntMarketHeaderNav & JSXBase.HTMLAttributes<HTMLSCntMarketHeaderNavElement>;
            "s-cnt-market-pickup-in-modal": LocalJSX.SCntMarketPickupInModal & JSXBase.HTMLAttributes<HTMLSCntMarketPickupInModalElement>;
            "s-cnt-market-top-bar": LocalJSX.SCntMarketTopBar & JSXBase.HTMLAttributes<HTMLSCntMarketTopBarElement>;
        }
    }
}
