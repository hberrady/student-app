FROM centos:7

# Fix yum repo for CentOS 7 to avoid mirror issues (add these lines)
RUN sed -i 's|mirrorlist=|#mirrorlist=|g' /etc/yum.repos.d/CentOS-Base.repo && \
    sed -i 's|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g' /etc/yum.repos.d/CentOS-Base.repo

# Install Python 3 and pip
RUN yum install -y epel-release && \
    yum install -y python36 python36-pip && \
    yum clean all

# Copy backend app files
COPY . /app
WORKDIR /app

# Install Python dependencies
RUN pip3 install --no-cache-dir -r requirements.txt

# Expose port 5000 for Flask
EXPOSE 5000

# Start the Flask app
CMD ["python3", "app.py"]

