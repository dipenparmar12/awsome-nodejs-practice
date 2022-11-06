FROM node:16.3.0-alpine

WORKDIR /app

COPY package*.json ./
COPY .env ./

RUN npm install 
# RUN npm ci
# RUN npm install -g nodemon

COPY . .

ENV PORT=3001
EXPOSE $PORT

CMD ["npm", "run", "start"]