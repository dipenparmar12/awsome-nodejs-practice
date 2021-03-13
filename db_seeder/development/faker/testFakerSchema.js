const faker = require('faker');

faker.locale = 'en';

module.exports = (i = null) => ({
  name: faker.name.findName(),
});
