const path = require('path');

module.exports = {
  babel(config, { target }) {
    return {
      ...config,
      plugins: config.plugins.concat(
        require.resolve('babel-plugin-react-native-web'),
      ),
      // exclude: /node_modules\/(?![react\-native\-safe\-area\-view])/
      // include: ["node_modules/react-native-safe-area-view"]
    };
  },
  webpack(config, { target }) {
    return { 
      ...config
    };
  }
};
