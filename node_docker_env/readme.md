## Run Node application


### Some useful commands  
For Development: docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
For Production: docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build

docker-compose -f docker-compose.yml -f docker-compose-dev.yml down -v
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v

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


<!-- -----------------------------
| 
docker-compose down -v
docker-compose up --build
docker rm CONTAINER_NAME -fv
docker exec -it CONTAINER_NAME '/bin/sh'
docker run --entrypoint '/bin/sh' -it docker-node

docker rm CONTAINER_NAME -f
docker rm CONTAINER_NAME -fv # -f:removes volume
docker compose down

# --build create's new image  (if we modify DockerFile to reflect changes in containers)
docker compose up --build


# List all images 
docker images -a

# terminal  
docker exec -it CONTAINER_NAME '/bin/sh'
docker exec -it CONTAINER_NAME bash
docker run --entrypoint '/bin/sh' -it IMAGE_NAME


# Delete all stopped containers
docker rm $(docker ps -a -q) 

# Delete multiple images
docker rmi IMAGE_NAME IMAGE_NAME2 

# Delete all images at once
docker rmi $(docker images -q)

# Purging All Unused or Dangling Images, Containers, Volumes, and Networks
docker system prune

# Remove all exited containers
  # List
  docker ps -a -f status=exited 
  # Remove
  docker rm $(docker ps -a -f status=exited -q) 


## Remove not runing volumes  (start container) and fire command 
docker volume prune
  

## multiple env
docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build
docker-compose -f docker-compose.yml -f docker-compose-prod.yml up --build

docker-compose -f docker-compose.yml -f docker-compose-dev.yml down -v
docker-compose -f docker-compose.yml -f docker-compose-prod.yml down -v
-----------------------------
| 
-----------------------------

docker-compose down -v
docker rm node -fv
docker compose up --build 
docker exec -it node '/bin/sh'
docker run --entrypoint '/bin/sh' -it docker-node

----------------------------- -->
