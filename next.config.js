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
