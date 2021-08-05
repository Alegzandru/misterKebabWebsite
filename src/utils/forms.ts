import { CAREERS_FORM_INITIAL_DATA, CAREERS_OTHERS, CAREERS_SERVICES } from '../constants'

export const careerFormDataHandler = (data: Record<string, string | boolean>) => Object
  .entries(data)
  .reduce((accumulator, currentValue) => {
    const [field, value] = currentValue

    if (!value) {
      return accumulator
    }

    if (typeof value === 'string') {
      accumulator[field] = value

      return accumulator
    }

    if (CAREERS_SERVICES.includes(field)) {
      accumulator.services = [...accumulator.services, field]

      return accumulator
    }

    for (const { name, values } of CAREERS_OTHERS) {
      if (values.includes(field)) {
        accumulator[name] = [...accumulator[name], field]

        return accumulator
      }
    }

    return accumulator
  }, { ...CAREERS_FORM_INITIAL_DATA })


export const sendMailCareers = async (data: typeof CAREERS_FORM_INITIAL_DATA ) => {
  try {
    await fetch('/api/careers', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
  } catch(error){
    return 0
  }
}
