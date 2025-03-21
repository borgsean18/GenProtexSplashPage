module.exports = {
  mode: 'production',
  entry: './src/js/script.js',
  output: {
    path: __dirname,
    filename: 'dist/js/script.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}; 