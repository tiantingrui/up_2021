const path = require('path')
const {srcPath, distPath} = require('./paths')


module.exports = {
    entry: path.join(srcPath, 'index'),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: ['babel-loader'], // babel-loader 将 es6 变为 es5
                include: srcPath, 
                exclude: /node_modules/
            }
        ]
}