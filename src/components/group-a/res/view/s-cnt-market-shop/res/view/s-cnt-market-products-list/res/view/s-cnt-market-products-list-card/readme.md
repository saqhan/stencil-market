# s-cnt-market-products-list-card



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description               | Type                         | Default     |
| -------------- | --------- | ------------------------- | ---------------------------- | ----------- |
| `productsList` | --        | Данные для списка товаров | `MarketProductListInterface` | `undefined` |


## Events

| Event       | Description                                 | Type                |
| ----------- | ------------------------------------------- | ------------------- |
| `showModal` | Клик по карточке для показа модального окна | `CustomEvent<void>` |


## Dependencies

### Used by

 - [s-cnt-market-products-list](../../..)

### Depends on

- [s-cnt-market-products-list-item](./res/view/s-cnt-market-products-list-item)

### Graph
```mermaid
graph TD;
  s-cnt-market-products-list-card --> s-cnt-market-products-list-item
  s-cnt-market-products-list --> s-cnt-market-products-list-card
  style s-cnt-market-products-list-card fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
