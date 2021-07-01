const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

console.log(path.join(__dirname, 'package/src/index.js'));

module.exports = {
  entry: {
    eva: path.join(__dirname, 'package/src/index.js'),
    'eva.min': path.join(__dirname, 'package/src/index.js'),
  },
  output: {
    path: path.join(__dirname, 'package-build'),
    library: 'eva',
    libraryTarget: 'umd',
    filename: '[name].js',
    umdNamedDefine: true,
    globalObject: 'typeof self !== "undefined" ? self : this',
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /\.min\.js$/,
        parallel: true,
        terserOptions: {
          sourceMap: true
        }
      })
    ]
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "isomorphic-style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
