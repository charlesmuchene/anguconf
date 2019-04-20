# base image
FROM node:11.14.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add node module bin to path
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g nodemon

# add app
COPY . /usr/src/app

# start app
CMD nodemon