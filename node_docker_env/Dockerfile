FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY .env .

RUN npm install 
# RUN npm ci
# RUN npm install -g nodemon

COPY . .

EXPOSE 3001

CMD ["npm", "run", "dev"]