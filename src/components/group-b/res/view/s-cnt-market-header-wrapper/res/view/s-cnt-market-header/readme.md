# s-cnt-market-header



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                        | Type      | Default     |
| ------------ | ------------ | ---------------------------------- | --------- | ----------- |
| `categories` | `categories` | Массив данных для хедера           | `any`     | `undefined` |
| `login`      | `login`      | Данные об авторизации пользователя | `boolean` | `false`     |


## Events

| Event            | Description | Type               |
| ---------------- | ----------- | ------------------ |
| `openLoginModal` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-cnt-market-header-wrapper](../../..)
 - [s-cnt-market-orders-wrapper](../../../../../../../shared/s-cnt-market-orders-wrapper)

### Depends on

- [s-cnt-market-top-bar](./res/view/s-cnt-market-top-bar)
- [s-cnt-market-header-body](./res/view/s-cnt-market-header-body)
- [s-cnt-market-header-nav](./res/view/s-cnt-market-header-nav)

### Graph
```mermaid
graph TD;
  s-cnt-market-header --> s-cnt-market-top-bar
  s-cnt-market-header --> s-cnt-market-header-body
  s-cnt-market-header --> s-cnt-market-header-nav
  s-cnt-market-top-bar --> s-cnt-market-login-and-registration-form
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-login-and-registration-form --> s-cnt-market-remind-password
  s-cnt-market-login-and-registration-form --> s-cnt-market-login-form
  s-cnt-market-login-and-registration-form --> s-cnt-market-registration-form
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  s-cnt-market-header-nav --> s-cnt-market-left-menu-catalog
  s-cnt-market-header-nav --> s-cnt-market-store-select-top
  s-cnt-market-header-nav --> s-cnt-market-account-menu
  s-cnt-market-header-nav --> s-cnt-market-basket
  s-cnt-market-basket --> s-cnt-market-products-slider
  s-cnt-market-products-slider --> s-cnt-market-products-slider-card
  s-cnt-market-header-wrapper --> s-cnt-market-header
  s-cnt-market-orders-wrapper --> s-cnt-market-header
  style s-cnt-market-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
