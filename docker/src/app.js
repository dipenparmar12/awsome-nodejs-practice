import express from 'express';
import bootExpress from './boot-express.js';
import bootMongoose from './boot-mongoose.js';

console.clear()
console.warn('-------------', new Date())
console.log('app.js::[1]')

const port = process.env.PORT || 8000
const app = express()
await bootExpress(app)
await bootMongoose()

app.listen(port, err => {
  if (err) {
    console.log('app.js::[15] err', err)
    return process.exit(1);
  }
  console.log(`Server is running on ${process.env.NODE_ENV || 'UNKNOWN_NODE_ENV'}:${port}`);
});

export default app