import { LANGUAGES } from '../constants/common'
import { API_URL } from '../constants/urls'
import { CartProduct, Toppings } from '../types'

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

export const sendProductsToCMS =
  async ( products: (CartProduct & { toppings: Toppings; count: number })[], data: Record<string, string | boolean> ) => {
    const orders = await Promise.all(products.map(async (product) => {

      const toppings = await Promise.all(product.toppings.topping.map( async (topping) => {
        const toppingRes = await fetch(`https://mr-kebab-admin.herokuapp.com/toppings?name_eq=${topping.text}`)
        const toppingCMS = await toppingRes.json()
        return (toppingCMS[0])
      }))

      const excludings = await Promise.all(product.toppings.without.map( async (excluding) => {
        const excludingRes = await fetch(`https://mr-kebab-admin.herokuapp.com/excludings?name_eq=${excluding.text}`)
        const excludingCMS = await excludingRes.json()
        return (excludingCMS[0])
      }))

      const productRes = await fetch(`https://mr-kebab-admin.herokuapp.com/products?name_eq=${product.name}`)
      const productCMS = await productRes.json()

      const requestOptionsOrder = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product : productCMS[0],
          toppings,
          excludings,
          price: product.price,
        }),
      }

      const orderRes = await fetch('https://mr-kebab-admin.herokuapp.com/orders', requestOptionsOrder)
      const orderCMS = await orderRes.json()

      return (orderCMS)
    }))

    const {name, tel, email} = data
    const requestOptionsClient = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone: tel,
        email,
        orders,
      }),
    }

    const clientRes = await fetch('https://mr-kebab-admin.herokuapp.com/clients', requestOptionsClient)
    const client = await clientRes.json()

    console.log(client)
  }
