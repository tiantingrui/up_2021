const path = require('path');
const {srcPath, distPath} = require('./paths')
const {smart} = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');
const { webpack } = require('webpack');

module.exports = smart(webpackCommonConfig, {
    mode: 'development',
    module: {
        rules: [
            // 直接引入图片
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
    devServer: {
        port: 8080,
        progress: true, // 显示打包的进度条
        contentBase: distPath, // 根目录
        open: true, // 自动打开浏览器
        compress: true, // 自动 gzip压缩
        // 设置代理
        proxy: {
            '/api': 'http://localhost:3000',
            '/api2': {
                target: 'http://localhost:8000',
                pathRewrite: {
                    '/api2': ''
                }
            }
        }
    }
})