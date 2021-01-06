# base image
FROM node:latest

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY package.json .

# install dependencies
RUN npm install

# copy all the app files to container
COPY . .

#ENV PORT 4000
# optional run the build
#RUN npm run build

#exposing the port the docker image
EXPOSE 3000

#Run the setup
CMD npm run dev