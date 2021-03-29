# 使用docker 安装本地Mock 服务

#### 本地安装接口测试工具

+ Mock 数据开发流程介绍
+ DOClever 安装 -- docker 安装介绍
+ DOClever中Mock数据开发使用简介



#### Mock 数据开发流程

1. 前端定义接口
2. 完成静态页面
3. 完成UI交互
4. 对接真实接口
5. 页面/逻辑测试
6. 线上部署



#### DOClever

> https://github.com/sx1989827/DOClever/tree/master/docker

使用 docker-compose 安装 DOClever 

```shell 
cd /home
mkdir doclever
cd doclever
vi docker-compose.yml

​```
# docker-compose.yml 文件编写
version: "2"
services:
  DOClever:
    image: lw96/doclever
    restart: always
    container_name: "DOClever"
    ports:
    - 20080:10000
    volumes:
    - /srv/doclever/file:/root/DOClever/data/file
    - /srv/doclever/img:/root/DOClever/data/img
    - /srv/doclever/tmp:/root/DOClever/data/tmp
    environment:
    - DB_HOST=mongodb://mongo:27017/DOClever
    - PORT=10000
    links:
    - mongo:mongo

  mongo:
    image: mongo:latest
    restart: always
    container_name: "mongodb"
    volumes:
    - /srv/doclever/db:/data/db
​```

# 运行创建好的 docker-compose.yml
docker-compose up -d

# 查看 doclever
docker ps | grep doclever

# 查看防火墙状态
firewall-cmd --state

firewall-cmd --list-all

# 放行20080端口
firewall-cmd --add-port=20080/tcp --zone=public --permanent
firewall-cmd --reload
```

```shell
# centos7 1.查看firewalld状态:
$ systemctl status firewalld
#如果是dead状态，即防火墙未开启。 2.开启防火墙
$ systemctl start firewal.
```





#### 打开网址，输入刚才配好的 DOClever

> http://39.107.234.202:20080/html/web/controller/index/index.html



总后台

DOClever