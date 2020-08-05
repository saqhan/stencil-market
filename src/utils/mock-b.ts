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
        cityForSelected: [
          {
            id: 1,
            city: 'Москва'
          },
          {
            id: 2,
            city: 'Казань'
          },
          {
            id: 3,
            city: 'Екатеринбург'
          },
          {
            id: 4,
            city: 'Нижний Новгород'
          },
          {
            id: 5,
            city: 'Ростов-на-Дону'
          },
          {
            id: 6,
            city: 'Уфа'
          },
          {
            id: 7,
            city: 'Краснодар'
          },
          {
            id: 8,
            city: 'Самара'
          },
          {
            id: 9,
            city: 'Воронеж'
          },
          {
            id: 10,
            city: 'Волгоград'
          },
          {
            id: 11,
            city: 'Омск'
          },
          {
            id: 12,
            city: 'Челябинск'
          },
          {
            id: 13,
            city: 'Красноярск'
          },
          {
            id: 14,
            city: 'Московская Область'
          },
          {
            id: 15,
            city: 'Пермь'
          },
          {
            id: 16,
            city: 'Тюмень'
          },
          {
            id: 17,
            city: 'Одинцово'
          },
          {
            id: 18,
            city: 'Балашиха'
          },
          {
            id: 19,
            city: 'Ногинск'
          },
          {
            id: 20,
            city: 'Подольск'
          },
          {
            id: 21,
            city: 'Иркутск'
          },
          {
            id: 22,
            city: 'Калининград'
          },
          {
            id: 23,
            city: 'Ярославль'
          },
          {
            id: 24,
            city: 'Владимир'
          },
          {
            id: 25,
            city: 'Барнаул'
          },
          {
            id: 26,
            city: 'Тула'
          },
          {
            id: 27,
            city: 'Курск'
          },
          {
            id: 28,
            city: 'Кемерово'
          },

          {
            id: 29,
            city: 'Томск'
          },
          {
            id: 30,
            city: 'Иваново'
          },
          {
            id: 31,
            city: 'Саратов'
          },
          {
            id: 32,
            city: 'Новокузнецк'
          },
          {
            id: 33,
            city: 'Астрахань'
          },
          {
            id: 34,
            city: 'Ставрополь'
          },
          {
            id: 35,
            city: 'Ижевск'
          },
          {
            id: 36,
            city: 'Орел'
          },
          {
            id: 37,
            city: 'Смоленск'
          },
          {
            id: 38,
            city: 'Чебоксары'
          },
          {
            id: 39,
            city: 'Брянск'
          },
        ],
        logoImg:
          "https://sbermarket.ru/spree/retailer/icons/234559/original/1.png?1580316602",
        storeName: "Metro",
        numberOfStores: "8 магазинов",
        selectedStoreIcon: `<i class="fas fa-angle-down"></i>`,
        storeAddress: [
          {
            id: 1,
            storeAddress: 'Москва, Ленинградское шоссе, 71Г',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
          {
            id: 2,
            storeAddress: 'Москва, Маршала Прошлякова, 14',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
          {
            id: 3,
            storeAddress: 'Москва, р-н северного Измайлово, 104-й км. МКАД, 6',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
          {
            id: 4,
            storeAddress: 'Москва, Шоссейная, 2Б',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
          {
            id: 5,
            storeAddress: 'Москва, Дмитровское ш, 165Б',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
          {
            id: 6,
            storeAddress: 'д. Апаринки, МО, п. Совхоза им. Ленина, 8',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
          {
            id: 7,
            storeAddress: 'Москва, Рябиновая, 59',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
          {
            id: 8,
            storeAddress: 'Москва, Боровское ш, 10А',
            storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
            btnText: 'Выбрать',
          },
        ]
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
