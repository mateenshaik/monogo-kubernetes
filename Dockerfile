FROM node:16

WORKDIR /usr/scr/app

COPY scripts/* ./

CMD [ "node" , "feeder.js" ]
