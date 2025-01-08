const path = require('path');
const { text } = require('stream/consumers');

module.exports = {
  entry: '',
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        text: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [],
  mode: 'dev',
};
