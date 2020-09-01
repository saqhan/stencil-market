# s-cnt-market-products-slider



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                   | Type                                   | Default            |
| --------------------- | ----------------------- | --------------------------------------------- | -------------------------------------- | ------------------ |
| `productsSliderCards` | --                      | Данные карточек слайдера популярных продуктов | `MarketProductsSliderCardsInterface[]` | `[]`               |
| `productsSliderTitle` | `products-slider-title` | Заголовк слайдера                             | `string`                               | `undefined`        |
| `theme`               | `theme`                 | обертка для слайдера товара                   | `"cart" \| "main-container"`           | `'main-container'` |


## Events

| Event       | Description                                 | Type                |
| ----------- | ------------------------------------------- | ------------------- |
| `showModal` | Клик по карточке для показа модального окна | `CustomEvent<void>` |


## Dependencies

### Used by

 - [group-b](../../../../../../../group-b)
 - [s-cnt-market-basket](../../../../../../../group-b/res/view/s-cnt-market-header-wrapper/res/view/s-cnt-market-header/res/view/s-cnt-market-header-nav/res/view/s-cnt-market-basket)
 - [s-cnt-market-shop](../../..)

### Depends on

- [s-cnt-market-products-slider-card](./res/view/s-cnt-market-products-slider-card)

### Graph
```mermaid
graph TD;
  s-cnt-market-products-slider --> s-cnt-market-products-slider-card
  group-b --> s-cnt-market-products-slider
  s-cnt-market-basket --> s-cnt-market-products-slider
  s-cnt-market-shop --> s-cnt-market-products-slider
  style s-cnt-market-products-slider fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
