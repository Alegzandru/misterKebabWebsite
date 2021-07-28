import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_API_KEY2)

const sendMail = async (req, res) => {
  // const { name, age, tel, email, services, languages, locations, workType } = req.body

  // const msg = {
  //   from: 'manager.mister.kebab@gmail.com',
  //   personalizations : [
  //     {
  //       to : 'manager.mister.kebab@gmail.com',
  //       dynamic_template_data : {
  //         subject : `Mesaj nou de la ${name} (${tel})`,
  //         name,
  //         age,
  //         tel,
  //         email,
  //         services,
  //         languages,
  //         locations,
  //         workType,
  //       },
  //     },
  //   ],
  //   template_id : 'd-e5e3394065f74ea7aba77e03bf8e32f9',
  // }

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
          name: 'Aleosha Mirros',
          tel: '076 678 788',
          address: 'strada Mirros 20',
          comentary: 'Vrau kebab',
          orders: [
            {
              name: 'Mr Pita Burger',
              toppings: ['falafel', 'lavas', 'patlajele'],
              excludings: ['castraveti', 'ceapa'],
              price: '280 lei',
              img: 'https://res.cloudinary.com/dbh1vgas3/image/upload/v1626956156/thumbnail_Mr_Snitel_1_7b927b05e4.png',
            },
          ],
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

