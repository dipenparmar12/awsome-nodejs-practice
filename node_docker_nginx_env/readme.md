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

`docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build`

Create new volume for container (ex. if we added new npm package, like **npm add something**) 
`docker-compose -f docker-compose.yml -f docker-compose-dev.yml up --build -V`

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
