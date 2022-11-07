import mongoose from 'mongoose';
import Config from './config/config.js';


function bootMongo(){
  const dbUri = Config.MONGO_URL || `mongodb://${Config.MONGO_USER}:${Config.MONGO_PASSWORD}@${Config.MONGO_IP}:${Config.MONGO_PORT}/${Config.MONGO_DB ||''}?retryWrites=true`

  console.log('boot-mongoose.js::[8] dbUri', dbUri)


  mongoose.connect(dbUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    }
  )
    .then(() => {
      console.log('boot-mongoose.js::[16] Mongodb Connected..', )
    })
    .catch(err => {
      console.log('boot-mongoose.js::[19] err::', err)
    });
}


export default async () => {
  return bootMongo()
};