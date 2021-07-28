import { LANGUAGES } from '../constants/common'
import { API_URL } from '../constants/urls'
import { Toppings } from '../types'

export const productFilter = (product: any, subcategories: any[]) => {
  const topping = product.toppings.length !== 0
    ? product.toppings.map((toppingSing: any) => ({
      text: toppingSing.name, textru:toppingSing.nameru, price: toppingSing.price,
    }))
    : []

  const without = product.excludings.length !== 0
    ? product.excludings.map((excluding: any) => ({text: excluding.name, textru: excluding.nameru}))
    : subcategories.filter((category: any) =>category.name === product.subcategory.name)[0].excludings
      .map((excluding: any) => ({text: excluding.name, textru: excluding.nameru}))

  const toppingsObj = { topping, without }

  return (
    {
      name: product.name,
      nameru: product.nameru,
      price: product.price,
      weight: product.weight,
      badges: product.ingredients.map((ingredient: any) => (ingredient.name)),
      image: !product.image.formats.medium ? '/images/food/product-image.png' : product.image.formats.medium.url,
      subcategory: product.subcategory.name,
      ingredients: product.description,
      ingredientsru: product.descriptionru,
      toppings: toppingsObj,
    }
  )
}

export const fetcher = async (query: string) => {
  const [resCategory, resCategories, resProducts] = await Promise.all([
    fetch(`${API_URL}/categories${query}`),
    fetch(`${API_URL}/categories`),
    fetch(`${API_URL}/products`),
  ])

  const [category, subcategories, productsFetch] = await Promise.all([
    resCategory.json(),
    resCategories.json(),
    resProducts.json(),
  ])

  if (!category.length || !subcategories.length || !productsFetch.length || !category[0].recomended_subcategories.length) {
    return { ok: false, data: undefined }
  }

  const filteredProducts = category[0].recomended_subcategories.map((recommendedSub: any) => {
    const subcategoryProducts = productsFetch.filter((product: any) =>
      product.subcategory.name === recommendedSub.name &&
      product.image &&
      product.price !== null &&
      product.name !== null
    )

    const randomIndex = Math.floor(Math.random() * subcategoryProducts.length)
    const productToShow = subcategoryProducts[randomIndex]

    return productFilter(productToShow, subcategories)
  })

  return { ok: true, data: filteredProducts }
}

export const productToppingsPrice = (toppings: Toppings) => toppings.topping.reduce((accumulator, { price }) => accumulator + price, 0)

export const sortToppings = <T extends {text: string; textru: string}>(language: string) => (first: T, second: T): number=> {
  switch(language){
    case LANGUAGES.ro :
      if (first.text < second.text) {
        return -1
      }

      if (first.text > second.text) {
        return 1
      }

      return 0

    case LANGUAGES.ru :
      if (first.textru < second.textru) {
        return -1
      }

      if (first.textru > second.textru) {
        return 1
      }

      return 0
  }

  return 0
}
