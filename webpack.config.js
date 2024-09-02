<<<<<<< HEAD
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
=======
<<<<<<< HEAD
const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require("mini-css-extract-plugin");

module.exports={
    devtool:'inline-source-map',
    entry:{
      main:'./src/index.js',
    },
    output:{
    path: path.resolve(__dirname, 'dist'),
    filename:'main.js',
    publicPath:'',
    clean:true
    },
    target:['web', 'es5'],
    stats:{children:true}, 
    mode:'development',
    devServer:{
        static: path.resolve(__dirname, './dist'),
        compress:true,
        port:8080,
        open:true
    },
    module:{
      rules:[{
        test:/\.js$/,
        loader:"babel-loader",
        exclude:"/node_modules/"
      },
      {
=======
const path= require('path');
const HtmlWebpackPlugin=require("html-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
>>>>>>> da2dcd06e1a2d3788c7aa5c2e1802a945b20cf8a

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
    clean: true
  },
  target: ['web', 'es5'],
  stats: { children: true },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    port: 8080,
    open: true
  },
  resolve: {
    fallback: {
      "assert": require.resolve("assert/"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "vm": require.resolve("vm-browserify"),
      "path": require.resolve("path-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "util": require.resolve("util/"),
      "fs": false,
      "net": false,
      "tls": false,
      "async_hooks": false,
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
<<<<<<< HEAD
      {
        test: /\.css$/,
        use: [
=======
       {
>>>>>>> origin/master
        test:/\.css$/,
        use:[
>>>>>>> da2dcd06e1a2d3788c7aa5c2e1802a945b20cf8a
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
<<<<<<< HEAD
        ]  
      }, 
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      } 
     ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:"./src/index.html"
      }),
      new MiniCssExtractPlugin()
    ]
=======
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: "asset/resource"
      },
<<<<<<< HEAD
    ]
  }
};
=======
    ]},
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        }),
        new MiniCssExtractPlugin()
    ] 
>>>>>>> origin/master
}
>>>>>>> da2dcd06e1a2d3788c7aa5c2e1802a945b20cf8a
