const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    library: {
      name: 'SignalR',
      type: 'var'
    },
    filename: 'signal-r-client.js',
    path: path.resolve(__dirname, '../wwwroot/js'),
  }
};