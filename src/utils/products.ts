import { COMBO_DRINKS } from '../constants'
import { LANGUAGES } from '../constants/common'
import { API_URL } from '../constants/urls'
import { CartProduct, Toppings, WithText } from '../types'

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

  const drinks = product.combo_drinks.length !== 0
    ? product.combo_drinks.map((drink: any) => ({text: drink.name, textru: drink.nameru}))
    : []

  const toppingsObj = { topping, without, drinks }

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
  async ( products: (CartProduct & { toppings: Toppings; count: number })[], data: Record<string, string | boolean>, price: number ) => {
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

      const drinkArray = product.toppings.drinks ? await Promise.all(product.toppings.drinks.map( async (drinkSingular) => {
        const drinkRes = await fetch(`https://mr-kebab-admin.herokuapp.com/products?name_eq=${drinkSingular.text}`)
        const drinkCMS = await drinkRes.json()
        return (drinkCMS[0])
      })) : []
      const drink = drinkArray ? drinkArray[0] : null

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
          combo_drink: drink ? drink : null,
          count: product.count,
        }),
      }

      const orderRes = await fetch('https://mr-kebab-admin.herokuapp.com/orders', requestOptionsOrder)
      const orderCMS = await orderRes.json()

      return (orderCMS)
    }))

    const {name, tel, email} = data
    const {commentary} = data || {commentary: ''}
    const {masa} = data || {masa: ''}
    const {orderPayment} = data || {orderPayment: ''}
    const {orderType} = data || {orderType: ''}
    const requestOptionsClient = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone: tel,
        email,
        orders,
        price,
        commentary,
        masa: parseInt(masa as string, 10),
        mod_de_livrare: getTipulComenzii(orderType as string),
        mod_de_plata: orderPayment as string,
      }),
    }

    await fetch('https://mr-kebab-admin.herokuapp.com/clients', requestOptionsClient)
  }


export const defaultDrinks = (drinks: WithText[]) => {
  const defaultDrink = drinks.findIndex((drink) => drink.text === COMBO_DRINKS.pepsi)
  return [drinks[defaultDrink > -1 ? defaultDrink : 0]]
}

export const getTipulComenzii = (payment: string) => {
  switch(payment){
    case 'takeaway' :
      return 'preluare_din_local'
    case 'delivery' :
      return 'livrare'
    default:
      return 'in_local'
  }
}

export const getTipulComenziiMail = (payment: string) => {
  switch(payment){
    case 'takeaway' :
      return 'Preluare din local'
    case 'delivery' :
      return 'Livrare'
    default:
      return 'În local'
  }
}
