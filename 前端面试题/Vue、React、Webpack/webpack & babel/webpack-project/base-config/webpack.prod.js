const {smart} = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');
const { webpack } = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')



module.exports = smart(webpackCommonConfig, {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin(), // 会默认清空 output.path 文件夹
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        }) 
    ]
})