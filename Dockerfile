FROM node:lts-alpine

ENV HOST=0.0.0.0
ENV PORT=80
ENV APP_KEY=98HOI90nbijbfasdp98(HNFDfdsapf0}

WORKDIR /app

RUN npm install -g @adonisjs/cli

COPY package*.json ./

# this is noisy as heck so redirecting to somewhere that doesn't mind...
RUN npm install --silent --no-audit --no-fund > /dev/null

COPY . .

RUN npm run build

RUN adonis migration:run \
  && rm -rf database/migrations

EXPOSE 80/tcp

CMD ["npm", "start"]
