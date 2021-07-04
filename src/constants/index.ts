export const HERO_BUTTONS = [
  { name: 'Lavaș', id: 'wrap' },
  { name: 'Burger', id: 'burger' },
  { name: 'Pita', id: 'pita' },
]

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

export const CATEGORIES = [
  { id: 'kebab', name: 'Kebab' },
  { id: 'saorma', name: 'Șaorma' },
  { id: 'mrWrap', name: 'Mr Wrap' },
  { id: 'mrLavas', name: 'Mr Lavaș' },
  { id: 'mrChicken', name: 'Mr Chicken' },
  { id: 'mrBeef', name: 'Mr Beef' },
  { id: 'mrVegetarian', name: 'Mr Vegetarian' },
  { id: 'baghet', name: 'Baghet' },
  { id: 'pita', name: 'Pita' },
  { id: 'supa', name: 'Supă' },
  { id: 'salata', name: 'Salată' },
  { id: 'snacks', name: 'Snacks' },
  { id: 'combo', name: 'Combo' },
  { id: 'menuKids', name: 'Menu Kids' },
  { id: 'sosuri', name: 'Sosuri' },
  { id: 'deserturi', name: 'Deserturi' },
  { id: 'bauturi', name: 'Bauturi' },
]

export const BADGES = {
  cow: { name: 'cow' },
  sheep: { name: 'sheep' },
  chicken: { name: 'chicken' },
  kebab: { name: 'kebab' },
  skewer: { name: 'skewer' },
  ice: { name: 'ice' },
  coffeeBean: { name: 'coffeeBean' },
  coffeeBeans: { name: 'coffeeBeans' },
  ibrik: { name: 'ibrik' },
}

export const MENU = [
  {
    categoryName: 'Lavaș',
    subCategories: [
      {
        id: 'kebab',
        name: 'Mr Kebab',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
      {
        id: 'saorma',
        name: 'Șaorma',
        items: [
          {
            name: 'Șaorma Mr Lavaș',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Șaorma Vita',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Șaorma Amestec',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow', 'chicken'],
            image: 'product-image',
          },
        ],
      },
      {
        id: 'mrWrap',
        name: 'Mr. Wrap',
        items: [
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
      {
        id: 'mrLavas',
        name: 'Mr. Lavaș',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Burger',
    subCategories: [
      {
        id: 'mrChicken',
        name: 'Mr Chicken Burger',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
      {
        id: 'mrBeef',
        name: 'Mr Beef Burger',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
      {
        id: 'mrVegetarian',
        name: 'Mr Vegetarian',
        items: [
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'baghet',
        name: 'Baghet',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'pita',
        name: 'Pita',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'supa',
        name: 'Supă',
        items: [
          {
            name: 'Supa',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Supa',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'salata',
        name: 'Salată',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'snacks',
        name: 'Snacks',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'combo',
        name: 'Combo',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
      {
        id: 'menuKids',
        name: 'Combo Kids',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'sosuri',
        name: 'Sosuri',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: '',
    subCategories: [
      {
        id: 'deserturi',
        name: 'Deserturi',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
  {
    categoryName: 'Băuturi',
    subCategories: [
      {
        id: 'bauturi',
        name: 'Cafea',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
      {
        id: '',
        name: 'Ceai',
        items: [
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
      {
        id: '',
        name: 'Băuturi dulci',
        items: [
          {
            name: 'Kebab pui mic',
            price: 35,
            weight: 350,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab pui mare',
            price: 50,
            weight: 450,
            badges: ['kebab', 'chicken'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mic',
            price: 38,
            weight: 350,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
          {
            name: 'Kebab Vita mare',
            price: 45,
            weight: 450,
            badges: ['kebab', 'cow'],
            image: 'product-image',
          },
        ],
      },
    ],
  },
]
