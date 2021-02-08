// "seed":"cross-env NODE_ENV=development SEED_COUNT=2 node ./dev/fake_jobs.js"
const faker = require('faker');
const _ = require('lodash');
const fs = require('fs');

faker.locale = 'en';
const STEP_COUNT = process.env.COUNT || 10;

const fakeDataPromises = _.times(STEP_COUNT, async () => {
  return {
    meta: {
      created_at: faker.date.past(),
    },
    attempts: faker.random.number({ min: 0, max: 10 }),
    recent_attempt_at: faker.random.arrayElement([faker.date.past(), null, null, null]),
    status: faker.random.arrayElement(['pending', 'successful', 'failed']),
    desc: `Desc:${faker.random.word()}`,
    type: faker.random.arrayElement(['mail_schedule', 'notification']),
    schedule_at: faker.random.arrayElement([faker.date.future(), new Date()]),
    payload: {
      to: faker.internet.email(),
      subject: `MailSubject: ${faker.random.words()}`,
      body: `Mail Body: ${faker.random.word()}`,
    },
  };
});

Promise.all(fakeDataPromises).then((fakeData) => {
  // console.log('fakeData::', fakeData);
  const writeStream = fs.createWriteStream('dev/seeder/jobs.json');
  const pathName = writeStream.path;

  // write each value of the array on the file breaking line
  fakeData.forEach((entry) => {
    writeStream.write(`${JSON.stringify(entry)}\n`);
  });

  // the finish event is emitted when all data has been flushed from the stream
  writeStream.on('finish', () => {
    console.log(`wrote all fake data to file ${pathName}`);
  });

  // handle the errors on the write process
  writeStream.on('error', (err) => {
    console.error(`There is an error writing the file ${pathName} => ${err}`);
  });

  // close the stream
  writeStream.end();

  // mongoimport --db email_scheduler --collection jobs --file seeder/jobs.json
});
