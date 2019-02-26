const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseWebpackConfig = require("./webpack.base.config");
const ip = require("ip");
module.exports = merge(baseWebpackConfig, {
  mode: "development",
  output: {
    publicPath: "/"
  },
  devServer: {
    host: ip.address(),
    disableHostCheck: true,
    port: 8080,
    // assetsSubDirectory: "static",
    // assetsPublicPath: "/",
    proxy: {
      "/api": {
        target: "http://www.wuqimh.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/user": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/user": ""
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.tpl.html"
    })
  ]
});
