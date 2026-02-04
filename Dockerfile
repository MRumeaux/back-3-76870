FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN ls -al /app && ls -al /app/src
EXPOSE 8080
CMD ["npm", "start"]