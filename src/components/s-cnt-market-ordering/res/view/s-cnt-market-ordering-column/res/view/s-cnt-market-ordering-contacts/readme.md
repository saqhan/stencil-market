# s-cnt-market-ordering-contacts



<!-- Auto Generated Below -->


## Properties

| Property                | Attribute                   | Description                          | Type      | Default     |
| ----------------------- | --------------------------- | ------------------------------------ | --------- | ----------- |
| `addOrRemoveClassState` | `add-or-remove-class-state` | Стейт для переключения класса active | `boolean` | `undefined` |
| `contacts`              | `contacts`                  | Данные для панели контакты           | `any`     | `undefined` |


## Events

| Event               | Description              | Type               |
| ------------------- | ------------------------ | ------------------ |
| `addClassActive`    | Добавление класса active | `CustomEvent<any>` |
| `removeClassActive` | Удаление класса active   | `CustomEvent<any>` |


## Dependencies

### Used by

 - [s-cnt-market-ordering-column](../../..)

### Graph
```mermaid
graph TD;
  s-cnt-market-ordering-column --> s-cnt-market-ordering-contacts
  style s-cnt-market-ordering-contacts fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
