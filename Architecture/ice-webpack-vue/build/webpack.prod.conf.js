const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')
const {merge} = require('webpack-merge')
const webpackBaseConf = require('./webpack.base.conf');
const { distPath } = require('./paths');

module.exports = merge(webpackBaseConf, {
    mode: 'production',
    output: {
        // filename: 'bundle.[contentHash.8].js',
        filename: '[name].[contentHash.8].js', // name 即多入口时 entry 的 key
        path: distPath
    },

    plugins: [
        // 会默认清空 output.path 文件夹
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            ENV: JSON.stringify('production')
        })
    ]
})