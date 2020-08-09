export const header = {
  topBar: {
    id: 1,
    choiceDelivery: "Доставка",
    choicePickUp: "Самовывоз",
    choiceAddress: " Выберите адрес доставки",
    choiceAddressIcon: 'fas fa-pencil-alt',
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
        enterAddressText: "Введите адрес доставки, чтобы увидеть доступные магазины",
        searchIcon: 'fas fa-search',
        btnText: "Сохранить",
      },
      PickUp: {
        id: 1,
        locationIcon: 'fas fa-map-marker-alt',
        city: 'Город:',
        selectIcon: 'fas fa-caret-down',
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
        selectedStoreIcon: 'fas fa-angle-up',
        storeWithdrawalIcon: 'fas fa-angle-down',
        updateSelectedAddress: 'Изменить',
      },
    },
  },
  body: {
    logo: 'https://via.placeholder.com/200x33?text=LOGO',
    navMenuItem: [
      {
        id: 'bisness',
        name: '👩‍💻 Для бизнеса'
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
  },
  leftMenuCatalog: [
    {
      id:'2',
      title: 'Дачный сезон',
      img: 'https://sbermarket.ru/spree/taxons/10412/normal/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.jpg',
      sales: false,
      subcategories: [
        {
          id: 1,
          title: 'Все для пикника',
          img: 'https://sbermarket.ru/spree/taxons/10413/normal/%D0%92%D1%81%D0%B5_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%B8%D0%BA%D0%BD%D0%B8%D0%BA%D0%B0.jpg'
        }
      ]
    },
    {
      id:2,
      title: "Бренды METRO",
      img: "https://sbermarket.ru/spree/taxons/7783/normal/61000000.png",
      sales: true,
      subcategories: [
        {
          id: 1,
          title: 'Средства для бритья и депиляции',
          img: 'https://sbermarket.ru/spree/taxons/12360/normal/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9_%D1%83%D1%85%D0%BE%D0%B4.jpeg'
        },
        {
          id: 2,
          title: 'Средства для бритья и депиляции',
          img: 'https://sbermarket.ru/spree/taxons/12360/normal/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9_%D1%83%D1%85%D0%BE%D0%B4.jpeg'
        },
      ]
    },
    {
      id:3,
      title: "Вода, соки, напитки",
      img: "https://sbermarket.ru/spree/taxons/5020/normal/%D0%92%D0%BE%D0%B4%D0%B0__%D1%81%D0%BE%D0%BA%D0%B8__%D0%BD%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8.png",
      sales: false,
      subcategories: [
        {
          id: 1,
          title: 'Большая упаковка',
          img: 'https://sbermarket.ru/spree/taxons/9850/normal/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0.jpg'
        }
      ]
    },
    {
      id:4,
      title: "Овощи и фрукты",
      img: "https://sbermarket.ru/spree/taxons/4232/normal/2000000.png",
      sales: false,
      subcategories: [
        {
          id: 1,
          title: 'Овощи',
          img: 'https://sbermarket.ru/spree/taxons/4233/normal/2010000.jpg'
        },
        {
          id: 2,
          title: 'Зелень, салаты, смеси',
          img: 'https://sbermarket.ru/spree/taxons/4279/normal/2050000.jpg'
        }
      ]
    },
    {
      id:5,
      title: "Молочные продукты",
      img: 'https://sbermarket.ru/spree/taxons/4502/normal/%D0%A1%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%B0.png',
      sales: false,
      subcategories: [
        {
          id: 1,
          title: 'Молочные продукты',
          img: 'https://sbermarket.ru/spree/taxons/4502/normal/%D0%A1%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%B0.png'
        }
      ]
    },
    {
      id:6,
      title: "Бакалея",
      img: "https://sbermarket.ru/spree/taxons/4329/normal/3000000.png",
      sales: false,
      subcategories: [
        {
          id: 1,
          title: 'Бритье',
          img: 'https://sbermarket.ru/static/taxons/default.png'
        }
      ]
    },
    {
      id:7,
      title: "Сладости",
      img: "https://sbermarket.ru/spree/taxons/4768/normal/10000000.png",
      sales: true,
      subcategories: [
        {
          id: 1,
          title: 'Бритье',
          img: 'https://sbermarket.ru/static/taxons/default.png'
        }
      ]
    },
    {
      id:8,
      title: "Сыры",
      img: "https://sbermarket.ru/spree/taxons/4582/normal/7000000.png",
      sales: false,
      subcategories: [
        {
          id: 1,
          title: 'Бритье',
          img: 'https://sbermarket.ru/static/taxons/default.png'
        }
      ]
    },
    {
      id:9,
      title: "Колбасы, сосиски, деликатесы",
      img: "https://sbermarket.ru/spree/taxons/4672/normal/8000000.png?1587987444",
      sales: false,
      subcategories: [
        {
          id: 1,
          title: 'Бритье',
          img: 'https://sbermarket.ru/static/taxons/default.png'
        }
      ]
    },
    {
      id:10,
      title: 'Яйца',
      img: 'https://sbermarket.ru/spree/taxons/4574/normal/6000000.png?1587987444',
      sales: true,
      subcategories: [
        {
          id: 1,
          title: 'Бритье',
          img: 'https://sbermarket.ru/static/taxons/default.png'
        }
      ]
    },
    {
      id:11,
      title: 'Хлеб и выпечка',
      img: 'https://sbermarket.ru/spree/taxons/4697/normal/9000000.png?1587987444',
      sales: true,
      subcategories: [
        {
          id: 1,
          title: 'Бритье',
          img: 'https://sbermarket.ru/static/taxons/default.png'
        }
      ]
    },

  ],
}
