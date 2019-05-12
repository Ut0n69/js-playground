const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/scripts/index.js",
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  resolve: {
    extensions: [".js", ".ts"],
    alias: {
      "@": path.resolve(__dirname, 'src/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }]
      },
      {
        test: /\.ts$/,
        use: [{
          loader: "ts-loader",
        }]
      },
      {
        test: /\.css/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    })
  ],
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 8080,
    watchContentBase: true,
    contentBase: 'src/',
    inline: true,
    hot: true,
    progress: true
  }
}