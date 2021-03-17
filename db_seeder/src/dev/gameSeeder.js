const fs = require('fs')
const path = require('path')
const connectDB = require('../config/database')
const gameFakerSchema = require('./faker/gameFakerSchema')
const Game = require('../models/Game')

const COUNT = process.argv[2] ? process.argv[2] : process.env.COUNT || 10
const insert = process.argv[3] ? process.argv[3] : process.env.INSERT || false

try {
  connectDB().then(async (_) => {
    const fakeData = {
      games: gameFakerSchema(COUNT),
    }

    Object.entries(fakeData).map(([k, data]) => {
      // console.log(k, data)
      fs.writeFileSync(
        path.join(__dirname, `/json/${k}.json`),
        JSON.stringify(data)
      )
    })

    if (insert) {
      await Game.insertMany(fakeData.games)
    }

    console.log('Seed success')
    process.exit()
  })
} catch (error) {
  console.error(error)
  process.exit(1)
}

// # // "seed":"cross-env NODE_ENV=development COUNT=2 node ./dev/fake_jobs.js"
