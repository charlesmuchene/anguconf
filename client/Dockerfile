# base image
FROM node:11.14.0

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# add node module bin to path
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.3.8

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0