FROM centos:7

# Fix yum repo as above
RUN sed -i 's|mirrorlist=|#mirrorlist=|g' /etc/yum.repos.d/CentOS-Base.repo && \
    sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-Base.repo

# Install epel-release and nginx
RUN yum install -y epel-release && \
    yum install -y nginx && \
    yum clean all

# Remove default nginx index.html
RUN rm -rf /usr/share/nginx/html/*

# Copy frontend files to nginx web root
COPY . /usr/share/nginx/html

# Expose port 80 for nginx
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]

