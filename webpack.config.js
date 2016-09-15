const webpack = require('webpack');

 module.exports = {
    entry: './src/js/controllers.js',
    output: {
      path: './public',
      filename: 'portfolio.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        }
      ]
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        output: {
          comments: false
        }
      })
    ],
    sassLoader: {
      file: './src/sass/main.scss',
      includePaths: ['./node_modules/bootstrap-sass/assets/'],
      outFile: './public/styles.css',
      outputStyle: 'compressed'
    }
 };
