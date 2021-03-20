# 发布一个 npm 包



#### Step1 : 创建一个空的目录

```shell
$ mkdir sourceMoudle && cd $_
```



#### step2：npm init 初始化一个仓库，根据提示填写相关信息

```shell
$ npm init 
```



#### step3：编写一个入口文件

```js
// index.js
function consoleFn(args) {
    console.log('您输入的内容是：',args)
}

module.exports = consoleFn
```



#### step4：查看npm 源配置，并更改为要去发布的源

```shell
$ npm config list

; cli configs
metrics-registry = "http://r.cnpmjs.org/"
scope = ""
user-agent = "npm/6.14.6 node/v12.18.4 darwin x64"

; userconfig /Users/terry/.npmrc
home = "http://cnpmjs.org"
registry = "http://r.cnpmjs.org/"

; node bin location = /Users/terry/.nvm/versions/node/v12.18.4/bin/node
; cwd = /Users/terry/git-project/up_2021/sourceMoudle
; HOME = /Users/terry
; "npm config ls -l" to show all defaults.

# 这里我们更改 npm 淘宝源为 https://registry.npmjs.org/（官方）
$ npm set registry https://registry.npmjs.org/
```



#### step5: 添加一个本地npm 用户

**tips:** 注意先去注册一个 npm 账户 

```shell
$ npm adduser
```

这里根据提示填写 npm 注册好的用户名、密码、邮箱



**查看当前npm 登录者**

```shell
$ npm whoami
```



#### step6：发包

```shell
$ npm publish
```

