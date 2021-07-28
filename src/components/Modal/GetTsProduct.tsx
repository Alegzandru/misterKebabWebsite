export const getTsProduct = (product: any, subcategories: any[]) => {
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
