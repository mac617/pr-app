FROM nginx
MAINTAINER macheng <genggaogengfugengshuai@gmail.com>
COPY dist/  /usr/share/nginx/html/
ADD nginx.conf  /etc/nginx/nginx.conf
