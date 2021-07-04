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
