import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_API_KEY2)

const sendMail = async (req, res) => {
  const { data, products } = req.body
  const {name, tel} = data

  const msg = {
    from: 'manager.mister.kebab@gmail.com',
    personalizations : [
      {
        to : 'manager.mister.kebab@gmail.com',
        dynamic_template_data : {
          date: '12 12 2020',
          sum : '280 lei',
          shipping: '12 lei',
          total: '292 lei',
          name,
          tel,
          address: 'strada Mirros 20',
          comentary: 'Vrau kebab',
          orders: products.map((product) => ({
            name: product.name,
            toppings: product.toppings.topping.map((topping) => topping.text),
            excludings: product.toppings.without.map((without) => without.text),
            price: `${product.price} MDL`,
            img: product.image,
          })),
        },
      },
    ],
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

