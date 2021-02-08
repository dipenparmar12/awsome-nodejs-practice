## Quick Start

Install the dependencies:

```bash
yarn install
```

Set the environment variables:

```bash
cp .env.example .env

# open .env and modify the environment variables (if needed)
```

### To Generate fake data

1. Make DataFactory file in : `src/development/factory/yourFactoryFile.js`

2. Make Seeder file in : `src/development/seeder/yourSeederFile.js`

3. Create npm script in `pacakage.json` file ` "seed:modelName": "node src/development/seeder/yourSeederFile.js",`

4. Generate data `npm run seed:modelName`

### Example

Detailed example for generate json file which contains fake user's data. output file in `src/development/seedData/users.json`

#### # Command

> `npm run seed:users `

or

To generate 10 users pass count argument as per below example
> `npm run seed:users 10`

#### # package.json

```
{
...
"scripts": {
    ..
    ...
    "seed:users": "cross-env NODE_ENV=development COUNT=3 node src/development/seeder/userSeeder.js",
  },
}
```

#### # UserModel

```javascript
/*
* Path: src/models/userModel.js
* User: _id, name, email, avatar, url{profiles[]}, gender, color, dob, bio, address, status, meta[created_at,created_by]
* */

const mongoose = require('mongoose');

/// Types
const GENDER_MALE = 'male';
const GENDER_FEMALE = 'female';
const STATUS_ACTIVE = 1
const STATUS_INACTIVE = 0

const userTypes = {GENDER: [GENDER_MALE, GENDER_FEMALE], STATUS: [STATUS_ACTIVE, STATUS_INACTIVE]};

const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  avatar: String,
  url: {
    profiles: [{
      website: String,
      url: String,
    }]
  },
  gender: {
    type: String,
    trim: true,
    required: true,
    enum: [...userTypes.GENDER],
    lowercase: true,
  },
  color: String,
  dob: {
    type: Date,
    default: null,
  },
  age: Number,
  //
  bio: String,
  address: mongoose.Schema.Types.Mixed,
  status: {
    type: Number,
    enum: [...userTypes.STATUS],
    default: STATUS_ACTIVE,
  },
  meta: {
    created_at: {type: Date, default: Date.now},
    created_by: mongoose.Schema.Types.Mixed,
  },
});

module.exports.UserTypes = userTypes
module.exports.Job = mongoose.model('USER', userSchema);
```

#### # UserFactory

```javascript
/*
* Path: src/development/factory/userFactory.js
* */

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
// Src: https://github.com/marak/Faker.js/
// Ref: https://rawgit.com/Marak/faker.js/master/examples/browser/index.html
```

#### # UserSeeder

```javascript
/*
* Path: src/development/seeder/userSeeder.js
* */

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
```

### # Output

```
// npm run seed:users 2
// yarn seed:users 2

userSeeder fakeData:: [
  {
    name: 'Faith Prosacco',
    email: 'Hollie7@hotmail.com',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/nepdud/128.jpg',
    url: { profiles: [Array] },
    gender: 'female',
    color: 'azure',
    dob: 2020-03-18T07:30:21.588Z,
    age: 69,
    address: '1398 Schowalter Knolls',
    bio: 'Cupiditate veritatis maiores.',
    status: 0,
    meta: { count: 1, created_at: 2020-05-16T17:18:50.835Z }
  },
  {
    name: 'Ray Pacocha',
    email: 'Robb66@gmail.com',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/alessandroribe/128.jpg',
    url: { profiles: [Array] },
    gender: 'female',
    color: 'mint green',
    dob: 2021-01-23T12:11:10.576Z,
    age: 58,
    address: '1456 Gusikowski Roads',
    bio: 'Quia nihil voluptas aut et porro quam accusantium.',
    status: 1,
    meta: { count: 2, created_at: 2020-02-14T22:08:09.354Z }
  }
]
Output: src/development/seedData/users.json
FakeData, generated total records: 2
Done in 1.17s.
```
