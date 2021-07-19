export const VALIDATIONS = {
  name: {
    required: 'Câmpul este obligatoriu!',
    maxLength: {
      value: 50,
      message: 'Numele nu poate sa fie mai lung de 50 de caractere!',
    },
    pattern: {
      value: /^[a-zA-Z ]*$/i,
      message: 'Numele poate conține doar litere si spații!',
    },
  },
  age: {
    required: 'Câmpul este obligatoriu!',
    min: {
      value: 18,
      message: 'Se accepta doar persoane cu minim 18 ani!',
    },
  },
  tel: {
    required: 'Câmpul este obligatoriu!',
    pattern: {
      value: /^(\+\d{1,3}[- ]?)?\d{10}$/i,
      message: 'Numarul nu este valid!',
    },
  },
  email: {
    required: 'Câmpul este obligatoriu!',
    pattern: {
      value: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/i,
      message: 'Adresa de email nu este validă',
    },
  },
}
