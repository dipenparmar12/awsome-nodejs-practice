// "seed":"cross-env NODE_ENV=development SEED_COUNT=2 node ./dev/fake_jobs.js"
const jobFactory = require('./factory/jobFactory');
const storeData = require('./utils/storeData');

const STEP_COUNT = process.env.COUNT || 10;
const fakeDataPromises = jobFactory(STEP_COUNT);

Promise.all(fakeDataPromises).then((fakeData) => {
  storeData(fakeData, 'src/development/seederFake/jobs.json');
  //   // mongoimport --db email_scheduler --collection jobs --file seeder/jobs.json
});
