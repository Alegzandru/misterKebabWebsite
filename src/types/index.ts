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
    items: {
      name: string
      price: number
      weight: number
      badges: string[]
      image: string
    }[]
  }[]
}

export type AnyAction = {
  type: string
  payload: Record<string, any>
}

export type Category = {
  name: string
  products: any[]
}

export type Product = {
  name: string
  description: string
}
