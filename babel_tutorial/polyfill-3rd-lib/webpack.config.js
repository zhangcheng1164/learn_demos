const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        // exclude: [/node_modules/],
        exclude: [
          filepath => {
                      if (/src/.test(filepath)) {
                        return false
                      }

                      if (/axios/.test(filepath)) {
                        return false
                      }
          
                      // Don't transpile node_modules
                      return /node_modules/.test(filepath)
                    }
        ],
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  }
};
