
export const header = {
  topBar: {
    id: 1,
    choiceDelivery: "Доставка",
    choicePickUp: "Самовывоз",
    choiceAddress: " Выберите адрес доставки",
    choiceAddressIcon: `<i class="fas fa-pencil-alt"></i>`,
    timeOfDeliveryText: "🚛 Ближайшая доставка",
    timeOfDelivery: "сегодня, 19:00-21:00",
    phoneNumber: "+7 800 222-11-00",
    workingHours: "Круглосуточно",
    modalWindow: {
      id: 1,
      modalWindowTitle: "Выберите способ получения",
      offerToEnter: "Уже зарегистрированы?",
      offerToEnterLink: "Войти",
      choiceDelivery: "Доставка",
      choicePickUp: "Самовывоз",
      Delivery: {
        id: 1,
        enterAddressText:
          "Введите адрес доставки, чтобы увидеть доступные магазины",
        searchIcon: `<i class="fas fa-search"></i>`,
        btnText: "Сохранить",
      },
      PickUp: {
        id: 1,
        locationIcon: `<i class="fas fa-map-marker-alt"></i>`,
        city: "Город:",
        selectedCity: "Москва",
        selectIcon: `<i class="fas fa-angle-down"></i>`,
        logoImg:
          "https://sbermarket.ru/spree/retailer/icons/234559/original/1.png?1580316602",
        storeName: "Metro",
        numberOfStores: "8 магазинов",
        selectedStoreIcon: `<i class="fas fa-angle-down"></i>`,
      },
    },
  },
  body : {
    logo: 'https://via.placeholder.com/200x33?text=LOGO',
    navMenuItem: [
      {
        id: 'bisness',
        name: 'Для Бизнеса'
      },
      {
        id: 'how-we-work',
        name: 'contacts'
      },
      {
        id: 'help',
        name: 'Помощь'
      },
      {
        id: 'delivery',
        name: 'Доставка и оплата'
      }
    ],
  },
  navBar: {
    catalogBtn: 'Каталог',
    backgroundImageFullMenu: 'https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580',
    placeholder: 'Найти в магазине METRO',
    iconUser: 'far fa-user',
    iconWishList:'far fa-heart',
    iconOrders: 'fas fa-history',
    iconCart: 'fas fa-shopping-cart',
    titleOrders: 'Заказы',
    titleCart: 'Корзина'

  }
}
