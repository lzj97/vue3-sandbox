const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry:path.resolve(__dirname, 'src/index.js'),
  output:{
    path:path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename:'index.js'
  },
  devServer: {
    historyApiFallback:true,
    port: 9000,
    open:true
  },
  stats:{
    assets:false,
    modules:false
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname, './index.html'),
      inject:false
    }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__:false
    }),
  ],
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude:/node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude:/node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/, 
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: [".js",".vue"]
  }
}
