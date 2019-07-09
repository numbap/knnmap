const path = require('path');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    entry: './src/reactComponents.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'app.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };
};