// "seed":"cross-env NODE_ENV=development SEED_COUNT=2 node ./dev/fake_jobs.js"
const { UserFactory } = require('../factory');
const storeData = require('../utils/storeData');

const outputFile = 'development/seedData/users.json'; // json file
const COUNT = process.argv[2] ? process.argv[2] : process.env.COUNT || 10;
//
const fakeDataPromises = UserFactory(COUNT); // array of data

Promise.all(fakeDataPromises)
  .then((fakeData) => {
    storeData(fakeData, outputFile); // create or overwrite json file
    if (COUNT * 1 < 15) console.log('userSeeder fakeData::', fakeData);
    console.log('FakeData, generated records:', fakeData.length, ', \noutput:', outputFile);
  })
  .catch((err) => {
    console.log('Error::', err);
  });
