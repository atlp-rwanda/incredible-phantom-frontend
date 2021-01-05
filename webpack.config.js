const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ip = require('ip');
const hostname = ip.address() || 'localhost';

module.exports = {
  entry: './src/index',
  output: { path: path.join(__dirname, '/dist'), filename: 'bundle.js' },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*', https: true },
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, './dist'),
    publicPath: '/',
    host: `${hostname}`,
    port: 3000,
    hot: true,
    inline: true,
    contentBase: './',
    watchOptions: {
      poll: true
    },
    compress: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
};
