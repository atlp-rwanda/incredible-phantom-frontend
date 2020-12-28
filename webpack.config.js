const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ip = require('ip');
const hostname = ip.address() || 'localhost';
module.exports = {
  entry: './src/index',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
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
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    extensions: ['*', '.js', '.jsx']
  }
};
