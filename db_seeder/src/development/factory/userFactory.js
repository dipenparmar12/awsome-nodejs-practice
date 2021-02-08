const faker = require('faker');
const {UserTypes} = require("../../models/userModel");
faker.locale = 'en';

const userFactory = (times = 1) => {
  times *= 1 // converted to number
  return Array(times)
      .fill(null)
      .map((_, i) => ({
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        url: {
          profiles: Array(faker.random.number({min: 0, max: 3})).fill(null).map((_, i) => ({
            website: faker.internet.domainName(),
            url: faker.internet.url()
          }))
        },
        gender: faker.random.arrayElement(UserTypes.GENDER),
        color: faker.commerce.color(),
        dob: faker.date.past(),
        age: faker.random.number({min: 10, max: 70}),
        address: faker.address.streetAddress(),
        bio: faker.lorem.sentence(),
        // bio: `Bio: ${faker.random.words()}` ,
        status: faker.random.arrayElement(UserTypes.STATUS),
        meta: {
          count: i + 1,
          created_at: faker.date.past(),
        },
      }));
};

module.exports = userFactory;


// Ref: https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
// Src: https://github.com/marak/Faker.js/
