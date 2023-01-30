export const loadingDelay = 1000;

// Новости
export const arrNews = [
  {
    id: 'b6',
    bg_img: null,
    bg_color: '#34AADD',
    title: 'Цветок, который стоит на столе, такой загадочный.',
    description:
      'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя',
  },
  {
    id: 'b7',
    bg_img:
      "url('http://bigpicture.ru/wp-content/uploads/2014/12/5-aula_medica3.jpg')",
    bg_color: 'rgba(167, 80, 123, .8)',
    title: 'Длинный заголовок большой новости',
    description:
      'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя',
  },
  {
    id: 'b8',
    bg_img:
      "url('http://bigpicture.ru/wp-content/uploads/2014/12/5-aula_medica3.jpg')",
    bg_color: 'rgba(102, 128, 174, .8)',
    title: 'Длинный заголовок большой новости',
    description:
      'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя',
  },
  {
    id: 'b9',
    bg_img: null,
    bg_color: '#F95A59',
    title: 'Цветок, который стоит на столе, такой загадочный.',
    description:
      'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя',
  },
];

// Партнёры внизу страницы
export const arrParthers = [
  { id: 'par6', url: '../public/img/logo_1.jpg', alt: 'logo_1' },
  { id: 'par7', url: '../public/img/logo_2.jpg', alt: 'logo_2' },
  { id: 'par8', url: '../public/img/logo_3.jpg', alt: 'logo_3' },
  { id: 'par9', url: '../public/img/logo_4.jpg', alt: 'logo_4' },
  { id: 'par10', url: '../public/img/logo_5.jpg', alt: 'logo_5' },
];

export const productsOptions = [
  {
    id: 1,
    iconAction: true,
    iconHit: true,
    iconBestPrice: true,
    oldPrice: 1499,
  },
  {
    id: 2,
    iconAction: true,
    iconHit: false,
    iconBestPrice: false,
    oldPrice: null,
  },
  {
    id: 3,
    iconAction: false,
    iconHit: true,
    iconBestPrice: false,
    oldPrice: 2699,
  },
  {
    id: 4,
    iconAction: true,
    iconHit: true,
    iconBestPrice: false,
    oldPrice: 2199,
  },
];

export const products = [
  {
    id: 1,
    productPhoto:
      'http://mainfun.ru/uploads/images/02/04/14/2017/09/21/82ae40.jpg',
    title: 'Цветок, который стоит на столе, такой загадочный.',
    description:
      'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя',
    price: 799,
    showPrice: '799 ',
  },
  {
    id: 2,
    productPhoto: 'https://doseng.org/uploads/posts/2018-06/1528416202_11.jpg',
    title: 'Набор юного инстаблогера',
    description:
      'Посмотрите на него. Он покажет всем какой вы классный и творческий. Главное не забыть посидеть на подоконнике с бокаль...',
    price: 13666,
    showPrice: '13 666 ',
  },
  {
    id: 3,
    productPhoto:
      'https://p4.wallpaperbetter.com/wallpaper/767/65/291/palouse-falls-washington-state-park-wallpaper-preview.jpg',
    title: 'Лампа. Просто лампа.',
    description:
      'В паре с загадочным цветком добавит загадочности вашему интерьеру',
    price: 1789,
    showPrice: '1 789 ',
  },
  {
    id: 4,
    productPhoto:
      'https://i.pinimg.com/736x/59/17/5b/59175b1f980587cd8aa4c800835c9dec.jpg',
    title: 'Классные деревянные минималистичные часы с...',
    description:
      'Все в ту же копилку загдочности вашего интерьера и вашей натуры',
    price: 1899,
    showPrice: '1 899 ',
  },
];
