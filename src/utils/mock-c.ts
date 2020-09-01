export const logo = "http://via.placeholder.com/200x50?img=Img";

export const ordering = {
  method: {
    id: 1,
    title: "Способ получения",
    info: "Самовывоз из METRO",
    address: "Москва, Ленинградское шоссе, 71Г",
    link: "Изменить",
    btn: "Продолжить",
    content: {
      img: "https://via.placeholder.com/50x50?img=Img",
      shop: "METRO",
      desc:
        "Чтобы изменить магазин, [выберите его]() на главной странице и проверьте наличие всех товаров в корзине",
    },
  },
  contacts: {
    id: 2,
    title: "Контакты",
    text: "Добавьте свои контакты",
    email: "jamwox@bk.ru",
    phone: "8 (800) 200 06 00",
    link: "Изменить",
    btn: "Продолжить",
  },
  replacements: {
    id: 3,
    title: "Замены",
    text: "Выберите способ осуществления замен",
    info: "Не согласовывать",
    link: "Изменить",
    btn: "Продолжить",
    content: {
      desc:
        "Мы берем товары прямо с полок магазина. В отдельных случаях товар может закончиться или не соответствовать нашим критериям качества. В таком случае сборщик вашего заказа будет действовать согласно этим настройкам.",
    },
    panels: [
      {
        id: 1,
        desc: "Позвонить мне. Если не удастся, выбирает сборщик",
        icon: "fas fa-question-circle",
      },
      {
        id: 2,
        desc: "Позвонить мне. Если не удастся, убрать товар",
      },
      {
        id: 3,
        desc: "Не звонить. Замену выбирает сборщик",
        icon: "fas fa-question-circle",
      },
      {
        id: 4,
        desc: "Не звонить. Убрать отсутствующий товар",
      },
    ]
  },
  payment: {
    id: 4,
    title: "Оплата",
    info: "•••• 1780",
    link: "Изменить",
    btn: "Продолжить",
    online: {
      desc: "После оформления заказа мы спишем и вернем один рубль для проверки карты. Полная стоимость будет списана после сборки заказа в магазине.",
      securityTitle: "Безопасное соединение",
      securityDesc: "Мы не храним и не обрабатываем данные банковских карт. Все операции проводятся в процессинговом цетре CloudPayments, сертифицированном по международному стандарту безопасности платежных карт PCI DSS.",
    },
    transfer: {
      desc: "Сборка заказа осуществляется только после полной предоплаты и поступления денежных средств на наш счет",
    }
  },
  timetable: {
    id: 5,
    title: "Время",
    text: "Выберите время получения",
    info: "METRO ",
    link: "Изменить",
    btn: "Продолжить",
    content: {
      img: "https://via.placeholder.com/50x50?img=Img",
      shop: "METRO",
    },
    date: [
      {
        weekDay: "Вчера",
        monthDay: "27 августа",
      },
      {
        weekDay: "Сегодня",
        monthDay: "28 августа",
      },
      {
        weekDay: "Завтра",
        monthDay: "29 августа",
      },
      {
        weekDay: "Вс",
        monthDay: "30 августа",
      },
      {
        weekDay: "Пн",
        monthDay: "31 августа",
      },
      {
        weekDay: "Вт",
        monthDay: "1 сентября",
      },
      {
        weekDay: "Ср",
        monthDay: "2 сентября",
      },
    ],
    time: [
      {
        hours: "9:00-11:00",
        status: "бесплатно",
        selected: true
      },
      {
        hours: "10:00-12:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "11:00-13:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "12:00-14:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "13:00-15:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "14:00-16:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "15:00-17:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "16:00-18:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "17:00-19:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "18:00-20:00",
        status: "бесплатно",
        selected: false
      },
      {
        hours: "19:00-21:00",
        status: "бесплатно",
        selected: true
      },
      {
        hours: "20:00-22:00",
        status: "бесплатно",
        selected: false
      },
    ],
  },
  final: {
    text: "Готовы сделать заказ?",
    btn: "Оформить заказ",
  }
};
