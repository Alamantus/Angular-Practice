const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/js');
const SASS_DIR = path.resolve(__dirname, 'src/sass');
const DATA_DIR = path.resolve(__dirname, 'src/data');

 module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'portfolio.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          include: APP_DIR,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.scss$/,
          include: SASS_DIR,
          loaders: ['style', 'css', 'sass']
        },
        {
          test: /\.json$/,
          include: DATA_DIR,
          loader: 'json'
        }
      ]
    },
    // plugins: [
    // When you're ready to publish, check this article out.
    // http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/
    //   new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //       warnings: false
    //     },
    //     output: {
    //       comments: false
    //     }
    //   })
    // ],
    sassLoader: {
      file: './src/sass/main.scss',
      includePaths: ['./node_modules/bootstrap-sass/assets/'],
      outFile: './public/styles.css',
      outputStyle: 'compressed'
    }
 };
