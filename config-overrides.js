module.exports = {
  babel(config, { target }) {
    return {
      ...config,
      plugins: config.plugins.concat(
        require.resolve('babel-plugin-react-native-web')
      )
    };
  },
  webpack(config, { target }) {
    return { ...config };
  }
};
