const faker = require('faker')
const { roles } = require('../../models/User')

faker.locale = 'en'

module.exports = (length = 1) =>
  Array.from({ length }, (_, i) => ({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    age: faker.random.number({ min: 10, max: 70 }),
    role: faker.random.arrayElement(Object.values(roles).map((el) => el)),
    phone: faker.phone.phoneNumber('#####'),
    location: faker.address.county(),
    password: 1234567890,
  }))

// Ref: https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
// Src: https://github.com/marak/Faker.js/
