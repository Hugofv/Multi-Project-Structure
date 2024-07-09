const path = require('path');

module.exports = {
  // Resolve
  // https://webpack.js.org/configuration/resolve
  resolve: {
    alias: {
      assets: path.resolve('src/assets'),
      components: path.resolve('src/components'),
      features: path.resolve('src/features'),
      services: path.resolve('src/services'),
      data: path.resolve('src/data'),
    },
    modules: [
      path.resolve('src'),
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
  },
};
