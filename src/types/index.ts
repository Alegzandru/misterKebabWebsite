import { CAREERS_CHECKBOXES_CATEGORY } from '../constants'

export type HeroButton = {
  name: string
  id: string
}

export type CategoryItem = {
  name: string
  nameru: string
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
  categoryNameRu: string
  subCategories: {
    id: string
    name: string
    nameru: string
    items: Product[]
    order: number
  }[]
  order: number
}

export type Product = {
  name: string
  nameru: string
  price: number
  weight: number
  badges: string[]
  image: string
  ingredients?: string
  ingredientsru?: string
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

export type ToppingsManagerState = {
  topping: Map<string, {
    text: string
    price: number
  }>
  without: Set<string>
}

export type CareerOthersBlock = {
  heading: string
  name: string
  values: string[]
}

export type CareerCheckboxesCategory = keyof typeof CAREERS_CHECKBOXES_CATEGORY | ''

export type AnyAction = {
  type: string
  payload: Record<string, any>
}
