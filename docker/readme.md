## Run Node application
For Development: docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
For Production: docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build

docker-compose -f docker-compose.yml -f docker-compose-dev.yml down -v
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v

<!-- -----------------------------
| 

docker-compose down -v
docker-compose up --build
docker rm CONTAINER_NAME -fv
docker exec -it CONTAINER_NAME '/bin/sh'
docker run --entrypoint '/bin/sh' -it docker-node
----------------------------- -->
