export const SIZES = {
  sm: 512,
  md: 816,
  lg: 1024,
}

export const SCREEN_TYPE = {
  mobile: 'mobile',
  tablet: 'tablet',
  desktop: 'desktop',
}

export const THEMES = {
  light: 'light' as 'light',
  dark: 'dark' as 'dark',
}

export const FONT = {
  redHatDisplay: '"Red Hat Display", sans-serif',
  b612: '"B612", sans-serif',
  montserrat: '"Montserrat", sans-serif',
}

export const LANGUAGES = {
  ro: 'ro',
  ru: 'ru',
}

export const PAGES = {
  home: { name: 'Principală', pathname: '/' },
  careers: { name: 'Cariere', pathname: '/careers' },
  locations: { name: 'Locații', pathname: '/locations' },
}

export const DAY = 24 * 60 * 60 * 1000

export const metaData = {
  index : {
    title : {
      ro : '',
      ru : '',
    },
    description : {
      // eslint-disable-next-line max-len
      ro : 'Mister Kebab este bucatarul tau de incredere! Aici se pregatesc cele mai gustoase kebaburi si burgere din Chisinau. O retea de fast-food pentru toate gusturile și varstele!',
      // eslint-disable-next-line max-len
      ru : 'Мистер Кебаб - ваш надежный повар! Здесь готовят самые вкусные в Кишиневе кебабы и бургеры. Сеть fast-food на любой вкус и возраст!',
    },
  },
  careers : {
    title : {
      ro : 'Cariere | Mr. Kebab',
      ru : 'Карьеры | Mr. Kebab',
    },
    description : {
      // eslint-disable-next-line max-len
      ro : 'Mr Kebab angajeaza personal care adora kebabul! Devino si tu parte a echipei noastre: chelneri, bucatari, casieri. O retea de fast-food prietenoasa!',
      // eslint-disable-next-line max-len
      ru : 'Мистер Кебаб нанимает сотрудников, которые любят кебаб! Станьте частью нашей команды: официанты, повара, кассиры. Дружелюбная сеть fast-food!',
    },
  },
  locations : {
    title : {
      ro : 'Locatii | Mr. Kebab',
      ru : 'Локации | Mr. Kebab',
    },
    description : {
      // eslint-disable-next-line max-len
      ro : 'Mr Kebab are 4 locatii la Malina Mica, Botanica si Rascani. Alege pe cel mai apropiat tie si comanda! Suna la 0675 59 999 sau vino in unul dintre restaurantele noastre de tip fast-food',
      // eslint-disable-next-line max-len
      ru : 'У Mr Kebab есть 4 локаций на Малой Малине, Ботанике и Рышкановке. Выбирайте ближайший к вам и заказывайте! Звоните на 0675 59 999 или приходите в один из наших ресторанов fast-food.',
    },
  },
}

export const PHONE_NUMBERS = {
  rascanovca: {
    link: '+37367449999',
    text: '+373 (67) 449 999',
  },
  botanica: {
    link: '+37367559999',
    text: '+373 (67) 559 999',
  },
  malinamica: {
    link: '+37367459999',
    text: '+373 (67) 459 999',
  },
  general: {
    link: '+37322559999',
    text: '+373 (22) 559 999',
  },
}
