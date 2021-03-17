const catchAsync = require('../util/catchAsync')
const User = require('../models/User')
const Game = require('../models/Game')

const userSeeder = async () => {
  await User.deleteMany()
  await User.insertMany([
    {
      name: 'Name UK',
      password: 12345,
      phone: '12345',
      role: 'player',
      age: 25,
      email: 'player12345@gmail.com',
      location: 'UK',
    },
    {
      name: 'player USA',
      password: 123456,
      phone: '123456',
      role: 'player',
      age: 25,
      email: 'player123456@gmail.com',
      location: 'USA',
    },
    {
      name: 'player India',
      password: 1234567,
      phone: '1234567',
      role: 'player',
      age: 40,
      email: 'player1234567@gmail.com',
      location: 'India',
    },
    {
      name: 'Name Admin',
      password: 123456789,
      phone: '123456789',
      role: 'admin',
      age: 25,
      email: 'admin@gmail.com',
      location: 'kutch',
    }
  ])
}
const gameSeeder = async () => {
  await Game.deleteMany()
  const games = await Game.insertMany([
    { name: 'Football' },
    { name: 'Tennis' }
    // { name: 'Cricket' }
  ])
  console.log('devController.js::games', games)
}

const scoreSeeder = async () => {
  // TODO
}

module.exports.seed = catchAsync(async (req, res) => {
  console.log(req.query?.data)

  switch (req.query?.data) {
    case 'user':
      userSeeder()
    case 'game':
      gameSeeder()
    case 'score':
      scoreSeeder()
    case 'all':
      userSeeder()
      gameSeeder()
      scoreSeeder()
  }

  return res.json({
    message: 'Seed Success.',
    success: true,
    data: {
      user: await User.find(),
      games: await Game.find(),
    },
  })
})

module.exports.truncate = catchAsync(async (req, res) => {
  await User.deleteMany()
  await Game.deleteMany()
  const users = await User.find()
  const games = await Game.find()
  return res.json({
    message: 'Removed all data.',
    success: true,
    data: {
      users,
      games,
    },
  })
})
