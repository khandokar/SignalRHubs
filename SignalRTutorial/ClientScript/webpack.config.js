const path = require('path');

module.exports = {
 entry: {
    index: './src/index.ts',
    signalR: './src/signalR.ts'
  },
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
    filename: '[name].js',
    path: path.resolve(__dirname, '../wwwroot/js'),
  }
};