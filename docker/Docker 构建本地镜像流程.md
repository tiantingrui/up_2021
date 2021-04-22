# Docker 构建本地镜像流程



### 构建一个镜像

```shell
$ docker build ./ -t ice:v1
```

+ **-t**：镜像的名字及标签，通常 name:tag 或者 name 格式；可以在一次构建中为一个镜像设置多个标签。
+ **-f :**指定要使用的Dockerfile路径；



#### 注意：我们创建镜像不会自动生成和启动容器



### 手动生成容器

```shell
$ docker container create -p 9090:80 ice:v1
8705b4090bb3780d7ea44159bc64c36b9199eb7e3fb2f3d33933a9c17544dfb0
```



### 手动启动容器

```shell
$ docker container start 8705b4090bb3780d7ea44159bc64c36b9199eb7e3fb2f3d33933a9c17544dfb0
8705b4090bb3780d7ea44159bc64c36b9199eb7e3fb2f3d33933a9c17544dfb0
```

