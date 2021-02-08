const userFakerSchema = require('../faker/userFakerSchema');
const testFakerSchema = require('../faker/testFakerSchema');

const factoryMaker = (fakerSchema) => (times = 1) => {
  return Array(Number(times))
    .fill(null)
    .map((_, i) => fakerSchema(i));
};

module.exports.userFactory = factoryMaker(userFakerSchema);
module.exports.testFactory = factoryMaker(testFakerSchema);
