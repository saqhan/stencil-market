# s-cnt-market-products-list



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute | Description               | Type                           | Default     |
| -------------- | --------- | ------------------------- | ------------------------------ | ----------- |
| `productsList` | --        | Данные для списка товаров | `MarketProductListInterface[]` | `undefined` |


## Events

| Event       | Description                                 | Type                |
| ----------- | ------------------------------------------- | ------------------- |
| `showModal` | Клик по карточке для показа модального окна | `CustomEvent<void>` |


## Dependencies

### Used by

 - [group-b](../../../../../../../group-b)
 - [s-cnt-market-shop](../../..)

### Depends on

- [s-cnt-market-products-list-card](./res/view/s-cnt-market-products-list-card)

### Graph
```mermaid
graph TD;
  s-cnt-market-products-list --> s-cnt-market-products-list-card
  s-cnt-market-products-list-card --> s-cnt-market-products-list-item
  group-b --> s-cnt-market-products-list
  s-cnt-market-shop --> s-cnt-market-products-list
  style s-cnt-market-products-list fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
