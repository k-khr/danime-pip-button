module.exports = {
  // mode: 'production',
  mode: 'development',
  devtool: false,
  entry: {
    contentScript: './src/contentScript.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
  },
  module: {
    rules: [
      {test: /\.ts$/, use: 'ts-loader'},
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
}