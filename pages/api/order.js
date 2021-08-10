import sgMail from '@sendgrid/mail'
import {getTipulComenziiMail} from '../../src/utils/products'

sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_API_KEY2)

const sendMail = async (req, res) => {

  const { data, products, submitLocal, isValidLocal } = req.body
  const {name, tel, price, commentary, masa, orderPayment, orderType, address} =
  {commentary: '', masa: '', orderPayment: '', orderType: '', address: '', ...data}

  const today = new Date()

  const paddedString = (value) => String(value).padStart(2, '0')

  const dd = paddedString(today.getDate())
  const mm = paddedString(today.getMonth() + 1)
  const yyyy = today.getFullYear()
  const date = dd + ' ' + mm + ' ' + yyyy

  const sec = paddedString(today.getSeconds())
  const min = paddedString(today.getMinutes())
  const hours = paddedString(today.getHours())
  const time = hours + ':' + min + ':' + sec

  const subject = isValidLocal
    ? `Masa #${masa}, ${orderPayment}`
    : `Comanda nouă la ${data.takeawayLocation}`

  const templateData = {
    subject,
    date,
    time,
    masa,
    sum : price,
    shipping: '',
    total: price,
    name,
    tel,
    mod_de_plata: orderPayment,
    mod_de_livrare: getTipulComenziiMail(orderType),
    address,
    commentary,
    orders: products.map((product) => ({
      name: product.name,
      toppings: product.toppings.topping.map((topping) => topping.text),
      excludings: product.toppings.without.map((without) => without.text),
      combo_drink: product.toppings.drinks.map((drink) => drink.text),
      price: `${product.price} MDL`,
      img: product.image,
      count: product.count,
    })),
  }

  const msg = {
    from: 'manager.mister.kebab@gmail.com',
    to : `${submitLocal}kebab@gmail.com`,
    dynamic_template_data : templateData,
    template_id : 'd-2dacbd7f6f974d20af110a66561995e1',
  }

  try {
    await sgMail.send(msg)
    res.json({ message: 'Email has been sent' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default sendMail

