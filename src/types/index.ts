import { DeepMap, FieldError, FieldValues, RegisterOptions, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { CAREERS_CHECKBOXES_CATEGORY, MODALS } from '../constants'
import { THEMES } from '../constants/common'
import { CART_FORM_COMPONENTS, ORDER_FROM_INPUTS, ORDER_PAYMENT_METHODS } from '../constants/forms'

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

export type CartProduct = Pick<Product, 'name' | 'price' | 'image' | 'nameru'>

export type WithText = {
  text: string
  textru: string
}

export type Toppings = {
  topping: Topping[]
  without: Without[]
  drinks?: Drinks[]
}

export type Topping = {
  price: number
} & WithText

export type Without = WithText

export type Drinks = WithText

export type Additive = Topping | Without | Drinks

export type CareerOthersBlock = {
  heading: string
  name: string
  values: string[]
}

export type PropsForm = {
  orderType: OrderType
  setOrderType: React.Dispatch<React.SetStateAction<OrderType>>
  orderPayment: OrderPayment
  setOrderPayment: React.Dispatch<React.SetStateAction<OrderPayment>>
  register: UseFormRegister<FieldValues>
  errors?: DeepMap<FieldValues, FieldError>
  setValue: UseFormSetValue<Record<string, any>>
} & RegisterOptions

export type CareerCheckboxesCategory = keyof typeof CAREERS_CHECKBOXES_CATEGORY | ''
export type OrderType = keyof typeof CART_FORM_COMPONENTS | ''
export type OrderPayment = keyof typeof ORDER_PAYMENT_METHODS | ''
export type OrderFrom = keyof typeof ORDER_FROM_INPUTS | ''
export type Modals = keyof typeof MODALS | ''
export type Themes = keyof typeof THEMES
