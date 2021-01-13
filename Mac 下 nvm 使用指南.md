# Mac 下 nvm 使用指南

> nvm： node 版本管理工具，简直不要太好用



在日常开发中，可能我们好几个项目依赖的NodeJs版本是不同的，如果没有一个合适的管理工具，有时候真的要疯掉，现在不妨来看看nvm.





## 安装 nvm

> github：https://github.com/nvm-sh/nvm#installing-and-updating

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
# OR
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

**配置相关路径**

(`~/.bash_profile`, `~/.zshrc`, `~/.profile`, or `~/.bashrc`).

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```



安装完之后输入 `nvm`

```
Node Version Manager (v0.35.3)

Note: <version> refers to any version-like string nvm understands. This includes:
  - full or partial version numbers, starting with an optional "v" (0.10, v0.1.2, v1)
  - default (built-in) aliases: node, stable, unstable, iojs, system
  - custom aliases you define with `nvm alias foo`

 Any options that produce colorized output should respect the `--no-colors` option.
 ……
```

出现上述类似信息，安装成功。





## nvm 常用命令

##### 查看可以安装的node版本(官方所有能用版本)

```shell
nvm ls-remote
```



##### 查看所有可以安装的LTS版本（长期支持版）

```shell
nvm ls-remote --lts
```



##### 安装指定版本 node

```shell
nvm install v14.15.4
```



##### 查看已安装的node

```shell
nvm ls
```



##### 切换node 版本

```shell
nvm use v 12.18.4
```



##### 设定默认的node 版本

```shell
nvm alias default v12.18.4
```



##### 查看当前node版本

```shell
nvm current
```



##### 删除指定版本的node

```shell 
nvm uninstall v12.18.4
```

