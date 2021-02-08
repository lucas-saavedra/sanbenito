# Stage 1 - build
FROM node:14.15.1-alpine  AS builder
WORKDIR /app
COPY package*.json ./
RUN  npm install
COPY . .
RUN npm run nuxtbuild

# Stage 2 - production
FROM node:14.15.1-alpine  AS final
WORKDIR /app
ADD package.json .
ADD nuxt.config.js .
COPY --from=builder /app/.nuxt ./.nuxt
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/static ./static
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
EXPOSE 3000
CMD ["npm", "run", "nuxtstart"]

# docker build -t sanbenito .
# docker run --name prueba -it -p 8080:3000 sanbenito