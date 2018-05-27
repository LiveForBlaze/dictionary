const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const conf = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'main.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './',
       hot: true
     },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
};

module.exports = conf;
