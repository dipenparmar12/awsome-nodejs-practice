const Config = {
  MONGO_URL: process.env.MONGO_URL || null,
  
  MONGO_IP: process.env.MONGO_IP || 'mongo_db',
  MONGO_USER: process.env.MONGO_USER || 'root',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'password',
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_DB: process.env.MONGO_DB || null,
}


export default Config