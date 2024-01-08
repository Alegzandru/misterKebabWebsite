import DeliveryBlock from '../components/Modal/CartModal/DeliveryBlock/DeliveryBlock'
import TakeawayBlock from '../components/Modal/CartModal/TakeawayBlock/TakeawayBlock'
import {InRestaurantInput, InRestaurantForm} from '../components/Modal/CartModal/InRestaurantBlock/InRestaurantBlock'
import {OutOfRestaurantInput, OutOfRestaurantForm} from '../components/Modal/CartModal/OutOfRestaurantBlock/OutOfRestaurantBlock'

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
      value: /^\s*(?:\+?(\d{2,3}))?[-. (]*(\d{2,3})[-. )]*(\d{3})[-. ]*(\d{3})\s*$/gm,
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
  takeawayLocation: {
    required: 'Câmpul este obligatoriu!',
  },
  masa: {
    required: 'Câmpul este obligatoriu!',
    max: {
      value: 100,
      message: 'Nu avem atâtea mese!',
    },
  },
  payment: {
    required: 'Câmpul este obligatoriu!',
  },
  street: {
    required: 'Câmpul este obligatoriu!',
  },
}

export const ORDER_TYPE = {
  delivery: 'delivery' as 'delivery',
  takeaway: 'takeaway' as 'takeaway',
}

export const ORDER_PAYMENT_METHODS = {
  cash : 'cash' as 'cash',
  card : 'card' as 'card',
}

export const ORDER_PAYMENT_BUTTONS = [
  {
    text: 'Cash',
    type: ORDER_PAYMENT_METHODS.cash,
  },
  // {
  //   text: 'Card',
  //   type: ORDER_PAYMENT_METHODS.card,
  // },
]

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

export const ORDER_FROM = {
  local: 'local' as 'local',
  in_afara_localului : 'in_afara_localului' as 'in_afara_localului',
}

export const CART_FORM_COMPONENTS = {
  delivery: DeliveryBlock,
  takeaway: TakeawayBlock,
}

export const ORDER_FROM_INPUTS = {
  local: InRestaurantInput,
  in_afara_localului: OutOfRestaurantInput,
}

export const ORDER_FROM_FORMS = {
  local: InRestaurantForm,
  in_afara_localului: OutOfRestaurantForm,
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
        name: 'Costiujeni',
        price: 15,
      },
      {
        name: 'Durlesti',
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
        name: 'Ciocana',
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
  street: { name: 'street', placeholder: 'Strada' },
  block: { name: 'block', placeholder: 'Blocul' },
  stair: { name: 'stair', placeholder: 'Scara' },
  floor: { name: 'floor', placeholder: 'Etajul' },
  flat: { name: 'flat', placeholder: 'Apartamentul' },
}
