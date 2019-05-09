const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '/src/dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        REACT_APP_AUDIO_DETAILS_URL: JSON.stringify(process.env.REACT_APP_AUDIO_DETAILS_URL)
      }
    })
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './src/dist',
    overlay: true,
    hot: true
  }
};
