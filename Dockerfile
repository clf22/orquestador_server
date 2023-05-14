FROM alpine:3.17

#Los valores de ARG se sustituyen por los que vienen del docker-compose.yml
#Pero tambien podrían ser pasados con docker build --build-arg <varname>=<value>
#O incluso dejar que tomen los que se le han asignado directamente

ARG WORKDIR=/var/www
ARG MAXSIZELOG=100M
ARG RETAINLOG=24
ARG MICROSERVICE
ARG ACTIVEBRANCH=master

RUN apk add -U curl git wget vim nodejs nodejs npm openssh-client openssh-keygen rsync

RUN npm install -g pm2
RUN pm2 install pm2-logrotate
RUN pm2 set pm2-logrotate:max_size ${MAXSIZELOG}
RUN pm2 set pm2-logrotate:rotateInterval "0 */3 * * *"
RUN pm2 set pm2-logrotate:compress true
RUN pm2 set pm2-logrotate:retain ${RETAINLOG}

WORKDIR ${WORKDIR}/${MICROSERVICE}

ADD . ${WORKDIR}/${MICROSERVICE}

#RUN npm install

CMD pm2 start --no-daemon ecosystem.config.js --watch -- --color
