const path = require('path');

module.exports = {
  entry: 'src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
      extensions: ["", ".tsx", ".ts", ".js", ".json", ".scss", ".css", ".jpg", ".mp4"],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};