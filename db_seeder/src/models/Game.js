const mongoose = require('mongoose')
const { toJSON, paginate } = require('./plugins')

const gameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    results: [
      {
        winner: mongoose.Schema.Types.Mixed,
        scores: [
          {
            user: mongoose.Schema.Types.Mixed,
            points: Number,
          },
        ],
      },
    ],
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //     transform: function (doc, ret) {
  //     },
  //   },
  // },
  {
    timestamps: true,
  }
)

// add plugin that converts mongoose to json
gameSchema.plugin(paginate)
gameSchema.plugin(toJSON)

const Game = mongoose.model('Game', gameSchema)
module.exports = Game

// const test = {
//   game: 1,
//   winner: '2222',
//   result: [{ userId: 1123, Game: 100 },{ userId: 2222, Game: 200 }],
// }
// module.Games = test
