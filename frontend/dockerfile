FROM node:10.15.1-alpine

RUN mkdir -p /srv/app/eficode19-frontend
WORKDIR /srv/app/eficode19-frontend

COPY package.json /srv/app/eficode19-frontend
COPY package-lock.json /srv/app/eficode19-frontend

RUN npm install

COPY . /srv/app/eficode19-frontend

CMD ["npm", "start"]