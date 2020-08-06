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
        selectIcon: `<i class="fas fa-angle-down"></i>`,
        defaultCity: 1,
        cityForSelected: [
          {
            id: 1,
            city: 'Москва',
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
          {
            id: 2,
            city: 'Казань',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 3,
            city: 'Екатеринбург',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 4,
            city: 'Нижний Новгород',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 5,
            city: 'Ростов-на-Дону',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 6,
            city: 'Уфа',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 7,
            city: 'Краснодар',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 8,
            city: 'Самара',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 9,
            city: 'Воронеж',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 10,
            city: 'Волгоград',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 11,
            city: 'Омск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 12,
            city: 'Челябинск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 13,
            city: 'Красноярск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 14,
            city: 'Московская Область',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 15,
            city: 'Пермь',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 16,
            city: 'Тюмень',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 17,
            city: 'Одинцово',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 18,
            city: 'Балашиха',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 19,
            city: 'Ногинск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 20,
            city: 'Подольск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 21,
            city: 'Иркутск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 22,
            city: 'Калининград',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 23,
            city: 'Ярославль',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 24,
            city: 'Владимир',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 25,
            city: 'Барнаул',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 26,
            city: 'Тула',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 27,
            city: 'Курск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 28,
            city: 'Кемерово',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },

          {
            id: 29,
            city: 'Томск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 30,
            city: 'Иваново',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 31,
            city: 'Саратов',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 32,
            city: 'Новокузнецк',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 33,
            city: 'Астрахань',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 34,
            city: 'Ставрополь',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 35,
            city: 'Ижевск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 36,
            city: 'Орел',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 37,
            city: 'Смоленск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 38,
            city: 'Чебоксары',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
          {
            id: 39,
            city: 'Брянск',
            storeAddress: [
              // {
              //   id: 1,
              //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
              //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
              //   btnText: 'Выбрать',
              // },
            ]
          },
        ],
        logoImg: "https://sbermarket.ru/spree/retailer/icons/234559/original/1.png?1580316602",
        storeName: "Metro",
        numberOfStores: "магазинов",
        selectedStoreIcon: `<i class="fas fa-angle-up"></i>`,
        storeWithdrawalIcon: `<i class="fas fa-angle-down"></i>`,
        updateSelectedAddress: 'Изменить',
      },
    },
  },
  body: {
    logo: 'https://via.placeholder.com/200x33?text=LOGO',
    navMenuItem: [
      {
        id: 'bisness',
        name: 'Для Бизнеса'
      },
      {
        id: 'how-we-work',
        name: 'Как мы работаем'
      },
      {
        id: 'contacts',
        name: 'Контакты'
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
    iconWishList: 'far fa-heart',
    iconOrders: 'fas fa-history',
    iconCart: 'fas fa-shopping-cart',
    titleOrders: 'Заказы',
    titleCart: 'Корзина'
  }
}
