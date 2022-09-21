const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './src/scripts/index.js',
    aboutUs: './src/scripts/aboutUs.js',
    services: './src/scripts/services.js',
    projects: './src/scripts/projects.js',
    contacts: './src/scripts/contacts.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: ''
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.(png|svg|ico|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: './src/about-us.html',
      filename: 'about-us.html',
      chunks: ['aboutUs']
    }),
    new HtmlWebpackPlugin({
      template: './src/services.html',
      filename: 'services.html',
      chunks: ['services']
    }),
    new HtmlWebpackPlugin({
      template: './src/projects.html',
      filename: 'projects.html',
      chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
      template: './src/contacts.html',
      filename: 'contacts.html',
      chunks: ['contacts']
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}