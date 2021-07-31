import DeliveryBlock from '../components/Modal/CartModal/DeliveryBlock/DeliveryBlock'
import TakeawayBlock from '../components/Modal/CartModal/TakeawayBlock/TakeawayBlock'

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

export const ORDER_TYPE = {
  delivery: 'delivery' as 'delivery',
  takeaway: 'takeaway' as 'takeaway',
}

export const ORDER_TYPE_BUTTONS = [
  {
    text: 'Livrare prin curier',
    type: ORDER_TYPE.delivery,
  },
  {
    text: 'Ridicare din local',
    type: ORDER_TYPE.takeaway,
  },
]

export const CART_FORM_COMPONENTS = {
  delivery: DeliveryBlock,
  takeaway: TakeawayBlock,
}

export const DROPDOWN_DATA = {
  delivery: {
    label: 'Unde livram',
    items: [
      {
        name: 'Chisinau',
        price: 10,
      },
      {
        name: 'Aeroport',
        price: 15,
      },
      {
        name: 'Bacioi',
        price: 15,
      },
      {
        name: 'Colonita',
        price: 15,
      },
      {
        name: 'Costiujeni',
        price: 15,
      },
      {
        name: 'Durlesti',
        price: 15,
      },
      {
        name: 'Ialoveni',
        price: 15,
      },
      {
        name: 'Schinoasa',
        price: 15,
      },
      {
        name: 'Stauceni',
        price: 15,
      },
      {
        name: 'Tohatin',
        price: 15,
      },
    ],
  },
  takeaway: {
    label: 'Alegeți de unde ridicați comanda',
    items: [
      {
        name: 'Malina Mică',
      },
      {
        name: 'Telecentru',
      },
      {
        name: 'Râşcani',
      },
      {
        name: 'Botanica',
      },
    ],
  },
}

export const LOCATIONS_INPUTS = {
  street: { name: 'street', placeholder: 'street' },
  block: { name: 'block', placeholder: 'block' },
  stair: { name: 'stair', placeholder: 'stair' },
  floor: { name: 'floor', placeholder: 'floor' },
  flat: { name: 'flat', placeholder: 'flat' },
}
