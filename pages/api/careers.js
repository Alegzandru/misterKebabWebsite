import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.NEXT_PUBLIC_EMAIL_API_KEY2)

const sendMail = async (req, res) => {
  const { name, age, tel, email, services, languages, locations, workType } = req.body

  const msg = {
    from: 'manager.mister.kebab@gmail.com',
    personalizations : [
      {
        to : 'manager.mister.kebab@gmail.com',
        dynamic_template_data : {
          subject : `Mesaj nou de la ${name} (${tel})`,
          name,
          age,
          tel,
          email,
          services,
          languages,
          locations,
          workType,
        },
      },
    ],
    template_id : 'd-e5e3394065f74ea7aba77e03bf8e32f9',
  }

  try {
    await sgMail.send(msg)
    res.json({ message: 'Email has been sent' })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export default sendMail

