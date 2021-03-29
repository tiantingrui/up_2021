# Docker



#### Docker 主要特性

+ 文件、资源、网络隔离
+ 变更管理、日志记录
+ 写时复制



#### Linux 上 Docker 安装

**查看操作系统**

```shell
$ lsb_release -a

LSB Version:    :core-4.1-amd64:core-4.1-noarch
Distributor ID: CentOS
Description:    CentOS Linux release 8.2.2004 (Core) 
Release:        8.2.2004
Codename:       Core

```

##### 在CentOS安装docker

> https://docs.docker.com/engine/install/centos/



**启动docker**

```shell
$ systemctl start docker

# 查看 docker status
$ systemctl ststus docker
● docker.service - Docker Application Container Engine
   Loaded: loaded (/usr/lib/systemd/system/docker.service; disabled; vendor preset: disabled)
   Active: active (running) since Sun 2021-03-21 09:26:00 CST; 4min 2s ago
     Docs: https://docs.docker.com
 Main PID: 1560003 (dockerd)
    Tasks: 10
   Memory: 46.7M
   CGroup: /system.slice/docker.service
           └─1560003 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock

3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.535393101+08:00" level=warning msg="Your kernel does not >
3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.535419572+08:00" level=warning msg="Your kernel does not >
3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.535581824+08:00" level=info msg="Loading containers: star>
3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.774089051+08:00" level=info msg="Default bridge (docker0)>
3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.873939613+08:00" level=info msg="Loading containers: done>
3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.921780569+08:00" level=info msg="Docker daemon" commit=36>
3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.921865933+08:00" level=info msg="Daemon has completed ini>
3月 21 09:26:00 terry systemd[1]: Started Docker Application Container Engine.
3月 21 09:26:00 terry dockerd[1560003]: time="2021-03-21T09:26:00.961998126+08:00" level=info msg="API listen on /var/run/d>
3月 21 09:26:23 terry dockerd[1560003]: time="2021-03-21T09:26:23.991144295+08:00" level=info msg="ignoring event" containe>
```



#### 通过运行`hello-world` 映像来验证是否正确安装了Docker Engine

```shell
$ docker run hello-world
```



**查看docker 运行了哪些容器或者镜像**

```shell
$ docker ps

$ docker ps -a
CONTAINER ID   IMAGE         COMMAND    CREATED         STATUS                     PORTS     NAMES
0f96e469470b   hello-world   "/hello"   2 minutes ago   Exited (0) 2 minutes ago             romantic_nobel
2ace4697ae11   hello-world   "/hello"   9 minutes ago   Exited (0) 9 minutes ago             exciting_engelbart

```



#### 配置docker(中国区) 源

```shell
$ vi /etc/docker/daemon.json
```

添加下面的内容

```json
{
  "registry-mirrors": ["https://registry.docker-cn.com"]
}
```

重新启动，更新配置

```shell
$ systemctl daemon-reload
$ systemctl restart docker
```



#### 删除一个容器

```shell
$ docker ps -a
CONTAINER ID   IMAGE         COMMAND    CREATED          STATUS                      PORTS     NAMES
0f96e469470b   hello-world   "/hello"   14 minutes ago   Exited (0) 14 minutes ago             romantic_nobel
2ace4697ae11   hello-world   "/hello"   21 minutes ago   Exited (0) 21 minutes ago             exciting_engelbart

$ docker rm 0f96e469470b
0f96e469470b

$ docker ps -a
CONTAINER ID   IMAGE         COMMAND    CREATED          STATUS                      PORTS     NAMES
2ace4697ae11   hello-world   "/hello"   22 minutes ago   Exited (0) 22 minutes ago             exciting_engelbart

```



**tip:** 这里不能去删除一个运行中的容器，需要先去 stop ， 然后再去 rm





#### 安装mysql

```shell
$  docker run --name ice-mysql -e MYSQL_ROOT_PASSWORD=123456 -d mysql

$ docker ps

# 映射到外部端口 28001
$ docker run --name ice-mysql -e MYSQL_ROOT_PASSWORD=123456 -p 28001:3306 -d mysql
e266d4d6f6b508e955c30b21b3e68b3e5f290a22a22d0ecfa1db99a02c81536a
```

这儿会进行写时复制，会直接进入之前 pull mysql的环节

```shell
# 查看服务
$ docker logs -f ice-mysql
```





## docker-compose



#### 安装docker-compose

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.28.6/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```

**修改权限**

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

**查看docker-compose版本**

```shell
docker-compose --version
```



#### 编写 docker-compose.yml

```yml
# docker-compose.yml
version: '3'
services:
  mysql1:
    image: mysql
    environment:
    - MYSQL_ROOT_PASSWORD=123456
    ports:
    - 28002:3306

  mysql2:
    image: mysql
    environment:
    - MYSQL_ROOT_PASSWORD=123456
    ports:
    - 28003:3306
```

#### 运行 docker-compose

```shell 
$ docker-compose up -d
Creating network "home_default" with the default driver
Creating home_mysql1_1 ... done
Creating home_mysql2_1 ... done

$ docker ps
```





## dockerhub

```shell
# 登录 dockerHub
$ docker login

# 提交一个镜像
$ docker commit xxxxx tiantingrui/mysql:1.0

# 查看
$ docker images

# 推送远程 dockerHub
docker push tiantingrui/mysql:1.0
```

