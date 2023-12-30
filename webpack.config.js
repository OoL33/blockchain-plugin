const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // You might need additional loaders for TypeScript
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // Add presets as needed
          },
        },
      },
      // Other rules for handling CSS, images, etc.
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // Your HTML template
    //   favicon: 'public/favicon.ico', // Your favicon path
    }),
    // Other plugins you might need
  ],
  devServer: {
    historyApiFallback: true,
  },
};
