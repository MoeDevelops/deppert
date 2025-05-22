FROM node:22-alpine AS builder

WORKDIR /build

COPY ./package*.json .
RUN npm i

COPY . .
RUN npm run build

FROM nginx:1-alpine-slim

COPY --from=builder /build/build /usr/share/nginx/html

RUN echo "server{listen 80;server_name localhost;location / {root /usr/share/nginx/html;index index.html;try_files \$uri \$uri/ \$uri.html;}}" > /etc/nginx/conf.d/default.conf
