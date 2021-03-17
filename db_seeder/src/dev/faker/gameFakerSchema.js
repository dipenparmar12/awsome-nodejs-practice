const faker = require('faker')
faker.locale = 'en'

module.exports = (length = 1) =>
  Array.from({ length }, () => ({
    name: faker.name.firstName(),
  }))

// Ref: https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
// Src: https://github.com/marak/Faker.js/
