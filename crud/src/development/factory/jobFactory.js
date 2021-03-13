const faker = require('faker');
const { JobStatus } = require('../../models/jobModel');

faker.locale = 'en';
const jobsFactory = (times = 1) => {
  return Array(times)
    .fill(null)
    .map((_, i) => ({
      meta: {
        count: i + 1,
        created_at: faker.date.past(),
      },
      attempts: faker.random.number({ min: 0, max: 10 }),
      recent_attempt_at: faker.random.arrayElement([faker.date.past(), null, null, null]),
      status: faker.random.arrayElement(['pending', 'successful', 'failed']),
      desc: `Desc: ${faker.random.word()}`,
      type: faker.random.arrayElement(...Object.values(JobStatus)),
      schedule_at: faker.random.arrayElement([faker.date.future(), new Date()]),
      payload: {
        to: faker.internet.email(),
        subject: `MailSubject: ${faker.random.words()}`,
        body: `Mail Body: ${faker.random.word()}`,
      },
    }));
};
module.exports = jobsFactory;
