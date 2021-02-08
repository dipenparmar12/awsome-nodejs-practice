// "seed":"cross-env NODE_ENV=development SEED_COUNT=2 node ./dev/fake_jobs.js"
const userFactory = require('../factory/userFactory');
const storeData = require('../utils/storeData');

const COUNT = process.argv[2] ? process.argv[2] : process.env.COUNT || 10
const outputFile = 'src/development/seedData/users.json'

const fakeDataPromises = userFactory(COUNT);

Promise.all(fakeDataPromises).then((fakeData) => {
  storeData(fakeData, outputFile);

  if (COUNT * 1 < 15) console.log("userSeeder fakeData::", fakeData)
  console.log("Output:", outputFile)
  console.log("FakeData, generated total records:", fakeData.length)

}).catch(err => {
  console.log("Error::", err)
});
