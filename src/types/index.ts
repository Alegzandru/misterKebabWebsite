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
  }[]
}

export type Product = {
  name: string
  price: number
  weight: number
  badges: string[]
  image: string
  ingredients?: string
  toppings?: Toppings
}

export type Toppings = {
  topping: {
    text: string
    price: number
  }[]
  without: string[]
}

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
