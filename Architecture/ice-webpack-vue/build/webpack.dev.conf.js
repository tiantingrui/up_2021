const webpack = require('webpack')
const {distPath} = require('./paths')
const {merge} = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf')

module.exports = merge(webpackBaseConf, {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            // 直接引入图片 url
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            ENV: JSON.stringify('development')
        })
    ],
    // webpack-dev-server 不仅可以将打包生成的 bundle.js 自动注入 html模板中，还可以热更新
    devServer: { 
        contentBase: distPath, // 根目录
        open: true,
        port: 9000,
        progress: true, // 显示打包的进度条
        compress: true, // 启动 gzip 压缩

        // 设置代理
        proxy: {
            '/nonce': {
                target: 'http://39.105.167.66:8010/v1/nonce-system',
                // target: 'http://192.168.31.207:8010/v1/nonce-system',
                changeOrigin: true,
                pathRewrite: {
                    '^/nonce': ''
                }
              },
        }
    }
})