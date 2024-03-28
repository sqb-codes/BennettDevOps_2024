# FROM baseImage
FROM node:18

# set the working directory in docker
# by default docker has a directory /app
WORKDIR /app

# COPY all files from source and paste in destination
# COPY . .

# COPY package.json and paste inside /app directory
COPY package.json /app

# it will install all dependencies
# RUN npm install


ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then npm install; \
    else npm install --only=production; \
    fi


# now copy all remaining files inside /app directory
COPY . /app

# EXPOSE port number on which our application will run
# EXPOSE 3000

# To pass PORT number through environment variable
ENV PORT 3000
EXPOSE $PORT

# CMD [ "executable" ] - run the container
CMD ["node", "app.js"]

# for dev environment
# CMD ["npm", "run", "dev"]