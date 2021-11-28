const express = require('express');
// const faker = require('faker');

const app = express();

console.clear();

// const { testFactory } = require('./development/factory');
// const { Test } = require('./models');
// Test.insertMany(testFactory(100));
// Test.find()
//   .limit(20)
//   .then((r) => {
//     console.log('app r::', r);
//   });

// app.get('/api/user', function (req, res) {
//   res.json({
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     address: faker.address.streetAddress(),
//     bio: faker.lorem.sentence(),
//     image: faker.image.avatar(),
//   });
// });

module.exports = app;
