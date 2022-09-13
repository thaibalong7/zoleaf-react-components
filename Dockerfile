FROM node:14-alpine as build-stage

ARG APP_ENV=testing

WORKDIR /usr
COPY . .
RUN npm install
RUN npm rebuild node-sass

# RUN npm run build:$APP_ENV
RUN npm run build

FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /usr/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]