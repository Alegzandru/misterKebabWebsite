import sgMail from '@sendgrid/mail'
import { DELIVERY_PRICE } from '../../src/constants'
import {getTipulComenziiMail} from '../../src/utils/products'

sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_API_KEY2)

const sendMail = async (req, res) => {

  const { data, products, submitLocal, isValidLocal } = req.body
  const {email, name, tel, price, commentary, masa, orderPayment, orderType, street, block, stair, floor, flat, takeawayLocation, regionToDeliver} =
  {street: '', block: '', stair: '', floor: '', flat: '', takeawayLocation: '', commentary: '', masa: '', orderPayment: '',
    regionToDeliver: '', orderType: '', ...data}

  const today = new Date()
  const localOffset = new Date().getTimezoneOffset()
  const localOffsetMillis = 60 * 1000 * localOffset
  const localDate = new Date(today.getTime() + localOffsetMillis)
  const offset = 180
  const estDate = new Date(localDate.getTime() + offset*60*1000)

  const paddedString = (value) => String(value).padStart(2, '0')

  const dd = paddedString(estDate.getDate())
  const mm = paddedString(estDate.getMonth() + 1)
  const yyyy = estDate.getFullYear()
  const date = dd + '.' + mm + '.' + yyyy

  const sec = paddedString(estDate.getSeconds())
  const min = paddedString(estDate.getMinutes())
  const hours = paddedString(estDate.getHours())
  const time = hours + ':' + min + ':' + sec

  const subject = isValidLocal
    ? `Masa #${masa}, ${orderPayment}`
    : orderType === 'delivery' ?
      `Comanda cu livrare la ${street}` :
      `Comanda cu preluare la ${takeawayLocation}`

  const realDeliveryPrice = price >= 300 ? 0 : DELIVERY_PRICE

  const templateData = {
    subject,
    date,
    time,
    masa,
    sum : price,
    shipping: realDeliveryPrice,
    total: price + realDeliveryPrice,
    name,
    tel,
    mod_de_plata: 'Cash',
    mod_de_livrare: getTipulComenziiMail(orderType),
    takeawayConstant: 'Preluare din local',
    takeawayLocation,
    regionToDeliver,
    address: street,
    bloc: block,
    scara: stair,
    etaj: floor,
    apartament: flat,
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
    personalizations: [
      {
        to : `${submitLocal}kebab@gmail.com`,
      },
      {
        to: email,
      },
    ],
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

