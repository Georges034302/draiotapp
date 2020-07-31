FROM node:12.2.0-alpine
WORKDIR /client
COPY ./package.json ./client
COPY . .
RUN npm install --silent
RUN npm install react-scripts@3.0.1 -g --silent
CMD ["npm", "start"]

