let { MongoClient } = require('mongodb');

let url = process.env.MONGODB_URL || 'mongodb://localhost:27017/database';

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  /// TODO
  /// Remove all collections ( truncate database )
  // db.getCollectionNames().forEach((collection) => {
  //   console.log('removeCollections c::', collection);
  //   db[collection].drop();
  // });
  db.close();
});

// db.getCollectionNames().forEach((c) => db[c].drop());
