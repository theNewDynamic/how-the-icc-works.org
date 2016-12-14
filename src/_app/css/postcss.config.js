// var postcss = require('postcss')

module.exports = {
  use: [
    'postcss-import',
    'postcss-cssnext',
    'cssnano'
  ],
  input: 'src/_app/css/main.css',
  output: 'src/assets/css/main.min.css',
  'postcss-cssnext': {
    features: {
      autoprefixer: false
    }
  },
  cssnano: {
    discardComments: {
      removeAll: true
    },
    autoprefixer: {
      'browsers': '> 5%'
    }
  }
}
