# Mock 方案 - json-server 实践



#### 1. 项目中安装 json-server

```shell
$ npm i json-server -D
```



#### 2. 根目录下新建 `__json_server_mock__/db.json`

```json
//`__json_server_mock__/db.json`
{
  "users": []
}
```



#### 3. 配置脚本

```json
{
    "scripts": {
        "mock": "json-server __json_server_mock__/db.json --watch"
    }
}
```



#### 4. 启动mock服务

```shell
$ npm run mock

{^_^}/ hi!

  Loading db.json
  Done

  Resources
  http://localhost:3000/users

  Home
  http://localhost:3000
```

