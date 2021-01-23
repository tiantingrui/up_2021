1. npm init -y

2. npm i webpack webpack-cli -D

    ```json
        "dev": "webpack --config ./build/webpack.dev.config.js --mode development"

    ```

    npm run dev  生成 release/bundle.js
    
3. npm i webpack-dev-server html-webpack-plugin -D
    - 配置webpack.dev.conf.js  devServer 热启动

    - scripts: 
    注意这里有个 bug: 要使用 webpack serve , not webpack-dev-server https://github.com/webpack/webpack-dev-server
    ```json
        "start": "webpack serve --config ./build/webpack.dev.conf.js"
    ```


4. ES6 语法处理
npm uni babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest -D

error: @babel/core
安装： npm i babel-loader @babel/core @babel/preset-env -D

    ```js
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', // 如果遇到es6 用babel-loader 转化为 es5
            }
        ]
    },
    ```

    创建 .babelrc 文件
    ```json
        {
            "presets": ["es2015", "latest"],
            "plugins": []
        }
    ```