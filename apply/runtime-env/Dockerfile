FROM nginx:alpine


RUN rm -rf /usr/share/nginx/html/* && \
    rm -rf /etc/nginx/conf.d/*


COPY ./conf /etc/nginx/conf.d/

WORKDIR /usr/share/nginx/html

COPY ./ ./
COPY ./public ./

RUN apk update && \
    apk add --no-cache tzdata bash && \
    chmod +x env.sh && \
    rm -rf ./public

ENV TZ=Asia/Bangkok

EXPOSE 80

CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]