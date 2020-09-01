# s-cnt-market-product-page



<!-- Auto Generated Below -->


## Properties

| Property              | Attribute               | Description                                            | Type                                   | Default     |
| --------------------- | ----------------------- | ------------------------------------------------------ | -------------------------------------- | ----------- |
| `productsList`        | --                      | Данные для списка товаров                              | `MarketProductListInterface[]`         | `undefined` |
| `productsPage`        | --                      | Данные объекта для заполнения компонента               | `MarketProductPageInterface`           | `undefined` |
| `productsSliderCards` | --                      | Данные карточек слайдера популярных продуктов          | `MarketProductsSliderCardsInterface[]` | `[]`        |
| `productsSliderTitle` | `products-slider-title` | Заголовк слайдера                                      | `string`                               | `undefined` |
| `selectedCategoryId`  | `selected-category-id`  | Принимает id выбранной категории для вывода ее товаров | `number`                               | `undefined` |


## Events

| Event       | Description                                 | Type               |
| ----------- | ------------------------------------------- | ------------------ |
| `showModal` | Клик по карточке для показа модального окна | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-cnt-market-shop](../../..)

### Depends on

- [s-cnt-market-product-filter-said-bar](./res/view/s-cnt-market-product-filter-said-bar)
- [s-cnt-market-products-slider-card](../s-cnt-market-products-slider/res/view/s-cnt-market-products-slider-card)
- [s-cnt-market-products-list-item](../s-cnt-market-products-list/res/view/s-cnt-market-products-list-card/res/view/s-cnt-market-products-list-item)

### Graph
```mermaid
graph TD;
  s-cnt-market-product-page --> s-cnt-market-product-filter-said-bar
  s-cnt-market-product-page --> s-cnt-market-products-slider-card
  s-cnt-market-product-page --> s-cnt-market-products-list-item
  s-cnt-market-shop --> s-cnt-market-product-page
  style s-cnt-market-product-page fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
