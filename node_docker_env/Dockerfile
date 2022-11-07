FROM node:16.3.0-alpine

WORKDIR /app

COPY package*.json ./
COPY .env ./


ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
  then npm install; \
  else npm install --only=production; \
  fi

# RUN npm install 
# RUN npm ci ## install dep with only package-lock.josn file 
# RUN npm install -g nodemon

COPY . .

ENV PORT=3001
EXPOSE $PORT

CMD ["npm", "run", "start"]