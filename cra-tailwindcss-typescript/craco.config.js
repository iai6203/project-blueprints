const path = require('path')

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
}
