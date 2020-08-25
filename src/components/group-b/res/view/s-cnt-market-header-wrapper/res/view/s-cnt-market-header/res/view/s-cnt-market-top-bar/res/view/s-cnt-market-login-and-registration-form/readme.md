# s-cnt-market-login-and-registration-form



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute      | Description                                                                | Type                                  | Default     |
| ---------------------- | -------------- | -------------------------------------------------------------------------- | ------------------------------------- | ----------- |
| `blockWidth`           | `block-width`  |                                                                            | `string`                              | `undefined` |
| `login`                | `login`        | boolean значение для вывода/закрытия блока входа и присвоения класса       | `boolean`                             | `undefined` |
| `loginAndRegistration` | --             | объект данных для компонента LoginAndRegistrationForm и его подкомпонентов | `MarketLoginAndRegistrationInterface` | `undefined` |
| `registration`         | `registration` | boolean значение для вывода/закрытия блока регистрации и присвоения класса | `boolean`                             | `undefined` |


## Events

| Event              | Description                                                 | Type               |
| ------------------ | ----------------------------------------------------------- | ------------------ |
| `closeLogin`       | Закрытие модального модального окна формы входа/регистрации | `CustomEvent<any>` |
| `openLogin`        | функция для смены значения boolean пропса login             | `CustomEvent<any>` |
| `openRegistration` | функция для смены значения boolean пропса registration      | `CustomEvent<any>` |


## Dependencies

### Used by

 - [group-b](../../../../../../../../../../../..)
 - [s-cnt-market-top-bar](../../..)

### Depends on

- [s-cnt-market-login-form](./res/view/s-cnt-market-login-form)
- [s-cnt-market-registration-form](./res/view/s-cnt-market-registration-form)

### Graph
```mermaid
graph TD;
  s-cnt-market-login-and-registration-form --> s-cnt-market-login-form
  s-cnt-market-login-and-registration-form --> s-cnt-market-registration-form
  group-b --> s-cnt-market-login-and-registration-form
  s-cnt-market-top-bar --> s-cnt-market-login-and-registration-form
  style s-cnt-market-login-and-registration-form fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
