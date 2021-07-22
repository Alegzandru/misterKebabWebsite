// const { i18n } = require('./next-i18next.config')
// import {i18n} from './next-i18next.config'

module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'src/components'],
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'localhost',
    ],
  },
  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'ru'],
  },
}
