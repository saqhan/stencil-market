# s-cnt-market-header-nav



<!-- Auto Generated Below -->


## Properties

| Property             | Attribute | Description                      | Type                               | Default     |
| -------------------- | --------- | -------------------------------- | ---------------------------------- | ----------- |
| `leftMenuCatalogArr` | --        | Данные для магазинов из каталога | `MarketLeftMenuCatalogInterface[]` | `[]`        |
| `login`              | `login`   | Log in user                      | `boolean`                          | `undefined` |
| `navBar`             | --        |                                  | `MarketNavBarInterface`            | `undefined` |
| `selectShops`        | --        | магазины для вашего города       | `MarketSelectShopsInterface[]`     | `[]`        |


## Dependencies

### Used by

 - [s-cnt-market-header](../../..)

### Depends on

- [s-cnt-market-left-menu-catalog](./res/view/s-cnt-market-left-menu-catalog)
- [s-cnt-market-store-select-top](./res/view/s-cnt-market-store-select-top)
- [s-cnt-market-account-menu](./res/view/s-cnt-market-account-menu)
- [s-cnt-market-basket](./res/view/s-cnt-market-basket)

### Graph
```mermaid
graph TD;
  s-cnt-market-header-nav --> s-cnt-market-left-menu-catalog
  s-cnt-market-header-nav --> s-cnt-market-store-select-top
  s-cnt-market-header-nav --> s-cnt-market-account-menu
  s-cnt-market-header-nav --> s-cnt-market-basket
  s-cnt-market-header --> s-cnt-market-header-nav
  style s-cnt-market-header-nav fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
