## Run Node application with Nginx's Load-balance (Proxy-server)

## Nginx multiple container (node-multiple) instances config 
`docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --scale <SERVICE_NAME_DEFINED_docker-compose.yml>=2`
`docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --scale <SERVICE_NAME_DEFINED_docker-compose.yml>=2`

`docker-compose -f docker-compose.yml -f docker-compose-dev.yml down -v`
`docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v`

### To Cross verify multiple 
Open: Logs for both node instances in different terminals and hit node_app endpoints multiple times & see node_app logs split equally in both containers. 
`docker logs <node_container_instance_1> -f`
`docker logs <node_container_instance_2> -f`


### To Create fresh image pass '--build' arg 
For Development: docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build

### Connect mongoDB
mongodb://root:password@localhost:27017/

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
