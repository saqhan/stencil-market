# s-cnt-market-header-wrapper



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description              | Type      | Default     |
| ------------ | ------------ | ------------------------ | --------- | ----------- |
| `categories` | `categories` | Массив данных для хедера | `any`     | `undefined` |
| `firstPage`  | `first-page` | Первоначальная страница  | `boolean` | `undefined` |
| `login`      | `login`      | Авторизация юзера        | `boolean` | `undefined` |


## Events

| Event            | Description | Type                |
| ---------------- | ----------- | ------------------- |
| `openLoginModal` |             | `CustomEvent<void>` |


## Dependencies

### Used by

 - [group-a](../../../../group-a)
 - [group-b](../../..)

### Depends on

- [s-cnt-market-header-base](./res/view/s-cnt-market-header-base)
- [s-cnt-market-header](./res/view/s-cnt-market-header)

### Graph
```mermaid
graph TD;
  s-cnt-market-header-wrapper --> s-cnt-market-header-base
  s-cnt-market-header-wrapper --> s-cnt-market-header
  s-cnt-market-header --> s-cnt-market-top-bar
  s-cnt-market-header --> s-cnt-market-header-body
  s-cnt-market-header --> s-cnt-market-header-nav
  s-cnt-market-top-bar --> s-cnt-market-login-and-registration-form
  s-cnt-market-top-bar --> s-cnt-market-delivery-modal
  s-cnt-market-login-and-registration-form --> s-cnt-market-login-form
  s-cnt-market-login-and-registration-form --> s-cnt-market-registration-form
  s-cnt-market-delivery-modal --> s-cnt-market-delivery-in-modal
  s-cnt-market-delivery-modal --> s-cnt-market-pickup-in-modal
  s-cnt-market-header-nav --> s-cnt-market-left-menu-catalog
  s-cnt-market-header-nav --> s-cnt-market-store-select-top
  s-cnt-market-header-nav --> s-cnt-market-account-menu
  s-cnt-market-header-nav --> s-cnt-market-basket
  group-a --> s-cnt-market-header-wrapper
  group-b --> s-cnt-market-header-wrapper
  style s-cnt-market-header-wrapper fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
