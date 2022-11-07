import mongoose from 'mongoose';
import Config from './config/config.js';

const dbUri = Config.MONGO_URL || `mongodb://${Config.MONGO_USER}:${Config.MONGO_PASSWORD}@${Config.MONGO_IP}:${Config.MONGO_PORT}/${Config.MONGO_DB ||''}?retryWrites=true`

function bootMongo(){
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

export async function getMongoDatabases() {
   return new Promise((resolve,reject) => {
    const Admin = mongoose.mongo.Admin;
    /// create a connection to the DB    
    const connection = mongoose.createConnection(dbUri);
    connection.on('open', function() {
      // connection established
      new Admin(connection.db).listDatabases(function(err, result) {
          console.log('listDatabases succeeded');
          // database list stored in result.databases
          const allDatabases = result.databases;
          console.log('boot-mongoose.js::[43] allDatabases', allDatabases)
          return resolve(allDatabases)
      });
    }); 
  })
}