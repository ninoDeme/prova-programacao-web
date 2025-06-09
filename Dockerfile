FROM node:20-alpine AS build-front
COPY ./front/ /app/front
WORKDIR /app/front
RUN npm ci
RUN npm run build
COPY ./front/package.json /app/front/build/

FROM node:20-alpine AS build-env
COPY ./server/ /app/server/
WORKDIR /app/server/
RUN npm ci
RUN npm run build

FROM node:20-alpine
COPY ./server/package.json ./server/package-lock.json /app/
COPY --from=build-env /app/server/build /app/build
COPY --from=build-env /app/server/node_modules /app/node_modules
COPY --from=build-env /app/server/package.json /app/package.json
COPY --from=build-front /app/front/build/client /app/public
WORKDIR /app
CMD ["npm", "run", "start"]
