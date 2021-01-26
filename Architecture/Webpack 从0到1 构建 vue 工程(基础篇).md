# Webpack 从0到1 构建 vue 工程(基础篇)

**前言**

> 此文，适合爱折腾，搞创新，想把关于项目的所有配置都搞的一清二楚的同学。
>
> 这篇文章难度适合入门配置，肯定能搭起一个项目的基本配置。之后可供大家DIY！

这篇文章回顾了webpack 、babel前端工程化的相关内容。适合有一定基础的同学食用。

当然如果是vue-cli 工程师可以直接关闭文章了。



### 初始化

+ 在一个空的文件夹下面初始化，生成package.json文件

  ```shell
  npm init -y
  ```

+ 创建public 文件夹，src文件夹，config文件夹

  + public 创建 index.html 存放模板文件

  ```html
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>webpack-vue-project</title>
  </head>
  
  <body>
      <div id='app'></div> 
  </body>
  
  </html>
  ```

  + src 创建 index.js 定义入口
  + config  文件夹存放webpack 相关配置，创建 webpack.base.js、webpack.dev.js、webpack.prod.js 三个文件，分别代表共有的webpack基础配置，开发环境中的特有配置，生产环境下的特有配置

  

### 安装依赖

+ 首先安装 webpack、webpack-cli、webpack-dev-server、webpack-merge

  ```sh
  yarn add webpack webpack-cli webpack-dev-server webpack-merge -D
  ```

+ 安装 vue-loader vue-template-compiler 解析 `.vue` 文件

  ```sh
  yarn add vue-loader vue-template-compiler -D
  ```

+ ES6 语法 转换为ES5  babel-loader @bable/core @babel/preset-env

  ```sh
  yarn add babel-loader @babel/core @babel/preset-env -D
  ```

+ 安装必要的 plugin

  + html-webpack-plugin（用于生成打包创建的 html 文件，并将打包生成的 js文件自动引入 该 html文件中）
  + clean-webpack-plugin （用于生产环境下每次build 删除之前的 dist文件夹）

  ```sh
  yarn add html-webpack-plugin clean-webpack-plugin -D
  ```

+ 安装必要的loader

  + url-loader  file-loader - 处理图片
  + style-loader css-loader postcss-loader autoprefixer - 处理 css

  ```sh
  yarn add style-loader css-loader postcss-loader autoprefixer  -D
  ```

+ 安装 vue

  ```sh
  yarn add vue
  ```



### 文件目录结构

├── config
│   ├── webpack.base.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── package.json
├── postcss.config.js
├── public
│   └── index.html
├── src
│   ├── App.vue
│   ├── img
│   │   ├── 1.png
│   │   ├── 2.jpeg
│   │   └── logo.jpg
│   └── index.js
└── yarn.lock



### 编写配置

+ Webpack  相关配置

```js
// config/webpack.base.js

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    resolve: { 
        extensions: ['.js', '.json', '.vue'], // 自动解析确定的拓展名
        // 路径别名配置
        alias: { 
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, '../src')
        } 
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            }
        ]
    },
    plugins: [
        // 这个插件使 .vue 中的各类语言块匹配相应的规则
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../public/index.html'), // 打包出去的 html 文件的模板
            filename: 'index.html'
        }),
    ],
    
}


// config/wenpack.dev.js

const {merge} = require('webpack-merge')
const baseConfig = require('./webpack.base')

const devConfig = {
    mode: 'development',
    module: {
        rules: [
            // 直接引入图片 url
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        port: 9000,
        open: true,
        progress: true
    }
}

module.exports = merge(baseConfig, devConfig)


// config/webpack.prod.js
const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const prodConfig = {
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
      rules: [
          // 图片-考虑 base64 编码
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 5 * 1024,
                    outputPath: '/img1/'
                }
            }
          }
      ]
  },
  plugins: [
      new CleanWebpackPlugin()
    ],
};

module.exports = merge(baseConfig, prodConfig);


```

+ 入口文件

```js
// ./src/index.js (入口文件)
import Vue from 'vue'
import App from './App.vue'


const app = new Vue({
    el: '#app',
    render: h => h(App)
})
```

+ package.json 编写脚本

```json
"scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack --config ./config/webpack.prod.js",
        "dev": "webpack serve --config ./config/webpack.dev.js"
    }
```

