module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: 'last 1 versions'
    },
    'postcss-nested': {},
    'postcss-em-media-query': {},
    cssnano: {}
  }
};
