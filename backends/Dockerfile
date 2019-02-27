FROM node:10.15.1-alpine

RUN mkdir -p /srv/app/eficode19-backend
WORKDIR /srv/app/eficode19-backend

COPY package.json /srv/app/eficode19-backend
COPY package-lock.json /srv/app/eficode19-backend

RUN npm install

COPY . /srv/app/eficode19-backend

CMD ["npm", "watch"]