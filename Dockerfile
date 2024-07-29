FROM node:alpine as builder 
# the above will fail for AWS, they don't support named builder
# instead FROM node:alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=builder /app/build  /usr/share/nginx/html
# COPY --from=0 /app/build /usr/share/nginx/html