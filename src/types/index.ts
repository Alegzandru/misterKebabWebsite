export type HeroButton = {
  name: string
  id: string
}

export type CategoryItem = {
  name: string
  id: string
}

export type TouchData = {
  lastPosition: number
  position: number
  locked: boolean
}

export type SectionInView = {
  id: string
  inView: boolean
  scrollPosition: number
}

export type MenuObject = {
  categoryName: string
  subCategories: {
    id: string
    name: string
    items: Product[]
    order: number
  }[]
  order: number
}

export type Product = {
  name: string
  price: number
  weight: number
  badges: string[]
  image: string
  ingredients?: string
  toppings: Toppings
  subcategory: string
}

export type Toppings = {
  topping: {
    text: string
    price: number
  }[]
  without: string[]
}

// export type Excluding = {
//   id: number
//   name: string
//   nameru: string
//   // created_at: string
//   // published_at: string
//   // updated_at: string
// }

// export type Toppings = {
//   topping: {
//     text: string
//     price: number
//   }[]
//   without: string[]
// }

// export type Ingredients = {
//   created_at: string
//   id: number
//   name: string
//   product?: Product
//   published_at: string
//   updated_at: string
// }

// export type Product = {
//   name: string
//   nameru: string
//   price: number
//   weight: number
//   image: any
//   ingredients?: string
//   toppings?: Toppings
//   description: string
//   descriptionru: string
//   subcategory: any
//   id: number
//   badges: string[]
// }

export type ToppingsManagerState = {
  topping: Map<string, {
    text: string
    price: number
  }>
  without: Set<string>
}

export type AnyAction = {
  type: string
  payload: Record<string, any>
}

// export type Subcategory = {
//   name: string
//   nameru: string
//   excludings: Excluding[]
//   id: number
//   order: number
//   products: Product[]
// }

// export type Category = {
//   name: string
//   subcategories: Subcategory[]
// }
