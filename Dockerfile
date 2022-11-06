FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env .

RUN npm install 
# RUN npm ci
# RUN npm install -g nodemon

COPY . .

# EXPOSE 4001

CMD ["npm", "run", "dev"]