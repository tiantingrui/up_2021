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
