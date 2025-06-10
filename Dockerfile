FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine

USER root

RUN mkdir -p /var/cache/nginx/client_temp && \
    chown -R nginx:nginx /var/cache/nginx && \
    chmod -R 755 /var/cache/nginx

COPY nginx.conf /etc/nginx/nginx.conf


COPY --from=build /app/dist /usr/share/nginx/html


EXPOSE 5555

CMD ["nginx", "-g", "daemon off;"]