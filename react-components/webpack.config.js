const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

const esLintPlugin = (isDev) => isDev ? [] : [ new EslintPlugin({ extensions: ['ts', 'js', 'tsx', 'jsx'] }) ]

module.exports = ({dev}) => ({
  mode: dev ? 'development' : 'production',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
    ...esLintPlugin(dev)
  ]
}
)