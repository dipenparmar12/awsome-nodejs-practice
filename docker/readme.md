## Run Node application


### Some useful commands  
For Development: docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
For Production: docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build

docker-compose -f docker-compose.yml -f docker-compose-dev.yml down -v
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v

### Connect mongoDB shell ::TODO::
docker run -it mongo:6.0.2-focal mongosh "connection_url"
docker run -it mongo:6.0.2-focal mongosh "mongo://root:password@localhost:27017/" # MongoNetworkError: getaddrinfo ENOTFOUND mongo
docker run -it mongo:6.0.2-focal mongosh "mongodb+srv://root:password@mongo_db" # Error: querySrv ENOTFOUND _mongodb._tcp.mongo_db
docker run -it mongo:6.0.2-focal mongosh "mongodb://root:password@mongo_db:27017" # MongoNetworkError: getaddrinfo ENOTFOUND mongo_db
docker run -it mongo:6.0.2-focal mongosh "mongodb://root:password@localhost:27017" # MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
docker run -it mongo:6.0.2-focal mongosh "mongodb://root:password@localhost:27017/" #

## MongoDB data export/import docker commands 
https://www.mongodb.com/compatibility/docker

<!-- -----------------------------
| 
docker-compose down -v
docker-compose up --build
docker rm CONTAINER_NAME -fv
docker exec -it CONTAINER_NAME '/bin/sh'
docker run --entrypoint '/bin/sh' -it docker-node

mongodb+srv://root:password@mongo_db

mongodb+srv://root:password@mongo_db
mongodb://root:password@mongo_db:27017/
mongodb://AzureDiamond:hunter2@mongodb
----------------------------- -->
