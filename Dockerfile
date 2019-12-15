FROM node:12.1.0


WORKDIR /home/node/app

RUN  apt-get update  && apt-get install -y build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev
COPY . /home/node/app/

RUN npm install


EXPOSE 2000

CMD [ "node", "app.js" ]
