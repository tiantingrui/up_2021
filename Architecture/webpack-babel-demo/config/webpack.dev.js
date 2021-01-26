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