FROM node:16-alpine 
EXPOSE 19006
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm","run" ]
CMD [ "web" ]
