# 项目中关于eslint、prettier、commitlint 相关配置



+ 项目中安装 `prettier`

```shell
$ npm install --save-dev --save-exact prettier
# OR yarn
$ yarn add --dev --exact prettier
```

+ 在根目录创建一个 `.prettierrc.json` 配置文件 

```json
# shell 命令创建
echo {}> .prettierrc.json

// .prettierrc.json
{}
```

+ 在根目录中创建一个 `.prettierignore` 

```
# Ignore artifacts:
build
coverage
```

+ 手动 prettier 代码

```shell
$ npx prettier --write .
# OR 
$ yarn prettier --write .
```



+ 自动格式化代码（在每次提交前） **pre-commit Hook**

```shell
$ npx mrm lint-staged
```



+ eslint 和 prettier 冲突解决

```shell
$ yarn add eslint-config-prettier -D
```



+ commitlint 规范
  + commitlint

```shell
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/{config-conventional,cli}

# Configure commitlint to use conventional config
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js

# package.json
{
"husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.{js,css,md,ts,tsx}": "prettier --write"
  }
}
```

