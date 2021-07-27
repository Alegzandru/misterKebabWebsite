import { CAREERS_CHECKBOXES_CATEGORY, MODALS } from '../constants'
import { THEMES } from '../constants/common'
import { CART_FORM_COMPONENTS } from '../constants/forms'

export type AnyAction = {
  type: string
  payload: Record<string, any>
}

export type Response<T> = {
  ok: boolean
  data: T
}

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

export type MenuList = {
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
}[]

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

export type CartProduct = Pick<Product, 'name' | 'price' | 'image'>

export type Toppings = {
  topping: Topping[]
  without: string[]
  drinks?: string[]
}

export type Topping = {
  text: string
  price: number
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
export type OrderType = keyof typeof CART_FORM_COMPONENTS | ''
export type Modals = keyof typeof MODALS | ''
export type Themes = keyof typeof THEMES
