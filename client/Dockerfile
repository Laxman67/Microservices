FROM node:alpine


WORKDIR /app


# Update npm to the latest version
RUN npm install -g npm@latest

# Copy package.json and install production dependencies
COPY package.json ./
RUN npm set registry https://registry.npmjs.org/
RUN npm install --omit=dev

# Copy application files
COPY ./ ./


# Set the default command to start the application

CMD [ "npm", "run","dev" ]
