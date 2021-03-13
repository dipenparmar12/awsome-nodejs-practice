const storeData = require('../utils/storeData');
const { TestFactory } = require('../factory');
const { UserFactory } = require('../factory');

const userSeeder = async (count) => {
  const filename = `users.json`;
  const dataFile = `development/seedData/${filename}`;
  count && count.constructor === Number && storeData(UserFactory(count), dataFile);
};

const testSeeder = async (count) => {
  const filename = `tests.json`;
  const dataFile = `development/seedData/${filename}`;
  count && count.constructor === Number && storeData(TestFactory(count), dataFile);
};

module.exports.testSeeder = testSeeder;
module.exports.userSeeder = userSeeder;
