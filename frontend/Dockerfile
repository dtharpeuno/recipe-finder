FROM node:20-alpine
WORKDIR /app

# Copy package.json first
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy app source
COPY . .

CMD ["npm", "run", "dev"]