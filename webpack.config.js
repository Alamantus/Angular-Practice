const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/js');
const SASS_DIR = path.resolve(__dirname, 'src/sass');
const DATA_DIR = path.resolve(__dirname, 'src/data');
const IMG_DIR = path.resolve(__dirname, 'src/images');
const HTML_DIR = path.resolve(__dirname, 'src');

 module.exports = {
    entry: APP_DIR + '/index.jsx',
    output: {
      path: BUILD_DIR,
      filename: 'portfolio.js'
    },
    module: {
      loaders: [
        {
          test: /\.html?$/,
          include: HTML_DIR,
          exclude: /node_modules/,
          loaders: [
                    'file?name=[name].html',
                    'html-minify'
                  ]
        },
        {
          test: /\.scss$/,
          include: SASS_DIR,
          exclude: /node_modules/,
          loaders: ['style', 'css', 'sass']
        },
        {
          test: /\.json$/,
          include: DATA_DIR,
          exclude: /node_modules/,
          loader: 'json'
        },
        {
          test: /\.jsx?$/,
          include: APP_DIR,
          exclude: /node_modules/,
          loader: 'babel'
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
