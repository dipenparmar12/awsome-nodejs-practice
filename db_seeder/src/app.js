const express = require('express')
const faker = require('faker');
const app = express();

app.get('/api/user', function (req, res) {
  res.json({
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    image: faker.image.avatar()
  });
});
module.exports = app;
